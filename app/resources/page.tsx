export default function Resources() {
  const resources = [
    {
      title: "Shotokan Karate-Do International Federation USA",
      url: "https://skifusa.org",
      displayUrl: "skifusa.org",
      desc: "The official United States branch of SKIF, overseeing dojos, tournaments, and grading nationwide."
    },
    {
      title: "Shotokan Karate-Do International Federation",
      url: "https://skifworld.com",
      displayUrl: "skifworld.com",
      desc: "The global headquarters in Japan, representing over 2 million practitioners across more than 130 countries."
    },
    {
      title: "Shotokan Karate-Do International Yudansha-Kai Limited",
      url: "https://skifyudanshakai.com",
      displayUrl: "skifyudanshakai.com",
      desc: "The official international association for SKIF Black Belts (Yudansha)."
    },
    {
      title: "Aikido of Cincinnati",
      url: "https://aikidocincy.org",
      displayUrl: "aikidocincy.org",
      desc: "Our esteemed local martial arts partner, dedicated to the practice and philosophy of Aikido."
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
              Global <br />
              <span className="text-neutral-300">Network</span>
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-neutral-500 font-medium leading-relaxed">
              Doshinkai Dojo is proudly affiliated with the world's most prestigious traditional martial arts organizations. Explore our partners below.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE DIRECTORY INDEX */}
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col">
          {resources.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-b border-neutral-200 hover:bg-neutral-50 transition-colors duration-500 overflow-hidden"
            >
              {/* Red Hover Line Indicator */}
              <div className="absolute left-0 top-0 w-1 h-full bg-red-700 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
              
              <div className="md:w-3/4 pr-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-4 block group-hover:text-red-700 transition-colors">
                  0{index + 1} // External Resource
                </span>
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-black mb-3 group-hover:text-red-700 transition-colors duration-300">
                  {link.title}
                </h2>
                <p className="text-sm md:text-base text-neutral-500 leading-relaxed max-w-2xl">
                  {link.desc}
                </p>
              </div>

              <div className="md:w-1/4 flex items-center justify-start md:justify-end gap-4 w-full md:w-auto mt-4 md:mt-0">
                <span className="text-sm font-bold uppercase tracking-widest text-neutral-900 border-b-2 border-transparent group-hover:border-red-700 transition-colors duration-300">
                  {link.displayUrl}
                </span>
                {/* Diagonal Arrow Icon representing external link */}
                <span className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center bg-white group-hover:bg-red-700 group-hover:text-white group-hover:border-red-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 3. RETURN CTA */}
      <section className="py-24 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">
          Ready to join our community?
        </p>
        <a 
          href="/join/class-registration" 
          className="inline-block text-lg font-black uppercase tracking-widest text-black hover:text-red-700 transition-colors border-b-4 border-black hover:border-red-700 pb-1"
        >
          View Class Schedule &rarr;
        </a>
      </section>

    </div>
  );
}