import Link from 'next/link';

export default function KarateHistory() {
  const karateLayers = [
    { num: '01', title: "The Surface", desc: "Refers strictly to combat without weapons, denoting 'empty hands'—the practical, physical application of technique." },
    { num: '02', title: "The Character", desc: "Speaks to the internal journey, emphasizing the importance of having a heart and mind devoid of malevolent intentions. For Master Funakoshi, the ultimate goal was to ‘seek perfection of character’." },
    { num: '03', title: "The Profound", desc: "Drawn from deep Buddhist philosophy, this reflects the understanding that all things are transient and devoid of inherent, fixed existence. Karate is a practice of constant, conscious change." }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-red-700 selection:text-white">
      
      {/* 1. CINEMATIC HEADER */}
      <section className="relative pt-[120px] md:pt-[180px] pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-200">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <div className="lg:w-1/2">
            <div className="w-16 h-1.5 bg-red-700 mb-8"></div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-black mb-6">
              The Origins <br />
              <span className="text-neutral-400">Of Our Style</span>
            </h1>
          </div>
          <div className="lg:w-1/2 lg:pt-8">
            <p className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed">
              The roots of traditional Japanese karate trace back to the island of Okinawa. In the 16th and 17th centuries, this martial art found its way to Okinawa from China through the efforts of soldiers and merchants.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE OKINAWAN ROOTS */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-8">
          With a rich history spanning over 1000 years in China, martial arts were ingrained deeply into the cultural fabric of the region. Initially known as <strong className="text-black font-black">CHIN-TE</strong> by the Okinawans, which translates to ‘Chinese or foreign fist’, karate underwent significant evolution on the island.
        </p>
        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
          During the 19th century, Okinawa was characterized by small villages, each with its own karate master boasting a distinctive style. Typically, these masters imparted their knowledge to a single student in private settings. The karate practiced during this period was rigorous and unforgiving. Training focused on developing techniques of such potency that a single punch or kick could incapacitate an opponent. For both the master and students, it was a matter of life and death, reflecting the intensity and seriousness with which karate was approached.
        </p>
      </section>

      {/* 3. GICHIN FUNAKOSHI (Editorial Split Layout) */}
      <section className="bg-neutral-50 py-24 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Image */}
            <div className="w-full lg:w-5/12">
              <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border-l-8 border-neutral-900 shadow-xl">
                <img 
                  src="/gichin_funakoshi.webp" 
                  alt="Gichin Funakoshi, Sensei" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
                {/* Decorative Kanji overlay */}
                <div className="absolute bottom-4 left-4 text-white/60 text-6xl font-black writing-vertical-rl pointer-events-none drop-shadow-md">
                  船越 義珍
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-7/12">
              <h4 className="text-xs font-black uppercase tracking-widest text-red-700 mb-4">The Founder</h4>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black mb-8">Gichin Funakoshi, Sensei</h2>
              
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  Gichin Funakoshi is revered as the founder of Shotokan karate. Born on November 10, 1868, and passing away on April 26, 1957, his journey in martial arts was shaped by unique circumstances and unwavering determination. Sensei Funakoshi had the rare opportunity to learn from two different Okinawan karate masters, a testament to his commitment to mastering his craft.
                </p>
                <p>
                  His resilience and strength of character were legendary; it is said that he once braved a hurricane, standing firm against the wind, as a personal test of fortitude.
                </p>
                <p>
                  In 1922, Master Funakoshi received an invitation to demonstrate his karate skills in Japan. His presentation was met with resounding success, leading him to decide to stay in Japan for the remainder of his life, dedicating himself to the promotion and advancement of karate.
                </p>
                <blockquote className="border-l-4 border-red-700 pl-6 py-2 my-8 text-2xl font-bold text-black italic bg-white shadow-sm p-4">
                  Sensei Funakoshi was not only a martial artist but also a poet, known by the pen name SHOTO, meaning ‘waving pines’.
                </blockquote>
                <p>
                  The term KAN translates to ‘house’. In homage to his poetic identity, Master Funakoshi’s students affectionately labeled his dojo as “Shotokan” – the House of Shoto.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE THREE LAYERS OF KARATE (Grid Layout) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black mb-4">
            The Philosophy of <span className="text-red-700">Empty Hands</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">Master Funakoshi redefined 'Karate', moving it from strictly combat to a profound path of character development, reflecting three layers of understanding:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {karateLayers.map((layer, index) => (
            <div key={index} className="bg-white border border-neutral-200 p-10 hover:border-black hover:shadow-xl transition-all duration-300 group">
              <span className="text-5xl font-black text-red-100 group-hover:text-red-700 block mb-6 transition-colors">
                {layer.num}
              </span>
              <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-4">
                {layer.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                {layer.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HIROKAZU KANAZAWA (Light Layout) */}
      <section className="bg-white py-24 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 border-b border-neutral-200 pb-8 text-center md:text-left">
            <h3 className="text-sm font-black uppercase tracking-widest text-red-600 mb-2">Shotokan Karate-Do International Federation</h3>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black">Hirokazu Kanazawa, Soke</h2>
            <p className="text-neutral-500 font-bold mt-2 uppercase tracking-widest">(May 3, 1931 – December 8, 2019)</p>
          </div>

          <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Content */}
            <div className="w-full lg:w-7/12">
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  Hirokazu Kanazawa, Soke was born 3 May 1931. He trained in judo while he was in high school, achieving a second-degree black belt (second dan). While at college he saw a group of karate students training and became entirely devoted to this new martial art.
                </p>
                <p>
                  Soke Kanazawa was already a member of the judo club, but he made persistent efforts to join the karate club. An exception was made, and he was accepted, but found himself at a disadvantage: his class had been training for a period and he found himself behind. To catch up, he would sometimes train from midnight to 2 AM. Master Kanazawa was granted his first dan after only a year and a half of training.
                </p>
                <p>
                  He graduated from college in 1956 with a degree in commerce, but immediately joined the karate organization. He won the first All Japan Karate Championship in free sparring (kumite) in 1957. He had not intended to compete because he had broken his right hand. However, he found that his mother had traveled to Tokyo to see him compete. And compete he did, with a bandaged right hand and was attended by a physician between each bout. He won each match convincingly.
                </p>
                <p>
                  Soke Kanazawa, now a fourth-degree black belt, was sent to Hawaii in 1961 to develop karate in the islands. He established dojos on several of the islands.
                </p>
                <p className="text-black font-bold text-xl pt-4">
                  In 1977 Soke Kanazawa founded the Shotokan Karate-Do International Federation (SKIF). He spent the rest of his life promoting his philosophy, his karate, and his organization.
                </p>
                <p>
                  The International Martial Arts Federation promoted Soke Kanazawa to 10th Dan in 2000. There is no higher rank. Soke Kanazawa passed away on December 8, 2019.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-5/12">
              <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border-l-8 border-red-700 shadow-xl">
                <img 
                  src="/hirokazu_kanazawa.webp" 
                  alt="Hirokazu Kanazawa, Soke" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5.5 FEDERATION LEADERSHIP (Light Gray Layout) */}
      <section className="bg-neutral-50 pt-20 pb-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-200 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Editorial Title */}
            <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-xs font-black uppercase tracking-widest text-red-600 mb-2">Our Foundation</h3>
              <h2 className="text-4xl font-black uppercase tracking-tighter text-black mb-6">SKIF-USA <br /> Leadership</h2>
              <p className="text-neutral-600 text-sm leading-relaxed max-w-md">
                Dedicated instructors carrying forward the strict standards and inclusive philosophy established by Soke Kanazawa. Doshinkai Dojo is proudly affiliated with the SKIF-USA and SKIF Japan organizations.
              </p>
            </div>

            {/* Image Feature */}
            <div className="lg:col-span-8">
              <div className="relative overflow-hidden shadow-2xl border-l-4 border-red-700 bg-white p-2">
                <img 
                  src="/skif_instructor_japan.webp" 
                  alt="SKIF-USA Federation Leadership in the Dojo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. BRIGHT CINEMATIC CLOSING BANNER */}
      <section className="relative w-full py-32 flex items-center justify-center overflow-hidden bg-white text-center border-t border-neutral-200">
        
{/* Subtle Tiger Watermark */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          {/* Change the src here to /doshinkai_logo.png */}
          <img src="/doshinkai_logo.png" alt="Tiger Watermark" className="h-[120%] object-contain" />
        </div>

        {/* Text Overlay */}
        <div className="relative z-10 px-4">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-6 leading-none">
            We Train With The <br />
            <span className="text-red-700">Spirit Of A Legend</span>
          </h2>
          <div className="w-24 h-1.5 bg-red-700 mx-auto mt-8"></div>
        </div>
      </section>

    </div>
  );
}