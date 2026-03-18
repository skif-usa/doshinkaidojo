import Link from 'next/link';

export const metadata = {
  title: 'Affiliated Dojos | Doshinkai Dojo',
  description: 'Explore the official network of SKIF affiliated dojos in Kentucky and Panama City.',
};

export default function AffiliatedDojos() {
  const kentuckyDojos = [
    {
      name: "Suzakukan Dojo",
      instructor: "Yukiko Kikuchi Lavalette, Sensei",
      address: "4811 Taylorsville Road, Unit 200\nTaylorsville, KY 40071",
      phone: "+1 - 720-232-1334",
      website: "suzakukandojo.com",
      link: "https://suzakukandojo.com"
    },
    {
      name: "Traditional Shotokan Juku of Lexington",
      instructor: "Shigeo Akiyama",
      address: "North Lexington Family YMCA\n381 W Loudon Ave, Lexington, KY 40508",
      phone: "+1 - 210-621-8228",
      email: "shigeoakiyama@gmail.com"
    }
  ];

  const panamaDojos = [
    {
      name: "SKIF Doshinkai Panama",
      instructor: "Official Branch",
      address: "P. O. Box 0819-06726\nPanama, Republic of Panama",
      email: "dskdojo1@gmail.com"
    },
    {
      name: "Dojo Shoshin Karate-Do",
      instructor: "Ernesto Ruiz",
      address: "Casa Cultural las 600\nPanama City",
      phone: "+ 507 - 6724-6263",
      email: "ernestalvarado788@gmail.com"
    },
    {
      name: "Nintai Ryoku Dojo",
      instructor: "Jorge Beleño",
      address: "12 de Octubre, Altos de Miramar\nPanama City",
      phone: "+ 507 - 6842-2044",
      instagram: "@nintairyokudojo",
      link: "https://instagram.com/nintairyokudojo"
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
              Affiliated <br />
              <span className="text-neutral-300">Dojos</span>
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-neutral-500 font-medium leading-relaxed">
              Doshinkai Dojo is proud to be connected with a strong network of dedicated instructors and traditional Shotokan schools across the Americas.
            </p>
          </div>
        </div>
      </section>

      {/* 2. KENTUCKY REGION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black">Kentucky</h2>
          <div className="flex-grow h-px bg-neutral-200 ml-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {kentuckyDojos.map((dojo, index) => (
            <div key={index} className="group bg-neutral-50 border border-neutral-200 p-8 hover:border-black hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col h-full">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <div className="mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-red-700 mb-2 block">
                  {dojo.instructor}
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                  {dojo.name}
                </h3>
              </div>

              <div className="space-y-4 text-sm text-neutral-600 flex-grow">
                {dojo.address && (
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span className="whitespace-pre-line leading-relaxed">{dojo.address}</span>
                  </div>
                )}
                {dojo.phone && (
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-neutral-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <a href={`tel:${dojo.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-red-700 transition-colors font-medium">{dojo.phone}</a>
                  </div>
                )}
                {dojo.email && (
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-neutral-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <a href={`mailto:${dojo.email}`} className="hover:text-red-700 transition-colors font-medium">{dojo.email}</a>
                  </div>
                )}
              </div>

              {dojo.website && (
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <a href={dojo.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black hover:text-red-700 transition-colors group/link">
                    Visit Website <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 3. PANAMA CITY REGION */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black">Panama City</h2>
          <div className="flex-grow h-px bg-neutral-200 ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {panamaDojos.map((dojo, index) => (
            <div key={index} className="group bg-white border border-neutral-200 p-8 hover:border-red-700 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col h-full">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-red-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <div className="mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-2 block">
                  {dojo.instructor}
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight text-black group-hover:text-red-700 transition-colors">
                  {dojo.name}
                </h3>
              </div>

              <div className="space-y-3 text-sm text-neutral-600 flex-grow">
                {dojo.address && (
                  <div className="flex items-start gap-3">
                    <span className="text-red-700 font-bold mt-0.5">&rarr;</span>
                    <span className="whitespace-pre-line leading-relaxed">{dojo.address}</span>
                  </div>
                )}
                {dojo.phone && (
                  <div className="flex items-center gap-3">
                    <span className="text-red-700 font-bold">&rarr;</span>
                    <a href={`tel:${dojo.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-red-700 transition-colors font-medium">{dojo.phone}</a>
                  </div>
                )}
                {dojo.email && (
                  <div className="flex items-center gap-3">
                    <span className="text-red-700 font-bold">&rarr;</span>
                    <a href={`mailto:${dojo.email}`} className="hover:text-red-700 transition-colors font-medium text-xs break-all">{dojo.email}</a>
                  </div>
                )}
              </div>

              {dojo.instagram && (
                <div className="mt-8 pt-6 border-t border-neutral-100">
                  <a href={dojo.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black hover:text-red-700 transition-colors group/link">
                    {dojo.instagram} <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. RETURN CTA */}
      <section className="py-16 text-center border-t border-neutral-200 mt-12">
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