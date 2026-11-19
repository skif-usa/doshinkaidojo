import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import HeroSlider from '@/components/HeroSlider';
import Reveal from '@/components/Reveal';
import ClassTabs from '@/components/ClassTabs';
import ShrinkOnScroll from '@/components/ShrinkOnScroll';

export const metadata: Metadata = pageMetadata({
  title: 'Doshinkai Dojo | Traditional Shotokan Karate in Cincinnati',
  description: 'Traditional Shotokan Karate in Cincinnati, OH. Classes for children from age 5, teens, and adults, taught by certified SKIF-USA instructors. First class free.',
  path: '/',
  absoluteTitle: true,
});

const stats = [
  { value: 'Age 5+', label: 'Starting age' },
  { value: '6th Dan', label: 'Head instructor' },
  { value: '130+', label: 'SKIF countries' },
  { value: '35 yrs', label: 'Teaching experience' },
];

const reasons = [
  { title: 'Safety first', body: 'Experienced instructors, comprehensive safety instruction, and a controlled environment.' },
  { title: 'Certified instruction', body: 'Taught under SKIF-USA certification, with proper technique guided at every step.' },
  { title: 'Confidence and discipline', body: 'Students build focus, self-control, and character that carries well beyond the dojo.' },
  { title: 'A free first class', body: 'Try traditional Shotokan before committing. Bring comfortable clothing; we do the rest.' },
];

const pillars = [
  { numeral: '一', subject: 'Body', body: 'Stamina, coordination, strength, and agility.' },
  { numeral: '二', subject: 'Mind', body: 'Concentration, memory, and presence.' },
  { numeral: '三', subject: 'Spirit', body: 'Perseverance, humility, and self-confidence.' },
];

const names = [
  { kanji: '道心会', size: '3.25rem', reading: 'Dōshinkai', meaning: 'The Way of Body, Mind, and Spirit' },
  { kanji: '国際松濤館空手道連盟', size: '1.5rem', reading: 'SKIF', meaning: 'Shotokan Karate-Do International Federation' },
  { kanji: '金澤弘和', size: '2.25rem', reading: 'Kanazawa Hirokazu', meaning: 'Soke, founder of SKIF' },
];

const faqs = [
  {
    q: 'What age can my child start?',
    a: 'Classes begin at age five. Youth classes are divided into ages 5–7 and 8–11 so every child receives the attention they need. Age exceptions are possible with instructor permission.',
  },
  {
    q: 'Do I need any experience?',
    a: 'No. All Levels classes welcome students aged twelve and over, with no experience needed, in person and on Zoom.',
  },
  {
    q: 'Is the first class really free?',
    a: 'Yes. Try traditional Shotokan before committing. Bring comfortable clothing; we do the rest.',
  },
  {
    q: 'Can I train online?',
    a: 'All Levels classes also run on Zoom for students aged twelve and over. Secure links are provided directly to registered students before class.',
  },
  {
    q: 'Do you offer private lessons?',
    a: 'Yes. Private instruction is one-on-one with Sensei. You can request a session from the Private Instruction page.',
  },
  {
    q: 'Where is the dojo?',
    a: '6620 Montgomery Road, Suite 3, Cincinnati, OH 45213.',
  },
];

