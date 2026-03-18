import Link from 'next/link';

export default function Accessories() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-red-700 selection:text-white pb-24">
      
      {/* 1. CINEMATIC HEADER */}
      <section className="relative pt-[120px] md:pt-[180px] pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-200">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div>
            <div className="w-16 h-1.5 bg-red-700 mb-8"></div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-black">
              Dojo <br />
              <span className="text-neutral-300">Gear</span>
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-neutral-500 font-medium leading-relaxed">
              Official Doshinkai Dojo apparel and accessories. Represent the tradition on and off the mat.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT SHOWCASE */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Product Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden bg-neutral-50 border border-neutral-200 p-8 flex items-center justify-center group">
              {/* Accent Hover Line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-red-700 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
              
              <img 
                src="/t-shirts.webp" 
                alt="Doshinkai Official T-Shirts" 
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right: Product Details & CTA */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-red-700 mb-4 block">Official Apparel</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black mb-6">
              Doshinkai T-Shirt
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              Represent Doshinkai Dojo with our official premium t-shirts. Designed for both intense training sessions and everyday lifestyle wear. Features our iconic Tiger and Kanji crest.
            </p>

            {/* Structured Details */}
            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-4 border-b border-neutral-200 pb-4">
                <span className="text-sm font-bold uppercase tracking-widest text-neutral-400 w-24">Colors</span>
                <span className="text-sm font-bold uppercase tracking-widest text-black">Charcoal / Navy Blue</span>
              </div>
              <div className="flex items-center gap-4 border-b border-neutral-200 pb-4">
                <span className="text-sm font-bold uppercase tracking-widest text-neutral-400 w-24">Fit</span>
                <span className="text-sm font-bold uppercase tracking-widest text-black">Athletic / Unisex</span>
              </div>
            </div>

            {/* Call to Action -> Google Form */}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfjFtU8n_eilGrCBrfnx6vMHX03VbPh4Mv3rudgbwjTULiFwg/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-widest text-white bg-black overflow-hidden shadow-xl hover:-translate-y-1 transition-all duration-300 w-full md:w-max"
            >
              <span className="absolute inset-0 w-full h-full bg-red-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative flex items-center gap-3">
                Order Now
                {/* External Link Icon */}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </span>
            </a>
            
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mt-6">
              * Opens secure Google Form to select sizes and complete your order.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}