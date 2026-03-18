"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const toggleAccordion = (menu: string) => {
    setActiveAccordion(activeAccordion === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveAccordion(null);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex flex-col">
        
        {/* 1. Top Utility Bar */}
        <div 
          className={`bg-neutral-900 text-neutral-300 w-full hidden md:flex justify-center border-b border-black transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden ${
            scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'
          }`}
        >
          <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
            <div className="flex gap-6">
              <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                Cincinnati, OH
              </span>
            </div>
            <div className="flex gap-6">
              <a href="tel:+18325130058" className="hover:text-white transition-colors">P: (832) 513-0058</a>
              <a href="mailto:dskdojo1@gmail.com" className="hover:text-white transition-colors">E: dskdojo1@gmail.com</a>
            </div>
          </div>
        </div>

        {/* 2. Main White Navigation */}
        <nav 
          className={`w-full bg-white transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] relative z-50 ${
            scrolled ? 'h-20 shadow-[0_20px_40px_rgba(0,0,0,0.06)]' : 'h-20 md:h-28 border-b border-neutral-200'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex justify-between items-center h-full">
              
              {/* Logo area */}
              <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-3 md:gap-4 group shrink-0 relative z-50">
                <div className={`relative overflow-hidden transition-all duration-500 ease-out ${scrolled ? 'w-10 h-10 md:w-12 md:h-12' : 'w-12 h-12 md:w-16 md:h-16 group-hover:scale-105'}`}>
                  <img src="/doshinkai_logo.png" alt="Doshinkai Dojo Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className={`font-black uppercase tracking-tighter text-neutral-900 group-hover:text-red-700 transition-all duration-500 ${scrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'}`}>
                    DOSHINKAI DOJO
                  </span>
                  {/* FIXED: text-neutral-400 -> text-neutral-600 */}
                  <span className={`text-neutral-600 uppercase tracking-[0.3em] font-bold transition-all duration-500 hidden md:block ${scrolled ? 'text-[8px] opacity-0 h-0' : 'text-[10px] opacity-100 mt-1'}`}>
                    Shotokan Karate
                  </span>
                </div>
              </Link>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden relative z-50 p-2 -mr-2 text-neutral-900 focus:outline-none"
                aria-label="Toggle Menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between items-center">
                  <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                  <span className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                  <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>

              {/* DESKTOP Links */}
              <div className="hidden lg:flex items-center h-full space-x-8">
                
                {/* About Us */}
                <div className="relative group h-full flex items-center">
                  <button className="text-sm font-bold uppercase tracking-widest text-neutral-900 group-hover:text-red-700 transition-colors duration-300 flex items-center gap-2 cursor-pointer h-full">
                    About
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                  
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-[600px] bg-white border border-neutral-100 shadow-[0_40px_80px_rgba(0,0,0,0.08)] opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50 flex">
                    <div className="w-1/3 bg-neutral-50 p-8 border-r border-neutral-100 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xs font-black uppercase tracking-widest text-red-700 mb-2">Our Foundation</h3>
                        {/* FIXED: text-neutral-500 -> text-neutral-600 */}
                        <p className="text-sm text-neutral-600 leading-relaxed">Dedicated to the strict preservation of traditional Shotokan technique and philosophy.</p>
                      </div>
                    </div>
                    <div className="w-2/3 p-6 grid grid-cols-1 gap-2">
                      <Link href="/about/shotokan" className="group/link flex items-center justify-between p-4 hover:bg-neutral-50 transition-colors duration-300">
                        <div>
                          <div className="text-sm font-bold text-neutral-900 group-hover/link:text-red-700 transition-colors">Shotokan Karate</div>
                          {/* FIXED: text-neutral-400 -> text-neutral-600 */}
                          <div className="text-xs text-neutral-600 mt-1">Benefits of learning Shotokan Karate</div>
                        </div>
                        <span className="text-red-700 opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">&rarr;</span>
                      </Link>
                      <Link href="/about/history" className="group/link flex items-center justify-between p-4 hover:bg-neutral-50 transition-colors duration-300">
                        <div>
                          <div className="text-sm font-bold text-neutral-900 group-hover/link:text-red-700 transition-colors">Karate History</div>
                          {/* FIXED: text-neutral-400 -> text-neutral-600 */}
                          <div className="text-xs text-neutral-600 mt-1">Roots of traditional Japanese karate</div>
                        </div>
                        <span className="text-red-700 opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">&rarr;</span>
                      </Link>
                      <Link href="/about/instructor" className="group/link flex items-center justify-between p-4 hover:bg-neutral-50 transition-colors duration-300">
                        <div>
                          <div className="text-sm font-bold text-neutral-900 group-hover/link:text-red-700 transition-colors">Instructors</div>
                          {/* FIXED: text-neutral-400 -> text-neutral-600 */}
                          <div className="text-xs text-neutral-600 mt-1">Meet the Sensei</div>
                        </div>
                        <span className="text-red-700 opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <Link href="/schedule" className="text-sm font-bold uppercase tracking-widest text-neutral-900 hover:text-red-700 transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-red-700 after:transition-all after:duration-300 hover:after:w-full">
                  Schedule
                </Link>
                
                {/* Events */}
                <div className="relative group h-full flex items-center">
                  <button className="text-sm font-bold uppercase tracking-widest text-neutral-900 group-hover:text-red-700 transition-colors duration-300 flex items-center gap-2 cursor-pointer h-full">
                    Events
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                  
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-[280px] bg-white border border-neutral-100 shadow-[0_40px_80px_rgba(0,0,0,0.08)] opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50 p-4">
                    <div className="flex flex-col gap-2">
                      <Link href="/events" className="group/link block p-4 rounded-xl hover:bg-neutral-50 transition-colors duration-200 border border-transparent hover:border-neutral-100">
                        <span className="text-sm font-bold text-neutral-900 group-hover/link:text-red-700 block">Upcoming Events</span>
                        {/* FIXED: text-neutral-500 -> text-neutral-600 */}
                        <span className="text-xs text-neutral-600 mt-1 block">Seminars & Gasshukus</span>
                      </Link>
                      <Link href="/events/archive" className="group/link block p-4 rounded-xl hover:bg-neutral-50 transition-colors duration-200 border border-transparent hover:border-neutral-100">
                        <span className="text-sm font-bold text-neutral-900 group-hover/link:text-red-700 block">Event Archive</span>
                        {/* FIXED: text-neutral-500 -> text-neutral-600 */}
                        <span className="text-xs text-neutral-600 mt-1 block">Past clinics & gatherings</span>
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Resources */}
                <div className="relative group h-full flex items-center">
                  <button className="text-sm font-bold uppercase tracking-widest text-neutral-900 group-hover:text-red-700 transition-colors duration-300 flex items-center gap-2 cursor-pointer h-full">
                    Resources
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                  
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-[280px] bg-white border border-neutral-100 shadow-[0_40px_80px_rgba(0,0,0,0.08)] opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50 p-4">
                    <div className="flex flex-col gap-2">
                      <Link href="/resources" className="group/link block p-4 rounded-xl hover:bg-neutral-50 transition-colors duration-200 border border-transparent hover:border-neutral-100">
                        <span className="text-sm font-bold text-neutral-900 group-hover/link:text-red-700 block">Global Network</span>
                        {/* FIXED: text-neutral-500 -> text-neutral-600 */}
                        <span className="text-xs text-neutral-600 mt-1 block">Our official partners</span>
                      </Link>
                      <Link href="/resources/registry" className="group/link block p-4 rounded-xl hover:bg-neutral-50 transition-colors duration-200 border border-transparent hover:border-neutral-100">
                        <span className="text-sm font-bold text-neutral-900 group-hover/link:text-red-700 block">Dan & Kyu Registry</span>
                        {/* FIXED: text-neutral-500 -> text-neutral-600 */}
                        <span className="text-xs text-neutral-600 mt-1 block">Official belt rankings</span>
                      </Link>
                      <Link href="/resources/affiliated" className="group/link block p-4 rounded-xl hover:bg-neutral-50 transition-colors duration-200 border border-transparent hover:border-neutral-100">
                        <span className="text-sm font-bold text-neutral-900 group-hover/link:text-red-700 block">Affiliated Dojos</span>
                        {/* FIXED: text-neutral-500 -> text-neutral-600 */}
                        <span className="text-xs text-neutral-600 mt-1 block">Satellite groups</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Shop */}
                <div className="relative group h-full flex items-center">
                  <button className="text-sm font-bold uppercase tracking-widest text-neutral-900 group-hover:text-red-700 transition-colors duration-300 flex items-center gap-2 cursor-pointer h-full">
                    Shop
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                  
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-[280px] bg-white border border-neutral-100 shadow-[0_40px_80px_rgba(0,0,0,0.08)] opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50 p-4">
                    <div className="flex flex-col gap-2">
                      <Link href="/shop/accessories" className="group/link block p-4 rounded-xl hover:bg-neutral-50 transition-colors duration-200 border border-transparent hover:border-neutral-100">
                        <span className="text-sm font-bold text-neutral-900 group-hover/link:text-red-700 block">Accessories</span>
                        {/* FIXED: text-neutral-500 -> text-neutral-600 */}
                        <span className="text-xs text-neutral-600 mt-1 block">Dojo gear & equipment</span>
                      </Link>
                      <a href="https://skifusa.org/shop" target="_blank" rel="noopener noreferrer" className="group/link flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 transition-colors duration-200 border border-transparent hover:border-neutral-100">
                        <div>
                          <span className="text-sm font-bold text-neutral-900 group-hover/link:text-red-700 block">SKIFUSA Goods</span>
                          {/* FIXED: text-neutral-500 -> text-neutral-600 */}
                          <span className="text-xs text-neutral-600 mt-1 block">Official Federation Shop</span>
                        </div>
                        {/* FIXED: text-neutral-400 -> text-neutral-600 */}
                        <svg className="w-4 h-4 text-neutral-600 group-hover/link:text-red-700 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* JOIN / SIGN UP ACTION AREA */}
              <div className="hidden lg:flex items-center gap-6 h-full">
                <Link href="/contact" className="text-sm font-bold uppercase tracking-widest text-neutral-900 hover:text-red-700 transition-colors">
                  Contact
                </Link>
                
                {/* Join Dropdown Group */}
                <div className="relative group h-full flex items-center">
                  <button className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-bold uppercase tracking-widest text-white bg-black overflow-hidden group-hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <span className="absolute inset-0 w-full h-full bg-red-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                    <span className="relative flex items-center gap-2">
                      Join / Sign Up
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </span>
                  </button>

                  {/* Dropdown Menu for Join */}
                  <div className="absolute right-0 top-full w-[280px] bg-white border border-neutral-100 shadow-[0_40px_80px_rgba(0,0,0,0.1)] opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50 p-4">
                    <div className="flex flex-col gap-2">
                      <Link href="/join/class-registration" className="group/link block p-4 rounded-xl hover:bg-neutral-50 transition-colors duration-200 border border-transparent hover:border-neutral-100">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-bold text-neutral-900 group-hover/link:text-red-700">Class Registration</span>
                          <span className="text-[9px] font-black uppercase tracking-widest text-red-700 bg-red-100 px-2 py-0.5 rounded-sm">Popular</span>
                        </div>
                        {/* FIXED: text-neutral-500 -> text-neutral-600 */}
                        <span className="text-xs text-neutral-600 block">Join group training sessions</span>
                      </Link>
                      <Link href="/join/private-class" className="group/link block p-4 rounded-xl hover:bg-neutral-50 transition-colors duration-200 border border-transparent hover:border-neutral-100">
                        <span className="text-sm font-bold text-neutral-900 group-hover/link:text-red-700 block mb-1">Private Class</span>
                        {/* FIXED: text-neutral-500 -> text-neutral-600 */}
                        <span className="text-xs text-neutral-600 block">Book 1-on-1 instruction</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </nav>

        {/* 3. MOBILE Menu */}
        <div 
          className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col pt-24 pb-8 px-6 overflow-y-auto ${
            mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="flex flex-col space-y-6 mt-8">
            
            {/* About Accordion */}
            <div className="border-b border-neutral-200 pb-4">
              <button 
                onClick={() => toggleAccordion('about')}
                className="w-full flex justify-between items-center text-left text-2xl font-black uppercase tracking-tight text-neutral-900"
              >
                About
                <span className={`text-red-700 transition-transform duration-300 ${activeAccordion === 'about' ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === 'about' ? 'max-h-64 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col space-y-4 pl-4 border-l-2 border-red-700">
                  <Link href="/about/shotokan" onClick={closeMobileMenu} className="text-sm font-bold text-neutral-600 hover:text-red-700 uppercase tracking-widest">Shotokan Karate</Link>
                  <Link href="/about/history" onClick={closeMobileMenu} className="text-sm font-bold text-neutral-600 hover:text-red-700 uppercase tracking-widest">Karate History</Link>
                  <Link href="/about/instructor" onClick={closeMobileMenu} className="text-sm font-bold text-neutral-600 hover:text-red-700 uppercase tracking-widest">Instructors</Link>
                </div>
              </div>
            </div>

            <Link href="/schedule" onClick={closeMobileMenu} className="text-2xl font-black uppercase tracking-tight text-neutral-900 border-b border-neutral-200 pb-4">
              Schedule
            </Link>

            {/* Events Accordion */}
            <div className="border-b border-neutral-200 pb-4">
              <button 
                onClick={() => toggleAccordion('events')}
                className="w-full flex justify-between items-center text-left text-2xl font-black uppercase tracking-tight text-neutral-900"
              >
                Events
                <span className={`text-red-700 transition-transform duration-300 ${activeAccordion === 'events' ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === 'events' ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col space-y-4 pl-4 border-l-2 border-red-700">
                  <Link href="/events" onClick={closeMobileMenu} className="text-sm font-bold text-neutral-600 hover:text-red-700 uppercase tracking-widest">Upcoming Events</Link>
                  <Link href="/events/archive" onClick={closeMobileMenu} className="text-sm font-bold text-neutral-600 hover:text-red-700 uppercase tracking-widest">Event Archive</Link>
                </div>
              </div>
            </div>
            
            {/* Resources Accordion */}
            <div className="border-b border-neutral-200 pb-4">
              <button 
                onClick={() => toggleAccordion('resources')}
                className="w-full flex justify-between items-center text-left text-2xl font-black uppercase tracking-tight text-neutral-900"
              >
                Resources
                <span className={`text-red-700 transition-transform duration-300 ${activeAccordion === 'resources' ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === 'resources' ? 'max-h-52 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col space-y-4 pl-4 border-l-2 border-red-700">
                  <Link href="/resources" onClick={closeMobileMenu} className="text-sm font-bold text-neutral-600 hover:text-red-700 uppercase tracking-widest">Global Network</Link>
                  <Link href="/resources/registry" onClick={closeMobileMenu} className="text-sm font-bold text-neutral-600 hover:text-red-700 uppercase tracking-widest">Dan & Kyu Registry</Link>
                  <Link href="/resources/affiliated" onClick={closeMobileMenu} className="text-sm font-bold text-neutral-600 hover:text-red-700 uppercase tracking-widest">Affiliated Dojos</Link>
                </div>
              </div>
            </div>

            {/* Shop Accordion */}
            <div className="border-b border-neutral-200 pb-4">
              <button 
                onClick={() => toggleAccordion('shop')}
                className="w-full flex justify-between items-center text-left text-2xl font-black uppercase tracking-tight text-neutral-900"
              >
                Shop
                <span className={`text-red-700 transition-transform duration-300 ${activeAccordion === 'shop' ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === 'shop' ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col space-y-4 pl-4 border-l-2 border-red-700">
                  <Link href="/shop/accessories" onClick={closeMobileMenu} className="text-sm font-bold text-neutral-600 hover:text-red-700 uppercase tracking-widest">Accessories</Link>
                  <a href="https://skifusa.org/shop" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-neutral-600 hover:text-red-700 uppercase tracking-widest flex items-center gap-2">
                    SKIFUSA Goods
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* JOIN / SIGN UP Accordion */}
            <div className="border-b border-neutral-200 pb-4">
              <button 
                onClick={() => toggleAccordion('join')}
                className="w-full flex justify-between items-center text-left text-2xl font-black uppercase tracking-tight text-red-700"
              >
                Join / Sign Up
                <span className={`text-black transition-transform duration-300 ${activeAccordion === 'join' ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === 'join' ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col space-y-4 pl-4 border-l-2 border-black">
                  <Link href="/join/class-registration" onClick={closeMobileMenu} className="text-sm font-bold text-neutral-600 hover:text-black uppercase tracking-widest flex items-center justify-between">
                    Class Registration <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 ml-2">HOT</span>
                  </Link>
                  <Link href="/join/private-class" onClick={closeMobileMenu} className="text-sm font-bold text-neutral-600 hover:text-black uppercase tracking-widest">Private Class</Link>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-auto pt-8">
            <Link href="/contact" onClick={closeMobileMenu} className="w-full flex justify-center items-center py-4 bg-black text-white text-sm font-bold uppercase tracking-widest mb-4 hover:bg-red-700 transition-colors">
              Contact Us
            </Link>
            {/* FIXED: text-neutral-400 -> text-neutral-600 */}
            <div className="text-center text-xs text-neutral-600 font-bold uppercase tracking-widest">
              P: (832) 513-0058 <br /> E: dskdojo1@gmail.com
            </div>
          </div>

        </div>

      </header>
    </>
  );
}