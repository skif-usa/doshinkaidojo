import Link from 'next/link';

export default function EventArchive() {
  const events = [
    {
      title: "Karate Seminar with Ruben Fung",
      date: "February 20 & 21, 2026",
      image: "/seminar_feb_20_21_2026.webp",
      year: "2026"
    },
    {
      title: "Seminar with Hiyori Kanazawa",
      date: "September 20 & 21, 2025",
      image: "/SKIF_Cincinnati_September_2025.webp",
      year: "2025"
    },
    {
      title: "2nd Annual Japanese Martial Arts Open House",
      date: "September 13, 2025",
      image: "/open_house_2025.webp",
      year: "2025"
    },
    {
      title: "SKIF Cincinnati Seminar with Manabu Murakami",
      date: "August 24 & 25, 2024",
      image: "/Murakami_Seminar_08_2024_Cincinnati.webp",
      year: "2024"
    },
    {
      title: "SKIF Cincinnati Seminar with Fumitoshi Kanazawa",
      date: "December 16 & 17, 2023",
      image: "/Seminar_Dezember_2023.webp",
      year: "2023"
    },
    {
      title: "Introduction to Shotokan Karate",
      date: "October 25th - December 13th, 2023",
      image: "/introduction.webp",
      year: "2023"
    },
    {
      title: "Women's Self-Defense",
      date: "Mar 2-3, 9-10, 16-17, Apr 6-7, 13-14, 20-21, 2023",
      image: "/womens_self_defense_clinic.webp",
      year: "2023"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-red-700 selection:text-white pb-24">
      
      {/* 1. CINEMATIC HEADER */}
      <section className="relative pt-[120px] md:pt-[180px] pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-200">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div>
            <div className="w-16 h-1.5 bg-red-700 mb-8"></div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-black">
              Event <br />
              <span className="text-neutral-300">Archive</span>
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-neutral-500 font-medium leading-relaxed">
              A historical gallery of our past and upcoming seminars, clinics, and special events hosted by Doshinkai Dojo.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE GALLERY GRID */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          
          {events.map((event, index) => (
            <div key={index} className="group flex flex-col">
              
              {/* Poster Frame */}
              <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-6 border border-neutral-200 shadow-sm group-hover:shadow-2xl transition-all duration-500 flex items-center justify-center p-4">
                
                {/* Red accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-red-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
                
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-700 z-10"
                />
              </div>

              {/* Event Details */}
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3 gap-4">
                  <h2 className="text-xl font-black uppercase tracking-tight text-black group-hover:text-red-700 transition-colors duration-300 leading-snug">
                    {event.title}
                  </h2>
                  {/* FIXED: High Contrast Year Badge */}
                  <span className="text-xs font-black text-white bg-black px-3 py-1.5 shadow-sm">
                    {event.year}
                  </span>
                </div>
                
                {/* FIXED: Darker Date Text */}
                <p className="text-sm font-bold uppercase tracking-widest text-neutral-700 mt-auto">
                  {event.date}
                </p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="bg-black text-white py-20 text-center border-t-8 border-red-700 mt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
            Don't miss the next event.
          </h2>
          <p className="text-neutral-400 text-lg mb-10">
            Join our dojo to train with world-class instructors and participate in exclusive upcoming seminars.
          </p>
          <Link 
            href="/join/class-registration" 
            className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-widest text-black bg-white overflow-hidden shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-red-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative flex items-center gap-3 group-hover:text-white transition-colors">
              Start Training
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </span>
          </Link>
        </div>
      </section>

    </div>
  );
}