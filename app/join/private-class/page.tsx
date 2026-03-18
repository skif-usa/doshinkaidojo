"use client";

import { useRef, useState } from 'react';
import { sendContactEmail } from '@/app/actions/sendEmail';

export default function PrivateClass() {
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

  const benefits = [
    {
      title: "Tailored Curriculum",
      desc: "Every minute is designed around your specific body mechanics, learning speed, and personal martial arts goals."
    },
    {
      title: "Accelerated Progress",
      desc: "Receive immediate, microscopic corrections on your form and technique that are impossible to provide in a large group setting."
    },
    {
      title: "Tournament & Exam Prep",
      desc: "Dedicated focus on perfecting your Kata and Kumite for upcoming SKIF belt examinations or competitive tournaments."
    },
    {
      title: "Flexible Scheduling",
      desc: "Train at times that work for your busy lifestyle. Sessions are scheduled directly with the instructor."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-red-700 selection:text-white pb-24 relative">
      
      {/* --- SUCCESS MODAL OVERLAY --- */}
      {status === 'success' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="bg-white p-10 max-w-md w-full border-t-8 border-red-700 shadow-2xl relative text-center">
            <div className="w-20 h-20 bg-red-50 text-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tighter text-black mb-4">Request Received</h3>
            <p className="text-neutral-500 mb-8 leading-relaxed">
              Thank you! Your private session request has been successfully delivered. Sensei Fung will contact you directly to discuss availability and pricing.
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
              Oops! Something went wrong while sending your request. Please try again or contact us directly via email.
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
              Private <br />
              <span className="text-neutral-300">Instruction</span>
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-neutral-500 font-medium leading-relaxed">
              Experience the ultimate acceleration in your martial arts journey with exclusive, 1-on-1 training sessions tailored entirely to your goals.
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHY PRIVATE INSTRUCTION (VIP Section) */}
      <section className="bg-black text-white py-24 my-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-red-600 mb-2">The Advantage</h3>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Mastery, <br /> Accelerated.</h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Whether you are a beginner wanting to build a flawless foundation, or an advanced practitioner preparing for a Dan grading, private instruction provides the dedicated focus required for elite performance.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((item, index) => (
                <div key={index} className="border-l-2 border-red-700 pl-6">
                  <span className="text-red-700 font-black text-sm mb-2 block">0{index + 1}</span>
                  <h4 className="text-xl font-bold uppercase tracking-tight text-white mb-3">{item.title}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. BOOKING FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-neutral-50 p-8 md:p-12 border border-neutral-200">
          
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-xs font-black uppercase tracking-widest text-red-700 mb-2">Request A Session</h2>
            <h3 className="text-3xl font-black uppercase tracking-tighter text-black">Consultation Inquiry</h3>
          </div>

          <form ref={formRef} action={handleSubmit} className="space-y-10">
            <input type="hidden" name="topic" value="Private Class Request" />

            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <input type="text" id="firstName" name="firstName" required className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium text-black focus:outline-none focus:border-red-700 transition-colors peer" placeholder=" " />
                <label htmlFor="firstName" className="absolute left-0 top-3 text-neutral-400 text-lg font-medium transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-700 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-black peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                  First Name
                </label>
              </div>
              <div className="relative group">
                <input type="text" id="lastName" name="lastName" required className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium text-black focus:outline-none focus:border-red-700 transition-colors peer" placeholder=" " />
                <label htmlFor="lastName" className="absolute left-0 top-3 text-neutral-400 text-lg font-medium transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-700 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-black peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                  Last Name
                </label>
              </div>
            </div>

            {/* Contact Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <input type="email" id="email" name="email" required className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium text-black focus:outline-none focus:border-red-700 transition-colors peer" placeholder=" " />
                <label htmlFor="email" className="absolute left-0 top-3 text-neutral-400 text-lg font-medium transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-700 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-black peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                  Email Address
                </label>
              </div>
              <div className="relative group">
                <input type="tel" id="phone" name="phone" required className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium text-black focus:outline-none focus:border-red-700 transition-colors peer" placeholder=" " />
                <label htmlFor="phone" className="absolute left-0 top-3 text-neutral-400 text-lg font-medium transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-700 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-black peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                  Phone Number
                </label>
              </div>
            </div>

            {/* Training Details Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <select id="currentRank" name="currentRank" required defaultValue="" className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium text-black focus:outline-none focus:border-red-700 transition-colors appearance-none cursor-pointer">
                  <option value="" disabled hidden>Current Rank / Experience</option>
                  <option value="None / Beginner">None / Complete Beginner</option>
                  <option value="White/Yellow/Orange">White / Yellow / Orange Belt</option>
                  <option value="Green/Blue/Purple">Green / Blue / Purple Belt</option>
                  <option value="Brown Belt">Brown Belt</option>
                  <option value="Black Belt">Black Belt (Dan)</option>
                </select>
                <div className="absolute right-0 top-4 pointer-events-none">
                  <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
              <div className="relative group">
                <input type="text" id="preferredTime" name="preferredTime" required className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium text-black focus:outline-none focus:border-red-700 transition-colors peer" placeholder=" " />
                <label htmlFor="preferredTime" className="absolute left-0 top-3 text-neutral-400 text-lg font-medium transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-700 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-black peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                  Preferred Days / Times
                </label>
              </div>
            </div>

            {/* Goals */}
            <div className="relative group pt-4">
              <textarea id="goals" name="goals" required rows={4} className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium text-black focus:outline-none focus:border-red-700 transition-colors peer resize-none" placeholder=" "></textarea>
              <label htmlFor="goals" className="absolute left-0 top-6 text-neutral-400 text-lg font-medium transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-700 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-black peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                What are your specific training goals?
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className={`w-full relative inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-widest text-white bg-black overflow-hidden shadow-xl transition-all duration-300 group ${status === 'submitting' ? 'opacity-80 cursor-not-allowed' : 'hover:-translate-y-1'}`}
              >
                <span className="absolute inset-0 w-full h-full bg-red-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative flex items-center gap-3">
                  {status === 'submitting' ? 'SENDING...' : 'REQUEST PRIVATE SESSION'}
                  {status !== 'submitting' && <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>}
                </span>
              </button>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-neutral-400 mt-6">
                Sensei Fung will contact you directly to discuss availability and pricing.
              </p>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}