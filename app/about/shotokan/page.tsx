import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = pageMetadata({
  title: 'Shotokan Karate',
  description: 'Discover the benefits of traditional Shotokan Karate: physical fitness, self-defense, discipline, and character development for all ages in Cincinnati, OH.',
  path: '/about/shotokan',
});

const benefits = [
  { title: 'Physical Fitness', desc: 'Shotokan Karate is a rigorous martial art that involves various physical exercises such as punching, kicking, and blocking. Practicing these techniques improves strength, flexibility, agility, and cardiovascular health.' },
  { title: 'Self-Defense Skills', desc: 'Shotokan Karate teaches effective self-defense techniques that can be utilized in real-life situations. Students learn how to defend themselves against physical threats using strikes, blocks, and grappling techniques.' },
  { title: 'Discipline and Focus', desc: 'Karate training instills discipline and focus in practitioners. Students are required to follow strict rules and etiquette during training, which helps develop self-control, concentration, and mental resilience.' },
  { title: 'Confidence Building', desc: 'As students progress in their training and master new techniques, they gain confidence in their abilities. This newfound confidence extends beyond the dojo and positively impacts various aspects of their lives, such as academics, work, and social interactions.' },
  { title: 'Stress Relief', desc: 'Engaging in karate training provides a healthy outlet for stress and tension. The physical exertion involved in practicing karate helps release endorphins, which are natural mood elevators, leading to reduced stress and improved mental well-being.' },
  { title: 'Character Development', desc: 'Shotokan Karate emphasizes important values such as respect, humility, perseverance, and integrity. Through training, students learn to cultivate these qualities, which contribute to their overall character development and personal growth.' },
  { title: 'Community and Camaraderie', desc: 'Karate dojos foster a sense of community and camaraderie among students and instructors. Training together builds strong bonds and friendships, creating a supportive environment where individuals can learn and grow together.' },
  { title: 'Lifetime Learning', desc: 'Shotokan Karate is a lifelong journey of continuous learning and improvement. Regardless of age or ability, there is always something new to discover and master in karate, making it a fulfilling and enriching pursuit for people of all ages.' },
];

const whyUs = [
  { title: 'Safety First', desc: 'Your safety is our top priority. Our experienced instructors are trained to provide comprehensive safety instructions and ensure that all participants practice in a controlled and secure environment.' },
  { title: 'Expert Instruction', desc: 'Learn from certified instructors who are passionate about sharing the art of Shotokan Karate. Our instructors bring years of experience and expertise to each class, guiding you through proper techniques and form every step of the way.' },
  { title: 'Holistic Approach', desc: 'Shotokan Karate is not just about physical fitness—it’s about nurturing your mind, body, and spirit. Our classes focus on developing strength, agility, focus, and mental resilience, helping you achieve balance and well-being in all aspects of life.' },
  { title: 'Inclusive Atmosphere', desc: 'Whether you’re a beginner or an experienced practitioner, our classes are designed to accommodate individuals of all ages, fitness levels, and backgrounds. Join a supportive community where everyone is welcome and encouraged to thrive.' },
  { title: 'Free Trial Class', desc: 'Ready to experience the benefits of Shotokan Karate for yourself? Sign up for a free trial class today! Discover the power of martial arts in a safe and supportive environment, and take the first step towards unleashing your full potential.' },
];

export default function ShotokanKarate() {
  return (
    <div className="bg-white text-ink">
      <PageHeader
        label="About"
        title="The way of Shotokan"
        intro="Look no further. Our Shotokan Karate classes offer the perfect blend of tradition, discipline, and safety in a welcoming environment."
      />

      {/* ── BANNER IMAGE ─────────────────────────────────────── */}
      <div className="relative h-64 sm:h-80 lg:h-[26rem]">
        <Image
          src="/pexels-cottonbro-studio-8038508_web.webp"
          alt="A student watching the Sensei demonstrate technique in the dojo"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>

      {/* ── BENEFITS ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-6">
              <p className="label text-ink-faint mb-6">Benefits</p>
              <h2 className="font-display font-extrabold text-3xl lg:text-[2.75rem] leading-[1.1]">
                Benefits of learning Shotokan Karate
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pt-14">
              <p className="text-lg text-ink-soft leading-relaxed">
                Overall, learning Shotokan Karate offers numerous physical, mental, and emotional benefits that
                contribute to a healthier and more balanced lifestyle.
              </p>
            </div>
          </div>

          <dl className="border-t border-line">
            {benefits.map((item, i) => (
              <div key={item.title} className="rise grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-8 py-7 border-b border-line">
                <span className="lg:col-span-1 font-display font-bold text-sm text-dojo tnum">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <dt className="lg:col-span-3 font-display font-extrabold text-xl leading-tight">{item.title}</dt>
                <dd className="lg:col-span-8 text-ink-soft leading-relaxed">{item.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── PULL QUOTE — solid band ──────────────────────────── */}
      <section className="bg-steel text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="label text-white/50 mb-7">Your next step</p>
          <p className="font-display font-extrabold text-3xl lg:text-[2.75rem] leading-[1.12] max-w-4xl">
            Are you ready to embark on a journey of{' '}
            <span className="text-dojo">self-discovery, fitness, and personal growth?</span>
          </p>
        </div>
      </section>

      {/* ── WHY CHOOSE OUR DOJO ──────────────────────────────── */}
      <section className="bg-bone border-b border-line py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <p className="label text-ink-faint mb-6">Why us</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-[2.75rem] leading-[1.1]">
              Why choose our dojo?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="rise bg-white border border-line rounded-md p-6 lg:p-7 hover:border-dojo transition-colors duration-200"
              >
                <h3 className="font-display font-extrabold text-xl mb-3">{item.title}</h3>
                <p className="text-ink-soft leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1] mb-4">
                Don&rsquo;t wait any longer to start your journey
              </h2>
              <p className="text-ink-soft leading-relaxed max-w-xl">
                Contact us now to reserve your spot and embark on an exciting adventure filled with growth,
                empowerment, and safety. We can&rsquo;t wait to see you on the mat.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/join/class-registration"
                className="inline-flex items-center gap-2.5 bg-dojo text-white font-semibold px-7 py-4 rounded-md hover:bg-dojo-deep transition-colors duration-200"
              >
                Join us today
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2.5 border border-line text-ink font-semibold px-7 py-4 rounded-md hover:border-dojo hover:text-dojo transition-colors duration-200"
              >
                View the schedule
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
