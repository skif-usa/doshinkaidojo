import Link from 'next/link';

export default function ShotokanKarate() {
  const benefits = [
    { title: "Physical Fitness", desc: "Shotokan Karate is a rigorous martial art that involves various physical exercises such as punching, kicking, and blocking. Practicing these techniques improves strength, flexibility, agility, and cardiovascular health." },
    { title: "Self-Defense Skills", desc: "Shotokan Karate teaches effective self-defense techniques that can be utilized in real-life situations. Students learn how to defend themselves against physical threats using strikes, blocks, and grappling techniques." },
    { title: "Discipline and Focus", desc: "Karate training instills discipline and focus in practitioners. Students are required to follow strict rules and etiquette during training, which helps develop self-control, concentration, and mental resilience." },
    { title: "Confidence Building", desc: "As students progress in their training and master new techniques, they gain confidence in their abilities. This newfound confidence extends beyond the dojo and positively impacts various aspects of their lives, such as academics, work, and social interactions." },
    { title: "Stress Relief", desc: "Engaging in karate training provides a healthy outlet for stress and tension. The physical exertion involved in practicing karate helps release endorphins, which are natural mood elevators, leading to reduced stress and improved mental well-being." },
    { title: "Character Development", desc: "Shotokan Karate emphasizes important values such as respect, humility, perseverance, and integrity. Through training, students learn to cultivate these qualities, which contribute to their overall character development and personal growth." },
    { title: "Community and Camaraderie", desc: "Karate dojos foster a sense of community and camaraderie among students and instructors. Training together builds strong bonds and friendships, creating a supportive environment where individuals can learn and grow together." },
    { title: "Lifetime Learning", desc: "Shotokan Karate is a lifelong journey of continuous learning and improvement. Regardless of age or ability, there is always something new to discover and master in karate, making it a fulfilling and enriching pursuit for people of all ages." }
  ];

  const whyUs = [
    { title: "Safety First", desc: "Your safety is our top priority. Our experienced instructors are trained to provide comprehensive safety instructions and ensure that all participants practice in a controlled and secure environment." },
    { title: "Expert Instruction", desc: "Learn from certified instructors who are passionate about sharing the art of Shotokan Karate. Our instructors bring years of experience and expertise to each class, guiding you through proper techniques and form every step of the way." },
    { title: "Holistic Approach", desc: "Shotokan Karate is not just about physical fitness—it’s about nurturing your mind, body, and spirit. Our classes focus on developing strength, agility, focus, and mental resilience, helping you achieve balance and well-being in all aspects of life." },
    { title: "Inclusive Atmosphere", desc: "Whether you’re a beginner or an experienced practitioner, our classes are designed to accommodate individuals of all ages, fitness levels, and backgrounds. Join a supportive community where everyone is welcome and encouraged to thrive." },
    { title: "Free Trial Class", desc: "Ready to experience the benefits of Shotokan Karate for yourself? Sign up for a free trial class today! Discover the power of martial arts in a safe and supportive environment, and take the first step towards unleashing your full potential." }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-red-700 selection:text-white">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative pt-[120px] md:pt-[150px] pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="w-16 h-1.5 bg-red-700 mb-8"></div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-black">
            The Way of <br />
            <span className="text-red-700">Shotokan</span>
          </h1>
        </div>

        {/* Full-width Image Banner */}
        <div className="w-full h-[50vh] md:h-[65vh] relative overflow-hidden bg-black">
          <img 
            src="/pexels-cottonbro-studio-8038508_web.webp" 
            alt="Student watching Sensei in the Dojo" 
            className="w-full h-full object-cover opacity-80"
          />
          {/* Fading gradient to blend the image into the page */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>
      </section>

      {/* 2. BENEFITS SECTION (Editorial Grid) */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black mb-6">
            Benefits of learning <br className="hidden md:block" /> Shotokan Karate
          </h2>
          <p className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed">
            Overall, learning Shotokan Karate offers numerous physical, mental, and emotional benefits that contribute to a healthier and more balanced lifestyle.
          </p>
        </div>

        {/* Numbered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {benefits.map((item, index) => (
            <div key={index} className="group flex flex-col">
              <span className="text-5xl font-black text-neutral-200 group-hover:text-red-700 transition-colors duration-500 mb-4 block leading-none">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3">
                {item.title}
              </h3>
              <div className="w-8 h-px bg-red-700 mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DRAMATIC BREAKOUT CTA */}
      <section className="bg-black text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-900 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-tight">
            Are you ready to embark on a journey of <span className="text-red-600">self-discovery, fitness, and personal growth?</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-medium leading-relaxed mb-0">
            Look no further. Our Shotokan Karate classes offer the perfect blend of tradition, discipline, and safety in a welcoming environment.
          </p>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (Card Layout) */}
      <section className="bg-neutral-50 py-24 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
              Why Choose <br /> Our Dojo?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, index) => (
              <div key={index} className="bg-white border border-neutral-200 p-8 hover:border-black hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <h3 className="text-xl font-black uppercase tracking-tight text-black mb-4 group-hover:text-red-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. FINAL ACTION BLOCK */}
      <section className="bg-white py-24 border-t border-neutral-200 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="w-16 h-1.5 bg-red-700 mx-auto mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black mb-6">
            Don't wait any longer to start your journey.
          </h2>
          <p className="text-neutral-500 text-lg mb-10">
            Contact us now to reserve your spot and embark on an exciting adventure filled with growth, empowerment, and safety. We can’t wait to see you on the mat.
          </p>
          <Link 
            href="/join/class-registration" 
            className="group relative inline-flex items-center justify-center px-10 py-5 text-base font-bold uppercase tracking-widest text-white bg-black overflow-hidden shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-red-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative flex items-center gap-3">
              Join Us Today
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </span>
          </Link>
        </div>
      </section>

    </div>
  );
}