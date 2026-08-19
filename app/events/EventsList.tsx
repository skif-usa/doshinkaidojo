"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import { upcomingEvents } from '@/lib/events';

export default function EventsList() {
  // We use state to track which event card is currently expanded
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
  // Language toggle per event card (defaults to Spanish for this event)
  const [eventLang, setEventLang] = useState<Record<string, 'es' | 'en'>>({});

  const toggleEvent = (id: string) => {
    if (expandedEvent === id) {
      setExpandedEvent(null); // Close if already open
    } else {
      setExpandedEvent(id); // Open the clicked one
    }
  };

  return (
    <div className="bg-white text-ink">
      <PageHeader
        label="Events"
        title="Upcoming events"
        intro="Join us for exclusive seminars, training camps, and special events featuring world-renowned Shotokan instructors."
      />

      {/* ── EVENTS FEED ──────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {upcomingEvents.length === 0 && (
            <div className="border border-line bg-bone py-16 px-8 text-center rounded-md">
              <h2 className="font-display font-extrabold text-2xl lg:text-3xl mb-4">No upcoming events right now</h2>
              <p className="text-lg text-ink-soft max-w-xl mx-auto leading-relaxed">
                We&apos;re busy planning our next seminars and training camps. Check back soon, or explore our past
                events below.
              </p>
            </div>
          )}

          <div className="space-y-10">
            {upcomingEvents.map((event) => {
              const isExpanded = expandedEvent === event.id;
              const lang = eventLang[event.id] ?? 'es';
              const t = event.content[lang];

              return (
                <article key={event.id} className="border border-line rounded-md overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Poster */}
                    <div className="lg:col-span-5 relative aspect-3/4 sm:aspect-4/3 lg:aspect-auto lg:min-h-[30rem] bg-steel">
                      <Image
                        src={event.image}
                        alt={`Poster for ${event.title}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-contain p-4"
                      />
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <span className="label text-ink-faint">{event.date}</span>

                        {/* Language toggle */}
                        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em]">
                          <button
                            onClick={() => setEventLang((prev) => ({ ...prev, [event.id]: 'es' }))}
                            aria-pressed={lang === 'es'}
                            className={`px-2 py-1 rounded cursor-pointer transition-colors ${
                              lang === 'es' ? 'bg-dojo text-white' : 'text-ink-faint hover:text-ink'
                            }`}
                          >
                            ES
                          </button>
                          <button
                            onClick={() => setEventLang((prev) => ({ ...prev, [event.id]: 'en' }))}
                            aria-pressed={lang === 'en'}
                            className={`px-2 py-1 rounded cursor-pointer transition-colors ${
                              lang === 'en' ? 'bg-dojo text-white' : 'text-ink-faint hover:text-ink'
                            }`}
                          >
                            EN
                          </button>
                        </div>
                      </div>

                      <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.08] mb-4">
                        {event.title}
                      </h2>
                      <p className="text-lg text-ink-soft leading-relaxed">{t.shortDesc}</p>

                      {!isExpanded && (
                        <button
                          onClick={() => toggleEvent(event.id)}
                          aria-expanded={false}
                          className="mt-7 self-start inline-flex items-center gap-2.5 border border-line text-ink font-semibold px-6 py-3.5 rounded-md hover:border-dojo hover:text-dojo transition-colors duration-200 cursor-pointer"
                        >
                          Read more
                          <span aria-hidden="true">→</span>
                        </button>
                      )}

                      {isExpanded && (
                        <div className="mt-8 pt-8 border-t border-line">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                            <div>
                              <h3 className="label text-ink-faint mb-4">{t.labels.location}</h3>
                              <p className="font-semibold mb-1.5">{event.location.name}</p>
                              <address className="not-italic text-ink-soft leading-relaxed">
                                {event.location.address.map((line) => (
                                  <span key={line}>
                                    {line}
                                    <br />
                                  </span>
                                ))}
                              </address>
                              <p className="font-semibold text-dojo mt-2.5">{event.date}</p>
                            </div>

                            <div>
                              <h3 className="label text-ink-faint mb-4">{t.labels.schedule}</h3>
                              <ul className="text-ink-soft space-y-2">
                                {t.schedule.map((session) => (
                                  <li key={session} className="flex items-baseline gap-3">
                                    <span aria-hidden="true" className="w-1.5 h-1.5 bg-dojo shrink-0" />
                                    {session}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="bg-bone border border-line rounded-md p-6 mb-8">
                            <h3 className="label text-ink-faint mb-5">{t.labels.cost}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <ul className="space-y-1.5">
                                {t.pricing.map((price) => (
                                  <li key={price} className="font-display font-bold text-lg">
                                    {price}
                                  </li>
                                ))}
                              </ul>
                              <div className="text-ink-soft">
                                <p className="font-semibold text-ink mb-1.5">{t.labels.contactInfo}</p>
                                <p>{event.contact.name}</p>
                                <p>
                                  <a
                                    href={`tel:${event.contact.phone.replace(/[^+\d]/g, '')}`}
                                    className="hover:text-dojo transition-colors tnum"
                                  >
                                    {event.contact.phone}
                                  </a>
                                </p>
                                <p>
                                  <a
                                    href={`mailto:${event.contact.email}`}
                                    className="hover:text-dojo transition-colors break-all"
                                  >
                                    {event.contact.email}
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>

                          <p className="border-l-2 border-dojo pl-5 text-ink-soft leading-relaxed mb-8">{t.note}</p>

                          <p className="font-display font-extrabold text-xl leading-snug mb-8">
                            &ldquo;{t.quote}&rdquo;
                          </p>

                          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <a
                              href={event.registerLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2.5 bg-dojo text-white font-semibold px-7 py-4 rounded-md hover:bg-dojo-deep transition-colors duration-200"
                            >
                              {t.labels.register}
                              <span aria-hidden="true">→</span>
                            </a>

                            <button
                              onClick={() => toggleEvent(event.id)}
                              aria-expanded
                              className="text-sm font-semibold text-ink-faint hover:text-ink transition-colors cursor-pointer py-2"
                            >
                              Close details ×
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ARCHIVE CTA ──────────────────────────────────────── */}
      <section className="bg-bone border-t border-line py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-display font-extrabold text-2xl lg:text-3xl mb-3">Looking for past seminars?</h2>
              <p className="text-ink-soft leading-relaxed max-w-lg">
                Browse the gallery of clinics, gasshukus, and visiting instructors we have hosted.
              </p>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Link
                href="/events/archive"
                className="inline-flex items-center gap-2.5 border border-line bg-white text-ink font-semibold px-7 py-4 rounded-md hover:border-dojo hover:text-dojo transition-colors duration-200"
              >
                View event archive
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
