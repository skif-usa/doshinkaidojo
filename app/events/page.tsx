"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function EventsPage() {
  // We use state to track which event card is currently expanded
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

  const toggleEvent = (id: string) => {
    if (expandedEvent === id) {
      setExpandedEvent(null); // Close if already open
    } else {
      setExpandedEvent(id); // Open the clicked one
    }
  };

  const upcomingEvents = [
    {
      id: "kanazawa-gasshuku-2026",
      title: "2026 SKIF Cincinnati Gasshuku",
      date: "June 5, 6 & 7, 2026",
      image: "/2026_Kanazawa_Cincinnati.webp",
      shortDesc: "Train with Kancho Nobuaki Kanazawa, Director of the Shotokan Karate-Do International Federation, visiting from Tokyo, Japan!",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdXt7bkAcAO9mfagk71xQrxT-4r0WhEjzW8rro66eXZFeOMuA/viewform"
    }
    // You can easily add more events to this list in the future!
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
          
          {upcomingEvents.map((event) => {
            const isExpanded = expandedEvent === event.id;

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
                      <span className="text-xs font-black uppercase tracking-widest text-red-700 mb-4 block">
                        {event.date}
                      </span>
                      <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black mb-4 leading-none">
                        {event.title}
                      </h2>
                      <p className="text-lg text-neutral-600 leading-relaxed font-medium">
                        {event.shortDesc}
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
                            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Location & Dates</h4>
                            <p className="text-black font-bold mb-1">Aikido of Cincinnati Facility</p>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                              6620 Montgomery Rd.<br />
                              Cincinnati, OH 45213<br />
                              <span className="text-red-700 font-bold mt-2 block">{event.date}</span>
                            </p>
                          </div>

                          {/* Training Schedule Block */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Training Schedule</h4>
                            <p className="text-black font-bold mb-2">6 Total Sessions:</p>
                            <ul className="text-sm text-neutral-600 space-y-1">
                              <li>• 4 General Training Sessions</li>
                              <li>• 1 Instructor Training Session</li>
                              <li>• 1 Private Session</li>
                            </ul>
                          </div>
                        </div>

                        {/* Hotel Accommodation Block */}
                        <div className="bg-white p-6 border border-neutral-100 mb-10">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-red-700 mb-4">Accommodation</h4>
                          <p className="text-sm text-neutral-600 mb-4">A special group rate has been arranged at:</p>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                              <p className="font-bold text-black mb-1">Wingate by Wyndham – Blue Ash</p>
                              <p className="text-sm text-neutral-600 leading-relaxed">
                                4320 Glendale-Milford Rd<br />
                                Blue Ash, OH 45242<br />
                                Phone: (513) 733-1142
                              </p>
                            </div>
                            <div className="text-sm text-neutral-600">
                              <p><strong className="text-black">Rate:</strong> $119.00/night + tax</p>
                              <p><strong className="text-black">Code:</strong> 2026 SKIF Karate Camp</p>
                              <div className="mt-3">
                                <strong className="text-black block mb-1">Amenities:</strong>
                                Free parking, Indoor pool, Wi-Fi, Hot buffet breakfast.
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Closing & CTA */}
                        <div className="bg-red-50 p-6 border-l-4 border-red-700 mb-10">
                          <p className="text-red-900 font-bold text-sm">
                            🔥 Early Bird Special is available until April 30th. Register early to secure your spot! Open to all styles, ages, and affiliations.
                          </p>
                        </div>

                        <p className="text-xl font-black uppercase tracking-tight text-black mb-8 italic">
                          "Train hard. Grow together. Experience the true spirit of karate."
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
                              Register Now
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