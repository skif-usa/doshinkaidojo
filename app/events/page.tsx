"use client";

import { useState } from 'react';
import Link from 'next/link';

type EventLangContent = {
  shortDesc: string;
  schedule: string[];
  pricing: string[];
  note: string;
  quote: string;
  labels: { location: string; schedule: string; cost: string; contactInfo: string; register: string };
};

export default function EventsPage() {
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

  const upcomingEvents: {
    id: string;
    title: string;
    date: string;
    image: string;
    registerLink: string;
    location: { name: string; address: string[] };
    contact: { name: string; phone: string; email: string };
    content: { es: EventLangContent; en: EventLangContent };
  }[] = [
    {
      id: "shugyo-2026",
      title: "Shug Yo 2026",
      date: "August 7 & 8, 2026",
      image: "/shug_yo_2026.webp",
      registerLink: "https://wa.me/5076842044",
      location: {
        name: "Gimnasio del Colegio de La Salle",
        address: [
          "Avenida San Juan Bautista de La Salle",
          "El Cangrejo, Ciudad de Panamá",
        ],
      },
      contact: { name: "Jorge J. Beleño", phone: "+507 6842-2044", email: "jorge.belenos@gmail.com" },
      content: {
        es: {
          shortDesc: "Entrenamiento intenso con propósito: dos días de entrenamiento con el instructor invitado Sensei Rubén Fung, enfocados en biomecánica, precisión y comprensión técnica para practicantes de todos los niveles.",
          schedule: [
            "Viernes 7 de Agosto — 6:00 p.m. a 8:00 p.m.",
            "Sábado 8 de Agosto — 1:00 p.m. a 4:00 p.m.",
          ],
          pricing: ["1 Día: US$25", "2 Días: US$40"],
          note: "Cupos limitados para garantizar una experiencia de aprendizaje dinámica y una atención adecuada para todos los participantes.",
          quote: "Perfecciona tu técnica, fortalece tu espíritu y comparte el camino del Karate-Do.",
          labels: { location: "Ubicación y Fechas", schedule: "Horario de Entrenamiento", cost: "Costo de Participación", contactInfo: "Información y Reservaciones", register: "Reservar por WhatsApp" },
        },
        en: {
          shortDesc: "Intense training with purpose: two days of training with guest instructor Sensei Rubén Fung, focused on biomechanics, precision, and technical understanding for practitioners of all levels.",
          schedule: [
            "Friday, August 7 — 6:00 p.m. to 8:00 p.m.",
            "Saturday, August 8 — 1:00 p.m. to 4:00 p.m.",
          ],
          pricing: ["1 Day: US$25", "2 Days: US$40"],
          note: "Space is limited to ensure a dynamic learning experience and proper attention for all participants.",
          quote: "Perfect your technique, strengthen your spirit, and share the path of Karate-Do.",
          labels: { location: "Location & Dates", schedule: "Training Schedule", cost: "Cost of Participation", contactInfo: "Information & Reservations", register: "Reserve via WhatsApp" },
        },
      },
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-red-700 selection:text-white pb-24">
      
      {/* 1. CINEMATIC HEADER */}
      <section className="relative pt-[120px] md:pt-[180px] pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-200">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div>
            <div className="w-16 h-1.5 bg-red-700 mb-8"></div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-black">
              Upcoming <br />
              <span className="text-neutral-300">Events</span>
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-neutral-500 font-medium leading-relaxed">
              Join us for exclusive seminars, training camps, and special events featuring world-renowned Shotokan instructors.
            </p>
          </div>
        </div>
      </section>

      {/* 2. EVENTS FEED */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-12">

          {upcomingEvents.length === 0 && (
            <div className="border border-neutral-200 bg-neutral-50 py-20 px-8 text-center">
              <div className="w-16 h-1.5 bg-red-700 mb-8 mx-auto"></div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black mb-4">
                No Upcoming Events Right Now
              </h2>
              <p className="text-lg text-neutral-500 font-medium max-w-xl mx-auto">
                We&apos;re busy planning our next seminars and training camps. Check back soon, or explore our past events below.
              </p>
            </div>
          )}

          {upcomingEvents.map((event) => {
            const isExpanded = expandedEvent === event.id;
            const lang = eventLang[event.id] ?? 'es';
            const t = event.content[lang];

            return (
              <div key={event.id} className="bg-neutral-50 border border-neutral-200 hover:border-black transition-colors duration-500 relative group overflow-hidden">
                
                {/* Accent Line */}
                <div className="absolute top-0 left-0 w-1 h-full bg-red-700 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-10"></div>

                <div className="flex flex-col lg:flex-row">
                  
                  {/* Left: Poster Image */}
                  <div className="w-full lg:w-5/12 relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4] bg-neutral-900 overflow-hidden flex-shrink-0">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-contain p-4 group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>

                  {/* Right: Content Area */}
                  <div className="w-full lg:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                    
                    {/* Header Info */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="text-xs font-black uppercase tracking-widest text-red-700 block">
                          {event.date}
                        </span>
                        {/* Language Toggle */}
                        <div className="flex items-center text-xs font-bold uppercase tracking-widest">
                          <button
                            onClick={() => setEventLang((prev) => ({ ...prev, [event.id]: 'es' }))}
                            className={lang === 'es' ? 'text-black border-b-2 border-red-700 pb-0.5' : 'text-neutral-400 hover:text-black pb-0.5'}
                          >
                            ES
                          </button>
                          <span className="mx-2 text-neutral-300">|</span>
                          <button
                            onClick={() => setEventLang((prev) => ({ ...prev, [event.id]: 'en' }))}
                            className={lang === 'en' ? 'text-black border-b-2 border-red-700 pb-0.5' : 'text-neutral-400 hover:text-black pb-0.5'}
                          >
                            EN
                          </button>
                        </div>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black mb-4 leading-none">
                        {event.title}
                      </h2>
                      <p className="text-lg text-neutral-600 leading-relaxed font-medium">
                        {t.shortDesc}
                      </p>
                    </div>

                    {/* Read More Toggle Button */}
                    {!isExpanded && (
                      <button 
                        onClick={() => toggleEvent(event.id)}
                        className="mt-4 self-start text-sm font-bold uppercase tracking-widest text-black border-b-2 border-black hover:text-red-700 hover:border-red-700 transition-colors pb-1 flex items-center gap-2"
                      >
                        Read More 
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </button>
                    )}

                    {/* Expanded Content Details */}
                    {isExpanded && (
                      <div className="mt-8 pt-8 border-t border-neutral-200 animate-in fade-in slide-in-from-top-4 duration-500">
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                          {/* Location Block */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">{t.labels.location}</h4>
                            <p className="text-black font-bold mb-1">{event.location.name}</p>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                              {event.location.address.map((line) => (
                                <span key={line}>{line}<br /></span>
                              ))}
                              <span className="text-red-700 font-bold mt-2 block">{event.date}</span>
                            </p>
                          </div>

                          {/* Training Schedule Block */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">{t.labels.schedule}</h4>
                            <ul className="text-sm text-neutral-600 space-y-1">
                              {t.schedule.map((session) => (
                                <li key={session}>• {session}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Pricing & Contact Block */}
                        <div className="bg-white p-6 border border-neutral-100 mb-10">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-red-700 mb-4">{t.labels.cost}</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <ul className="text-sm text-neutral-600 space-y-1">
                              {t.pricing.map((price) => (
                                <li key={price}><strong className="text-black">{price}</strong></li>
                              ))}
                            </ul>
                            <div className="text-sm text-neutral-600">
                              <p className="mb-1"><strong className="text-black">{t.labels.contactInfo}:</strong></p>
                              <p className="mb-1">{event.contact.name}</p>
                              <p>
                                <a href={`tel:${event.contact.phone.replace(/[^+\d]/g, '')}`} className="hover:text-red-700 transition-colors">
                                  {event.contact.phone}
                                </a>
                              </p>
                              <p>
                                <a href={`mailto:${event.contact.email}`} className="hover:text-red-700 transition-colors">
                                  {event.contact.email}
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Closing & CTA */}
                        <div className="bg-red-50 p-6 border-l-4 border-red-700 mb-10">
                          <p className="text-red-900 font-bold text-sm">
                            🔥 {t.note}
                          </p>
                        </div>

                        <p className="text-xl font-black uppercase tracking-tight text-black mb-8 italic">
                          "{t.quote}"
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                          {/* Register Button (External Link) */}
                          <a
                            href={event.registerLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest text-white bg-black overflow-hidden hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                          >
                            <span className="absolute inset-0 w-full h-full bg-red-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                            <span className="relative flex items-center gap-3">
                              {t.labels.register}
                              <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                            </span>
                          </a>

                          {/* Close Toggle Button */}
                          <button 
                            onClick={() => toggleEvent(event.id)}
                            className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-black transition-colors py-4 sm:py-0"
                          >
                            Close Details &times;
                          </button>
                        </div>

                      </div>
                    )}

                  </div>
                </div>
              </div>
            );
          })}
          
        </div>
      </section>

      {/* 3. CTA TO ARCHIVE */}
      <section className="bg-white py-24 text-center border-t border-neutral-200">
        <h2 className="text-2xl font-black uppercase tracking-tighter text-black mb-4">
          Looking for past seminars?
        </h2>
        <Link 
          href="/events/archive" 
          className="inline-block text-sm font-bold uppercase tracking-widest text-neutral-500 hover:text-red-700 transition-colors border-b-2 border-transparent hover:border-red-700 pb-1"
        >
          View Event Archive &rarr;
        </Link>
      </section>

    </div>
  );
}