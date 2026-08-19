"use client";

import { useState, useRef } from 'react';
import { sendContactEmail } from '@/app/actions/sendEmail';
import PageHeader from '@/components/PageHeader';
import FormModal from '@/components/FormModal';
import { fieldClass, labelClass } from '@/components/formStyles';

const plans = [
  {
    id: 'trial',
    name: 'Free Trial Class',
    ages: 'All Ages',
    desc: 'Experience your first Shotokan Karate class for free. Meet the instructor, learn basic forms, and see if our dojo is the right fit for you.',
    schedule: 'By Appointment',
    popular: true,
  },
  {
    id: 'youth',
    name: 'Youth Class',
    ages: 'Ages 5 - 11',
    desc: 'Foundational training focusing on discipline, coordination, and basic technique.',
    schedule: 'Wednesdays',
  },
  {
    id: 'adult',
    name: 'All Levels',
    ages: 'Ages 12+',
    desc: 'Comprehensive Shotokan training for teens and adults, from beginners to black belts.',
    schedule: 'Sun, Mon, Wed, Sat',
  },
  {
    id: 'advanced',
    name: 'Intermediate / Adv',
    ages: 'Ages 12+',
    desc: 'High-intensity technical training and sparring for experienced practitioners.',
    schedule: 'Sun, Sat',
  },
];

export default function ClassRegistrationForm() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (formData: FormData) => {
    setStatus('submitting');
    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus('success');
      formRef.current?.reset();
      setSelectedPlan(null); // Clear the selected plan highlight
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white text-ink">
      {status === 'success' && (
        <FormModal
          tone="success"
          title="Registration received"
          body="Thank you! We have your details. Sensei will review your registration and contact you shortly to finalise enrollment."
          actionLabel="Close window"
          onClose={() => setStatus('idle')}
        />
      )}

      {status === 'error' && (
        <FormModal
          tone="error"
          title="Something went wrong"
          body="Oops! Something went wrong while sending your registration. Please try again or contact us directly via email."
          actionLabel="Try again"
          onClose={() => setStatus('idle')}
        />
      )}

      <PageHeader
        label="Registration"
        title="Join the dojo"
        intro="Begin your journey in traditional Shotokan Karate. Select your training path below and complete your registration."
      />

      {/* ── STEP 01 — SELECT A PATH ──────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="label text-ink-faint mb-6">Step 01</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1]">Select your path</h2>
          </div>

          <fieldset>
            <legend className="sr-only">Choose a training path</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {plans.map((plan) => {
                const active = selectedPlan === plan.name;
                return (
                  <label
                    key={plan.id}
                    className={`relative flex flex-col cursor-pointer rounded-md border p-6 transition-colors duration-200 ${
                      active ? 'border-dojo bg-dojo-soft' : 'border-line hover:border-dojo'
                    }`}
                  >
                    <input
                      type="radio"
                      name="planChoice"
                      value={plan.name}
                      checked={active}
                      onChange={() => setSelectedPlan(plan.name)}
                      className="sr-only"
                    />

                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span className="label text-ink-faint">{plan.ages}</span>
                      {plan.popular && (
                        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-dojo border border-dojo/40 rounded px-2 py-0.5">
                          Popular
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-extrabold text-xl leading-tight mb-3">{plan.name}</h3>
                    <p className="text-sm text-ink-soft leading-relaxed mb-5 flex-grow">{plan.desc}</p>

                    <div className="flex items-center justify-between gap-3 pt-4 border-t border-line">
                      <span className="text-sm font-semibold">{plan.schedule}</span>
                      <span
                        aria-hidden="true"
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          active ? 'border-dojo bg-dojo text-white' : 'border-line'
                        }`}
                      >
                        {active && (
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                    </div>
                  </label>
                );
              })}
            </div>
          </fieldset>
        </div>
      </section>

      {/* ── STEP 02 — STUDENT DETAILS ────────────────────────── */}
      <section className="bg-bone border-t border-line py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="label text-ink-faint mb-6">Step 02</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1]">Student details</h2>
          </div>

          <form ref={formRef} action={handleSubmit} className="space-y-7">
            <input type="hidden" name="selectedPlan" value={selectedPlan || 'None Selected'} />
            <input type="hidden" name="topic" value="Class Registration" />

            {/* HONEYPOT SPAM PROTECTION */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="botcheck">Do not fill this out if you are human:</label>
              <input type="text" id="botcheck" name="botcheck" autoComplete="off" tabIndex={-1} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className={labelClass}>
                  First name <span className="text-dojo">*</span>
                </label>
                <input type="text" id="firstName" name="firstName" required autoComplete="given-name" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="lastName" className={labelClass}>
                  Last name <span className="text-dojo">*</span>
                </label>
                <input type="text" id="lastName" name="lastName" required autoComplete="family-name" className={fieldClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email address <span className="text-dojo">*</span>
                </label>
                <input type="email" id="email" name="email" required autoComplete="email" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone number <span className="text-dojo">*</span>
                </label>
                <input type="tel" id="phone" name="phone" required autoComplete="tel" className={fieldClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="age" className={labelClass}>
                  Student age <span className="text-dojo">*</span>
                </label>
                <input type="number" id="age" name="age" required min={1} max={120} className={fieldClass} />
              </div>
              <div>
                <label htmlFor="experience" className={labelClass}>
                  Prior experience <span className="text-dojo">*</span>
                </label>
                <select id="experience" name="experience" required defaultValue="" className={`${fieldClass} cursor-pointer`}>
                  <option value="" disabled>
                    Select experience level
                  </option>
                  <option value="None / Beginner">None / Beginner</option>
                  <option value="Some Martial Arts">Some Martial Arts Experience</option>
                  <option value="Advanced / Prior Black Belt">Advanced / Prior Black Belt</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="medicalNotes" className={labelClass}>
                Any medical conditions or notes?{' '}
                <span className="text-ink-faint font-normal normal-case tracking-normal">(optional)</span>
              </label>
              <textarea id="medicalNotes" name="medicalNotes" rows={4} className={`${fieldClass} resize-y`} />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-dojo text-white font-semibold px-8 py-4 rounded-md transition-colors duration-200 ${
                  status === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-dojo-deep cursor-pointer'
                }`}
              >
                {status === 'submitting' ? 'Submitting…' : 'Complete registration'}
                {status !== 'submitting' && <span aria-hidden="true">→</span>}
              </button>

              <p className="text-sm text-ink-faint mt-5">
                No payment required today. We will contact you to finalize enrollment.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
