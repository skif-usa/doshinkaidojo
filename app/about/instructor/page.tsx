import Link from 'next/link';

export default function InstructorProfile() {
  const highlights = [
    {
      title: "13 Years of Shaping the Community",
      desc: "Served as the Senior Instructor and General Coordinator for The Shotokan Karate-Do Center at the Trotter Family YMCA in Houston, Texas."
    },
    {
      title: "Versatile Instruction",
      desc: "Effectively instructed individuals of all ages, from grade school to senior practitioners, and across all skill levels from beginner to advanced."
    },
    {
      title: "Champion Developer",
      desc: "Provided elite guidance that has propelled numerous young athletes to success in both national and international tournaments."
    },
    {
      title: "International Technical Advisor",
      desc: "Served as the Karate Technical Advisor for dojos in Texas, New York, and Panama, contributing his expertise to enhance training methodologies."
    },
    {
      title: "Global Program Developer",
      desc: "Developed and implemented diverse karate programs internationally, contributing significantly to the global growth of SKIF."
    },
    {
      title: "Pivotal Founder in Panama",
      desc: "Collaborated with Arnoldo R Cohen to introduce and co-found SKIF in Panama at the University of Panama Karate Club in 1999."
    },
    {
      title: "Dynamic Camp Host",
      desc: "Organized and hosted numerous karate training camps, fostering a dynamic learning environment for aspiring karatekas."
    },
    {
      title: "Continuous Refinement",
      desc: "Maintains active participation in national and international karate seminars and tournaments, underscoring his commitment to continuous learning."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-red-700 selection:text-white">
      
      {/* 1. CINEMATIC PROFILE HEADER */}
      <section className="relative pt-[120px] md:pt-[180px] pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
          
          {/* Left: Portrait */}
          <div className="w-full lg:w-5/12 shrink-0">
            <div className="relative aspect-[3/4] overflow-hidden shadow-2xl border-l-8 border-red-700 bg-neutral-100">
              <img 
                src="/ruben_profil.webp" 
                alt="Sensei Rubén Fung" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
            </div>
          </div>

          {/* Right: Intro & Titles */}
          <div className="w-full lg:w-7/12 lg:pt-8 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-red-700"></div>
              <span className="text-sm font-black uppercase tracking-widest text-red-700">Senior Director & Founder</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-black mb-8">
              Rubén <br />
              <span className="text-neutral-300">Fung</span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 font-medium leading-relaxed mb-8">
              Bringing over <strong className="text-black">35 years</strong> of extensive experience in traditional karate training and teaching.
            </p>

            <div className="text-lg text-neutral-500 leading-relaxed space-y-6">
              <p>
                As the Senior Director and founder of Doshinkai Dojo, Rubén Fung’s expertise is marked by a distinguished career. Holding a 6th degree black belt (6th Dan) in SKIF (Shotokan Karate-Do International Federation), he is widely recognized as a Certified Instructor of the highest caliber.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. HIGH-IMPACT STATS BAR */}
      <section className="bg-black text-white py-12 border-y-4 border-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-800">
            <div className="py-4 md:py-0">
              <span className="block text-4xl md:text-5xl font-black text-white mb-2">6th Dan</span>
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">SKIF Black Belt</span>
            </div>
            <div className="py-4 md:py-0">
              <span className="block text-4xl md:text-5xl font-black text-white mb-2">35+</span>
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">Years of Experience</span>
            </div>
            <div className="py-4 md:py-0">
              <span className="block text-4xl md:text-5xl font-black text-white mb-2">2018</span>
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">Secretary, SKIF USA</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAREER HIGHLIGHTS (Editorial Grid) */}
      <section className="py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 md:mb-24 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black mb-4">
              Career Highlights
            </h2>
            <p className="text-lg text-neutral-500 font-medium">A lifetime dedicated to the advancement of Shotokan Karate.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-white border border-neutral-200 p-8 hover:border-red-700 hover:shadow-xl transition-all duration-300 relative group flex flex-col">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="w-8 h-8 flex items-center justify-center bg-red-50 text-red-700 font-black text-sm mb-6 rounded-sm">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-black mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed mt-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="bg-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="w-16 h-1.5 bg-red-700 mx-auto mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black mb-6">
            Train with Sensei Fung
          </h2>
          <p className="text-neutral-500 text-lg mb-10">
            Join Doshinkai Dojo to experience elite instruction grounded in decades of international experience and traditional discipline.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/join/class-registration" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest text-white bg-black overflow-hidden shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-red-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative flex items-center gap-3">
                Register for Classes
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </span>
            </Link>
            <Link 
              href="/join/private-class" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest text-black border-2 border-black hover:bg-neutral-100 transition-colors"
            >
              Book Private Class
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}