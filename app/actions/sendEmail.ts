'use server';

import { Resend } from 'resend';
import { headers } from 'next/headers';

const resend = new Resend(process.env.RESEND_API_KEY);

/** Verify a domain in Resend and set RESEND_FROM to use it. The resend.dev
 *  sender only delivers to the Resend account owner and hurts deliverability. */
const FROM = process.env.RESEND_FROM || 'Doshinkai Dojo <onboarding@resend.dev>';
const TO = process.env.RESEND_TO || 'dskdojo1@gmail.com';

/** Minimum time a human plausibly needs to fill the form, in ms. */
const MIN_FILL_MS = 2500;
/** Reject stamps older than this — a stale replayed page. */
const MAX_FILL_MS = 1000 * 60 * 60 * 6;

const RATE_LIMIT = { max: 4, windowMs: 1000 * 60 * 15 };

/** Per-instance memory. Serverless instances are recycled, so this throttles
 *  bursts from one source rather than enforcing a global quota. */
const hits = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(key, recent);

  // Keep the map from growing without bound on a long-lived instance.
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= RATE_LIMIT.windowMs)) hits.delete(k);
    }
  }

  return recent.length > RATE_LIMIT.max;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Collapse newlines and cap length. Used for anything that lands in a header. */
function oneLine(value: string, max = 120): string {
  return value.replace(/[\r\n]+/g, ' ').trim().slice(0, max);
}

function field(formData: FormData, name: string, max = 500): string {
  const raw = formData.get(name);
  return typeof raw === 'string' ? raw.trim().slice(0, max) : '';
}

const EMAIL_RE = /^[^\s@<>"';,]+@[^\s@<>"';,.]+\.[a-z]{2,}$/i;

const countLinks = (text: string) => (text.match(/https?:\/\/|www\.|\[url|<a\s/gi) ?? []).length;

export async function sendContactEmail(formData: FormData) {
  // 1. HONEYPOT — report success so bots do not learn they were caught.
  const botcheck = formData.get('botcheck');
  if (typeof botcheck === 'string' && botcheck.trim().length > 0) {
    console.warn('[spam] honeypot filled');
    return { success: true };
  }

  // 2. TIMING — the stamp is written in the browser on mount, so a submission
  //    arriving milliseconds later was not typed by a person.
  const stamp = Number(formData.get('formTs'));
  if (!Number.isFinite(stamp) || stamp <= 0) {
    console.warn('[spam] missing form timestamp');
    return { success: true };
  }
  const elapsed = Date.now() - stamp;
  if (elapsed < MIN_FILL_MS) {
    console.warn(`[spam] submitted after only ${elapsed}ms`);
    return { success: true };
  }
  // A long-idle tab is a real visitor, not a bot — tell them how to recover
  // rather than silently discarding what they typed.
  if (elapsed > MAX_FILL_MS) {
    return { success: false, error: 'This page has been open for a while. Please reload it and send again.' };
  }

  // 3. RATE LIMIT per client address.
  const hdrs = await headers();
  const ip = (hdrs.get('x-forwarded-for') ?? '').split(',')[0].trim() || hdrs.get('x-real-ip') || 'unknown';
  if (rateLimited(ip)) {
    console.warn(`[spam] rate limited: ${ip}`);
    return { success: false, error: 'Too many submissions. Please try again later.' };
  }

  // 4. EXTRACT
  const firstName = field(formData, 'firstName', 80);
  const lastName = field(formData, 'lastName', 80);
  const email = field(formData, 'email', 200);
  const phone = field(formData, 'phone', 40);
  const topic = field(formData, 'topic', 100);
  const message = field(formData, 'message', 5000) || field(formData, 'medicalNotes', 5000) || field(formData, 'goals', 5000);
  const selectedPlan = field(formData, 'selectedPlan', 100);
  const age = field(formData, 'age', 10);
  const experience = field(formData, 'experience', 100) || field(formData, 'currentRank', 100);
  const preferredTime = field(formData, 'preferredTime', 200);

  // 5. VALIDATE
  if (!firstName || !lastName) {
    return { success: false, error: 'Please provide your first and last name.' };
  }
  if (!EMAIL_RE.test(email)) {
    return { success: false, error: 'Please provide a valid email address.' };
  }
  // Name fields never legitimately contain links.
  if (countLinks(`${firstName} ${lastName}`) > 0) {
    console.warn('[spam] link in name field');
    return { success: true };
  }
  if (countLinks(message) > 2) {
    console.warn('[spam] too many links in message');
    return { success: true };
  }

  // 6. BUILD — every value is escaped, so submitted markup cannot render.
  const rows: [string, string][] = [
    ['Name', `${firstName} ${lastName}`],
    ['Email', email],
    ['Phone', phone || 'Not provided'],
  ];

  if (topic) rows.push(['Topic', topic]);
  if (selectedPlan && selectedPlan !== 'None Selected') rows.push(['Selected Plan', selectedPlan]);
  if (age) rows.push(['Age', age]);
  if (experience) rows.push(['Experience/Rank', experience]);
  if (preferredTime) rows.push(['Preferred Time', preferredTime]);

  const htmlContent = [
    '<h2>New Dojo Submission</h2>',
    ...rows.map(([label, value]) => `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>`),
    '<br/><p><strong>Message / Notes / Goals:</strong></p>',
    `<p>${escapeHtml(message || 'No message provided').replace(/\n/g, '<br/>')}</p>`,
  ].join('\n');

  try {
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: TO,
      subject: oneLine(`New Dojo Inquiry: ${firstName} ${lastName}`),
      replyTo: email,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend rejected the email:', error);
      return { success: false, error: 'We could not send your message. Please email us directly.' };
    }

    console.log('Email sent:', data?.id);
    return { success: true };
  } catch (err) {
    // Never surface internal details to the browser.
    console.error('sendContactEmail failed:', err);
    return { success: false, error: 'We could not send your message. Please email us directly.' };
  }
}