export default function Home() {
  // This is the invisible SEO data that tells Google you are a local business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Doshinkai Dojo",
    "image": "https://doshinkaidojo.com/hero_image.webp",
    "logo": "https://doshinkaidojo.com/doshinkai_logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6620 Montgomery Road, Suite 3",
      "addressLocality": "Cincinnati",
      "addressRegion": "OH",
      "postalCode": "45213",
      "addressCountry": "US"
    },
    "areaServed": "Cincinnati, OH",
    "telephone": "+1-832-513-0058",
    "email": "dskdojo1@gmail.com",
    "url": "https://doshinkaidojo.com",
    "memberOf": {
      "@type": "Organization",
      "name": "Shotokan Karate-Do International Federation - USA (SKIF-USA)",
      "url": "https://skifusa.org"
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "13:30", "closes": "15:30" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "17:15", "closes": "18:15" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "13:30", "closes": "15:30" }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="bg-white text-ink">
      {/* INJECT LOCAL SEO SCHEMA */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <HeroSlider />

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 lg:py-36">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-4xl mx-auto text-center">
            <p
              aria-hidden="true"
              className="brush text-6xl sm:text-7xl lg:text-8xl tracking-[0.12em] pl-[0.12em] text-ink select-none mb-6 lg:mb-8"
            >
              空手道
            </p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-[3.25rem] leading-[1.15]">
              Traditional Shotokan, taught with patience, precision, and respect.
            </h2>
            <p className="text-lg lg:text-xl text-ink-soft leading-relaxed mt-7 max-w-2xl mx-auto">
              Doshinkai means &lsquo;The Way of Body, Mind, and Spirit&rsquo;. We are a member dojo of the Shotokan
              Karate-Do International Federation, one of the world&rsquo;s largest traditional karate organizations.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-9">
              <Link href="/about/shotokan" className="btn-dark">
                About Shotokan Karate
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/schedule" className="btn-line">
                See the schedule
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100} className="mt-20 lg:mt-24">
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 text-center">
              {stats.map((item, i) => (
                <div key={item.label} className={`px-4 ${i > 0 ? 'lg:border-l lg:border-line' : ''} ${i % 2 === 1 ? 'border-l border-line lg:border-l' : ''}`}>
                  <dt className="font-display font-semibold text-3xl lg:text-5xl">{item.value}</dt>
                  <dd className="text-sm text-ink-faint mt-2">{item.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── PHOTO THAT SHRINKS AS YOU SCROLL ─────────────────── */}
      <ShrinkOnScroll
        src="/technique-family-kick.webp"
        alt="Students of all ages performing Shotokan blocks, stances and kicks"
        title="Meet Doshinkai."
        text="Traditional Shotokan for children, teens, and adults at 6620 Montgomery Road in Cincinnati."
        cta={{ label: 'About the dojo', href: '/about/shotokan' }}
      />

      {/* ── CLASSES ──────────────────────────────────────────── */}
      <section className="pb-24 lg:pb-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-semibold text-3xl lg:text-5xl leading-[1.1] mb-4">
              One dojo. A class for every age.
            </h2>
            <p className="text-lg text-ink-soft">Choose a group to see when and how we train.</p>
          </Reveal>
          <Reveal delay={80}>
            <ClassTabs />
          </Reveal>
        </div>
      </section>

      {/* ── WHY TRAIN HERE ───────────────────────────────────── */}
      <section className="pb-24 lg:pb-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-semibold text-3xl lg:text-5xl leading-[1.1]">
              What every family can expect.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 70}>
                <div className="h-full rounded-[2rem] bg-bone p-8 lg:p-12">
                  <span className="font-display text-sm text-ink-faint tnum">0{i + 1}</span>
                  <h3 className="font-display font-semibold text-2xl lg:text-3xl mt-10 mb-3">{reason.title}</h3>
                  <p className="text-ink-soft leading-relaxed max-w-md">{reason.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTRUCTOR ───────────────────────────────────────── */}
      <section className="pb-24 lg:pb-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
            <Reveal className="lg:col-span-5">
              <div className="relative aspect-4/5 max-w-md rounded-[2rem] overflow-hidden">
                <Image
                  src="/ruben_profil.webp"
                  alt="Sensei Rubén Fung, head instructor at Doshinkai Dojo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-7">
              <p className="label text-ink-faint mb-6">Head instructor</p>
              <h2 className="font-display font-semibold text-3xl lg:text-5xl leading-[1.1] mb-6">
                Sensei Rubén Fung
              </h2>
              <p className="text-lg text-ink-soft leading-relaxed mb-8 max-w-xl">
                Over thirty-five years of traditional Shotokan experience, 6th Dan SKIF Black Belt, and Secretary of
                SKIF-USA. He has spent thirteen years shaping the Cincinnati karate community and serves as an
                international technical advisor.
              </p>
              <Link href="/about/instructor" className="btn-dark">
                Read the full profile
                <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── BODY · MIND · SPIRIT (dark) ──────────────────────── */}
      <section className="px-3 sm:px-4 lg:px-6 pb-24 lg:pb-36">
        <Reveal className="max-w-[96rem] mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] bg-steel text-white px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 items-center">
              <div className="lg:col-span-6">
                <p className="label text-white/50 mb-5">Our name</p>
                <h2 className="font-display font-semibold text-3xl lg:text-5xl leading-[1.1] mb-5">
                  The way of body, mind, and spirit.
                </h2>
                <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                  The name was bestowed upon our director by Hirokazu Kanazawa, Soke, founder of our organization.
                </p>
              </div>

              <dl className="lg:col-span-6 rounded-3xl bg-steel-2 border border-white/10 divide-y divide-white/10">
                {names.map((n) => (
                  <div key={n.kanji} className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-6 px-6 sm:px-8 py-6 lg:py-7">
                    <dt className="brush text-white shrink-0 min-w-[5.5rem]" lang="ja" style={{ fontSize: n.size }}>
                      {n.kanji}
                    </dt>
                    <dd className="text-sm leading-snug">
                      <span className="block font-medium text-white">{n.reading}</span>
                      <span className="block text-white/55 mt-1">{n.meaning}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
              {pillars.map((pillar) => (
                <div key={pillar.subject} className="rounded-3xl bg-steel-2 border border-white/10 p-8 lg:p-10">
                  <span aria-hidden="true" className="font-jp text-4xl text-white/40 block mb-10 select-none">
                    {pillar.numeral}
                  </span>
                  <h3 className="font-display font-semibold text-2xl mb-3">{pillar.subject}</h3>
                  <p className="text-white/65 leading-relaxed">{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── TWO WAYS TO TRAIN ────────────────────────────────── */}
      <section className="pb-24 lg:pb-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-semibold text-3xl lg:text-5xl leading-[1.1]">Two ways to train.</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            <Reveal>
              <div className="h-full rounded-[2rem] border border-line p-8 lg:p-12 flex flex-col">
                <p className="text-sm font-medium text-ink-faint mb-3">Group classes</p>
                <h3 className="font-display font-semibold text-2xl lg:text-3xl mb-3">Start with a free trial.</h3>
                <p className="text-ink-soft leading-relaxed mb-8">
                  Join a class for your age and level. Your first class is on us.
                </p>
                <Link href="/join/class-registration" className="btn-dark self-start mt-auto">
                  Class registration
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full rounded-[2rem] border border-line p-8 lg:p-12 flex flex-col">
                <p className="text-sm font-medium text-ink-faint mb-3">Private instruction</p>
                <h3 className="font-display font-semibold text-2xl lg:text-3xl mb-3">One-on-one with Sensei.</h3>
                <p className="text-ink-soft leading-relaxed mb-8">
                  Focused, personal training at your own pace.
                </p>
                <Link href="/join/private-class" className="btn-line text-ink self-start mt-auto">
                  Request a session
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="pb-24 lg:pb-36">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-semibold text-3xl lg:text-5xl leading-[1.1] text-center mb-12">
              Questions, answered.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="border-t border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group border-b border-line">
                  <summary className="flex items-center justify-between gap-6 py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="font-display font-medium text-lg lg:text-xl">{f.q}</span>
                    <span
                      aria-hidden="true"
                      className="text-2xl leading-none text-ink-faint transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-7 pr-10 text-ink-soft leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CLOSING CTA ─────────────────────────────────────── */}
      <section className="px-3 sm:px-4 lg:px-6 pb-16 lg:pb-24">
        <Reveal className="max-w-[96rem] mx-auto">
          <div className="rounded-[2rem] lg:rounded-[2.5rem] bg-bone px-6 py-16 lg:py-24 text-center">
            <h2 className="font-display font-semibold text-4xl lg:text-6xl leading-[1.05] mb-5">
              Your first class is free.
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed max-w-lg mx-auto mb-9">
              Students of all ages and experience levels are welcome to train with us at 6620 Montgomery Road.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/join/class-registration" className="btn-dark">
                Register now
                <span aria-hidden="true">→</span>
              </Link>
              <a href="tel:+18325130058" className="btn-line text-ink tnum">
                (832) 513-0058
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
