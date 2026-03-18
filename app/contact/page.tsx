"use client";

import { useRef, useState } from 'react';
import { sendContactEmail } from '@/app/actions/sendEmail';

export default function Contact() {
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
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-red-700 selection:text-white pb-24 relative">
      
      {/* --- SUCCESS MODAL OVERLAY --- */}
      {status === 'success' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="bg-white p-10 max-w-md w-full border-t-8 border-red-700 shadow-2xl relative text-center">
            <div className="w-20 h-20 bg-red-50 text-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tighter text-black mb-4">Message Sent</h3>
            <p className="text-neutral-500 mb-8 leading-relaxed">
              Thank you! Your inquiry has been successfully delivered. Sensei will review it and get back to you shortly.
            </p>
            <button 
              onClick={() => setStatus('idle')} 
              className="w-full bg-black text-white font-bold uppercase tracking-widest py-4 hover:bg-red-700 transition-colors duration-300"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

      {/* --- ERROR MODAL OVERLAY --- */}
      {status === 'error' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="bg-white p-10 max-w-md w-full border-t-8 border-black shadow-2xl relative text-center">
            <div className="w-20 h-20 bg-neutral-100 text-black rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tighter text-black mb-4">Transmission Failed</h3>
            <p className="text-neutral-500 mb-8 leading-relaxed">
              Oops! Something went wrong while sending your message. Please try again or contact us directly via email.
            </p>
            <button 
              onClick={() => setStatus('idle')} 
              className="w-full bg-red-700 text-white font-bold uppercase tracking-widest py-4 hover:bg-black transition-colors duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      )}


      {/* 1. CINEMATIC HEADER */}
      <section className="relative pt-[120px] md:pt-[180px] pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-200">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div>
            <div className="w-16 h-1.5 bg-red-700 mb-8"></div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-black">
              Get In <br />
              <span className="text-neutral-300">Touch</span>
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-neutral-500 font-medium leading-relaxed">
              Whether you have questions about our schedule, private training, or joining the dojo, our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: The Form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="mb-12">
              <h2 className="text-xs font-black uppercase tracking-widest text-red-700 mb-2">Direct Message</h2>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-black">Send an Inquiry</h3>
            </div>

            <form ref={formRef} action={handleSubmit} className="space-y-10">
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  {/* ADDED name="firstName" */}
                  <input type="text" id="firstName" name="firstName" required className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium text-black focus:outline-none focus:border-red-700 transition-colors peer" placeholder=" " />
                  <label htmlFor="firstName" className="absolute left-0 top-3 text-neutral-400 text-lg font-medium transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-700 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-black peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                    First Name
                  </label>
                </div>
                <div className="relative group">
                  {/* ADDED name="lastName" */}
                  <input type="text" id="lastName" name="lastName" required className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium text-black focus:outline-none focus:border-red-700 transition-colors peer" placeholder=" " />
                  <label htmlFor="lastName" className="absolute left-0 top-3 text-neutral-400 text-lg font-medium transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-700 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-black peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                    Last Name
                  </label>
                </div>
              </div>

              {/* Contact Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  {/* ADDED name="email" */}
                  <input type="email" id="email" name="email" required className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium text-black focus:outline-none focus:border-red-700 transition-colors peer" placeholder=" " />
                  <label htmlFor="email" className="absolute left-0 top-3 text-neutral-400 text-lg font-medium transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-700 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-black peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                    Email Address
                  </label>
                </div>
                <div className="relative group">
                  {/* ADDED name="phone" */}
                  <input type="tel" id="phone" name="phone" className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium text-black focus:outline-none focus:border-red-700 transition-colors peer" placeholder=" " />
                  <label htmlFor="phone" className="absolute left-0 top-3 text-neutral-400 text-lg font-medium transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-700 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-black peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                    Phone Number (Optional)
                  </label>
                </div>
              </div>

              {/* Topic Dropdown */}
              <div className="relative group">
                {/* ADDED name="topic" */}
                <select id="topic" name="topic" required defaultValue="" className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium text-black focus:outline-none focus:border-red-700 transition-colors appearance-none cursor-pointer">
                  <option value="" disabled hidden>Subject / Topic</option>
                  <option value="General Classes">General Classes</option>
                  <option value="Private Training">Private Training</option>
                  <option value="Seminars / Events">Seminars / Events</option>
                  <option value="Other Inquiry">Other Inquiry</option>
                </select>
                <div className="absolute right-0 top-4 pointer-events-none">
                  <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>

              {/* Message */}
              <div className="relative group pt-4">
                {/* ADDED name="message" */}
                <textarea id="message" name="message" required rows={4} className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium text-black focus:outline-none focus:border-red-700 transition-colors peer resize-none" placeholder=" "></textarea>
                <label htmlFor="message" className="absolute left-0 top-6 text-neutral-400 text-lg font-medium transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-700 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-black peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                  How can we help you?
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`w-full md:w-auto relative inline-flex items-center justify-center px-12 py-5 text-sm font-bold uppercase tracking-widest text-white bg-black overflow-hidden shadow-xl transition-all duration-300 group ${status === 'submitting' ? 'opacity-80 cursor-not-allowed' : 'hover:-translate-y-1'}`}
                >
                  <span className="absolute inset-0 w-full h-full bg-red-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  <span className="relative flex items-center gap-3">
                    {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
                    {status !== 'submitting' && <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>}
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN: Contact Info Block */}
          <div className="lg:col-span-5">
            <div className="bg-black text-white p-10 md:p-14 border-t-8 border-red-700 shadow-2xl relative overflow-hidden h-full">
              
              {/* Background Watermark */}
              <div className="absolute -bottom-10 -right-10 text-[150px] font-black uppercase text-neutral-900 opacity-50 pointer-events-none leading-none select-none">
                OH
              </div>

              <div className="relative z-10 flex flex-col space-y-12">
                
                {/* Physical Location */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-red-600 mb-4">Dojo Location</h4>
                  <ul className="space-y-1 text-lg text-neutral-300 font-medium">
                    <li className="text-white font-bold mb-1">Doshinkai Dojo</li>
                    <li>6620 Montgomery Road</li>
                    <li>Suite 3</li>
                    <li>Cincinnati, OH 45213</li>
                  </ul>
                </div>

                {/* Mailing Address */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-red-600 mb-4">Mailing Address</h4>
                  <ul className="space-y-1 text-lg text-neutral-300 font-medium">
                    <li>P.O. Box 42316</li>
                    <li>Cincinnati, OH 45242</li>
                  </ul>
                </div>

                {/* Direct Contact */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-red-600 mb-4">Direct Contact</h4>
                  <ul className="space-y-4 text-lg text-neutral-300 font-medium">
                    <li>
                      <a href="tel:+18325130058" className="hover:text-red-500 transition-colors flex items-center gap-3 group">
                        <span className="w-8 h-px bg-neutral-700 group-hover:bg-red-500 transition-colors"></span>
                        (832) 513 – 0058
                      </a>
                    </li>
                    <li>
                      <a href="mailto:dskdojo1@gmail.com" className="hover:text-red-500 transition-colors flex items-center gap-3 group">
                        <span className="w-8 h-px bg-neutral-700 group-hover:bg-red-500 transition-colors"></span>
                        dskdojo1@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}