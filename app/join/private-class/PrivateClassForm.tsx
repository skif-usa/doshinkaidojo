"use client";

import { useRef, useState } from 'react';
import { sendContactEmail } from '@/app/actions/sendEmail';
import PageHeader from '@/components/PageHeader';
import FormModal from '@/components/FormModal';
import { useFormTimestamp } from '@/lib/useFormTimestamp';
import { fieldClass, labelClass } from '@/components/formStyles';

const benefits = [
  {
    title: 'Tailored Curriculum',
    desc: 'Every minute is designed around your specific body mechanics, learning speed, and personal martial arts goals.',
  },
  {
    title: 'Accelerated Progress',
    desc: 'Receive immediate, microscopic corrections on your form and technique that are impossible to provide in a large group setting.',
  },
  {
    title: 'Tournament & Exam Prep',
    desc: 'Dedicated focus on perfecting your Kata and Kumite for upcoming SKIF belt examinations or competitive tournaments.',
  },
  {
    title: 'Flexible Scheduling',
    desc: 'Train at times that work for your busy lifestyle. Sessions are scheduled directly with the instructor.',
  },
];

export default function PrivateClassForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { stamp, restamp } = useFormTimestamp();

  const handleSubmit = async (formData: FormData) => {
    setStatus('submitting');
    stamp(formData);
    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus('success');
      formRef.current?.reset();
      restamp();
    } else {
      setErrorMsg('error' in result && result.error ? result.error : null);
      setStatus('error');
    }
  };

  return (
    <div className="bg-white text-ink">
      {status === 'success' && (
        <FormModal
          tone="success"
          title="Request received"
          body="Thank you! Your private session request has been successfully delivered. Sensei Fung will contact you directly to discuss availability and pricing."
          actionLabel="Close window"
          onClose={() => setStatus('idle')}
        />
      )}

      {status === 'error' && (
        <FormModal
          tone="error"
          title="Something went wrong"
          body={errorMsg ?? 'Oops! Something went wrong while sending your request. Please try again or contact us directly via email.'}
          actionLabel="Try again"
          onClose={() => setStatus('idle')}
        />
      )}

      <PageHeader
        label="Private instruction"
        title="Private instruction"
        intro="Experience the ultimate acceleration in your martial arts journey with exclusive, 1-on-1 training sessions tailored entirely to your goals."
      />

      {/* ── THE ADVANTAGE ────────────────────────────────────── */}
      <section className="bg-steel text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
            <div className="lg:col-span-5">
              <p className="label text-white/50 mb-6">The advantage</p>
              <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1]">
                Mastery, accelerated
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-14">
              <p className="text-lg text-white/70 leading-relaxed">
                Whether you are a beginner wanting to build a flawless foundation, or an advanced practitioner preparing
                for a Dan grading, private instruction provides the dedicated focus required for elite performance.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
            {benefits.map((item, i) => (
              <div key={item.title} className="flex gap-6 py-7 border-t border-steel-line">
                <span className="font-display font-bold text-sm text-dojo tnum pt-1 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display font-extrabold text-lg mb-2.5">{item.title}</h3>
                  <p className="text-white/65 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING FORM ─────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="label text-ink-faint mb-6">Request a session</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1]">
              Consultation inquiry
            </h2>
          </div>

          <form ref={formRef} action={handleSubmit} className="space-y-7">
            <input type="hidden" name="topic" value="Private Class Request" />
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
                <label htmlFor="currentRank" className={labelClass}>
                  Current rank / experience <span className="text-dojo">*</span>
                </label>
                <select id="currentRank" name="currentRank" required defaultValue="" className={`${fieldClass} cursor-pointer`}>
                  <option value="" disabled>
                    Select your rank
                  </option>
                  <option value="None / Beginner">None / Complete Beginner</option>
                  <option value="White/Yellow/Orange">White / Yellow / Orange Belt</option>
                  <option value="Green/Blue/Purple">Green / Blue / Purple Belt</option>
                  <option value="Brown Belt">Brown Belt</option>
                  <option value="Black Belt">Black Belt (Dan)</option>
                </select>
              </div>
              <div>
                <label htmlFor="preferredTime" className={labelClass}>
                  Preferred days / times <span className="text-dojo">*</span>
                </label>
                <input type="text" id="preferredTime" name="preferredTime" required className={fieldClass} />
              </div>
            </div>

            <div>
              <label htmlFor="goals" className={labelClass}>
                What are your specific training goals? <span className="text-dojo">*</span>
              </label>
              <textarea id="goals" name="goals" required rows={5} className={`${fieldClass} resize-y`} />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-dojo text-white font-semibold px-8 py-4 rounded-md transition-colors duration-200 ${
                  status === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-dojo-deep cursor-pointer'
                }`}
              >
                {status === 'submitting' ? 'Sending…' : 'Request consultation'}
                {status !== 'submitting' && <span aria-hidden="true">→</span>}
              </button>

              <p className="text-sm text-ink-faint mt-5">
                Sensei Fung will contact you directly to discuss availability and pricing.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
