"use client";

import { useRef, useState } from 'react';
import { sendContactEmail } from '@/app/actions/sendEmail';
import PageHeader from '@/components/PageHeader';
import FormModal from '@/components/FormModal';
import { fieldClass, labelClass } from '@/components/formStyles';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (formData: FormData) => {
    setStatus('submitting');
    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus('success');
      formRef.current?.reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white text-ink">
      {status === 'success' && (
        <FormModal
          tone="success"
          title="Message sent"
          body="Thank you! Your inquiry has been successfully delivered. Sensei will review it and get back to you shortly."
          actionLabel="Close window"
          onClose={() => setStatus('idle')}
        />
      )}

      {status === 'error' && (
        <FormModal
          tone="error"
          title="Something went wrong"
          body="Oops! Something went wrong while sending your message. Please try again or contact us directly via email."
          actionLabel="Try again"
          onClose={() => setStatus('idle')}
        />
      )}

      <PageHeader
        label="Contact"
        title="Get in touch"
        intro="Whether you have questions about our schedule, private training, or joining the dojo, our team is ready to assist you."
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* FORM */}
            <div className="lg:col-span-7">
              <p className="label text-ink-faint mb-6">Direct message</p>
              <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1] mb-10">
                Send an inquiry
              </h2>

              <form ref={formRef} action={handleSubmit} className="space-y-7">
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
                      Phone number <span className="text-ink-faint font-normal normal-case tracking-normal">(optional)</span>
                    </label>
                    <input type="tel" id="phone" name="phone" autoComplete="tel" className={fieldClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="topic" className={labelClass}>
                    Subject / topic <span className="text-dojo">*</span>
                  </label>
                  <select id="topic" name="topic" required defaultValue="" className={`${fieldClass} cursor-pointer`}>
                    <option value="" disabled>
                      Select a topic
                    </option>
                    <option value="General Classes">General Classes</option>
                    <option value="Private Training">Private Training</option>
                    <option value="Seminars / Events">Seminars / Events</option>
                    <option value="Other Inquiry">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    How can we help you? <span className="text-dojo">*</span>
                  </label>
                  <textarea id="message" name="message" required rows={5} className={`${fieldClass} resize-y`} />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`inline-flex items-center justify-center gap-2.5 bg-dojo text-white font-semibold px-8 py-4 rounded-md transition-colors duration-200 ${
                      status === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-dojo-deep cursor-pointer'
                    }`}
                  >
                    {status === 'submitting' ? 'Sending…' : 'Send message'}
                    {status !== 'submitting' && <span aria-hidden="true">→</span>}
                  </button>
                </div>
              </form>
            </div>

            {/* INFO */}
            <div className="lg:col-span-5">
              <div className="bg-steel text-white p-8 lg:p-10 rounded-md h-full">
                <div className="space-y-10">
                  <div>
                    <h2 className="label text-white/50 mb-4">Dojo location</h2>
                    <p className="font-display font-bold text-lg mb-1.5">Doshinkai Dojo</p>
                    <address className="not-italic text-white/70 leading-relaxed">
                      6620 Montgomery Road
                      <br />
                      Suite 3
                      <br />
                      Cincinnati, OH 45213
                    </address>
                  </div>

                  <div className="pt-8 border-t border-steel-line">
                    <h2 className="label text-white/50 mb-4">Mailing address</h2>
                    <address className="not-italic text-white/70 leading-relaxed">
                      P.O. Box 42316
                      <br />
                      Cincinnati, OH 45242
                    </address>
                  </div>

                  <div className="pt-8 border-t border-steel-line">
                    <h2 className="label text-white/50 mb-4">Direct contact</h2>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="tel:+18325130058"
                          className="group flex items-center gap-3 text-white/85 hover:text-dojo transition-colors tnum"
                        >
                          <span
                            aria-hidden="true"
                            className="w-6 h-px bg-steel-line group-hover:bg-dojo group-hover:w-9 transition-all duration-300"
                          />
                          (832) 513 – 0058
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:dskdojo1@gmail.com"
                          className="group flex items-center gap-3 text-white/85 hover:text-dojo transition-colors break-all"
                        >
                          <span
                            aria-hidden="true"
                            className="w-6 h-px bg-steel-line group-hover:bg-dojo group-hover:w-9 transition-all duration-300"
                          />
                          dskdojo1@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-8 border-t border-steel-line">
                    <h2 className="label text-white/50 mb-4">Language</h2>
                    <p className="text-white/70">Se Habla Español</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
