import Link from 'next/link';

export const metadata = {
  title: 'Dan & Kyu Registry | Doshinkai Dojo',
  description: 'Official registry of Dan (Black Belt) and Kyu (Color Belt) ranked members at Doshinkai Dojo.',
};

export default function Registry() {
  const danRanks = [
    { name: "Fung, Rubén", rank: "Rokudan", desc: "6th Degree Black Belt" },
    { name: "Kikuchi Lavalette, Yukiko", rank: "Yondan", desc: "4th Degree Black Belt" },
    { name: "Hayatghaibi, Shireen", rank: "Sandan", desc: "3rd Degree Black Belt" },
    { name: "Guzman, Juan", rank: "Shodan", desc: "1st Degree Black Belt" },
    { name: "Kolachina, Ravi", rank: "Shodan", desc: "1st Degree Black Belt" },
    { name: "Kolachina, Lasya", rank: "Shodan", desc: "1st Degree Black Belt" },
    { name: "Kolachina, Lekhya", rank: "Shodan", desc: "1st Degree Black Belt" },
    { name: "Ruiz, Ernesto", rank: "Shodan", desc: "1st Degree Black Belt" }
  ];

  const kyuRanks = [
    { name: "Akiyama, Shigeo", rank: "1 Kyu", desc: "Brown Belt" },
    { name: "Pack, Arthur", rank: "3 Kyu", desc: "Brown Belt" },
    { name: "Cronin, Donald", rank: "4 Kyu", desc: "Purple Belt" }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-red-700 selection:text-white pb-24">
      
      {/* 1. CINEMATIC HEADER */}
      <section className="relative pt-[120px] md:pt-[180px] pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-200">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div>
            <div className="w-16 h-1.5 bg-red-700 mb-8"></div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-black">
              Official <br />
              <span className="text-neutral-300">Registry</span>
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-neutral-500 font-medium leading-relaxed">
              The official Dan (Black Belt) and Kyu (Color Belt) registry of Doshinkai Dojo practitioners.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DAN RANKS (BLACK BELTS) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h3 className="text-xs font-black uppercase tracking-widest text-red-700 mb-2">Yudansha</h3>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black">Dan Registry</h2>
          <p className="text-neutral-500 mt-3">Black belt ranks recognized by SKIF.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {danRanks.map((member, index) => (
            <div key={index} className="group bg-black border border-neutral-800 p-8 hover:border-red-700 hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
              {/* Red Hover Line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-red-700 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
              
              <div className="flex justify-between items-start pl-4">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-1 group-hover:text-red-500 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-widest text-neutral-500">
                    {member.desc}
                  </p>
                </div>
                <span className="bg-red-900/30 text-red-500 text-xs font-black uppercase tracking-widest px-3 py-1.5 border border-red-900/50">
                  {member.rank}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. KYU RANKS (COLOR BELTS) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-neutral-200">
        <div className="mb-12">
          <h3 className="text-xs font-black uppercase tracking-widest text-neutral-400 mb-2">Mudansha</h3>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black">Kyu Registry</h2>
          <p className="text-neutral-500 mt-3">Dedicated students advancing through the color belt ranks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {kyuRanks.map((member, index) => (
            <div key={index} className="group bg-neutral-50 border border-neutral-200 p-6 hover:border-black transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-black uppercase tracking-widest text-black">
                    {member.rank}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                    {member.desc}
                  </span>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-neutral-800 group-hover:text-black transition-colors">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. RETURN CTA */}
      <section className="py-16 text-center border-t border-neutral-200 mt-8">
        <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">
          Explore our network
        </p>
        <Link 
          href="/resources" 
          className="inline-block text-lg font-black uppercase tracking-widest text-black hover:text-red-700 transition-colors border-b-4 border-black hover:border-red-700 pb-1"
        >
          &larr; Back to Resources
        </Link>
      </section>

    </div>
  );
}