import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Doshinkai Dojo | Traditional Shotokan Karate in Cincinnati',
  description: 'Traditional Shotokan Karate in Cincinnati, OH. We build character, discipline, and strength through strict adherence to Japanese martial arts roots.',
  path: '/',
  absoluteTitle: true,
});

const heroMeta = [
  { label: 'Location', value: 'Cincinnati, Ohio' },
  { label: 'Affiliation', value: 'S.K.I.F. Member Dojo' },
  { label: 'Language', value: 'Se Habla Español' },
];

const marqueeWords = ['Kihon', '空手道', 'Kata', '道場', 'Kumite', '精神', 'Karate-Dō', '鍛錬', 'Discipline'];

const pillars = [
  {
    numeral: '一',
    subject: 'The body',
    body: 'is cultivated through training in stamina, coordination, strength, and agility.',
  },
  {
    numeral: '二',
    subject: 'The mind',
    body: 'is sharpened through practices fostering concentration and memory.',
  },
  {
    numeral: '三',
    subject: 'The spirit',
    body: 'is nurtured through lessons in perseverance, humility, and self-confidence.',
  },
];

const index = [
  {
    n: '01',
    href: '/join/class-registration',
    title: 'Class Registration',
    kicker: 'Enroll',
    body: 'Join our upcoming training sessions. Suitable for all skill levels.',
    image: '/introduction.webp',
  },
  {
    n: '02',
    href: '/schedule',
    title: 'Dojo Schedule',
    kicker: 'Calendar',
    body: 'Find the right training times for you and your family.',
    image: '/pexels-cottonbro-studio-8038508_web.webp',
  },
  {
    n: '03',
    href: '/about/shotokan',
    title: 'The Way of Shotokan',
    kicker: 'Philosophy',
    body: 'Learn the history, roots, and benefits of traditional Japanese Karate.',
    image: '/skif_instructor_japan.webp',
  },
  {
    n: '04',
    href: '/about/instructor',
    title: 'Meet the Sensei',
    kicker: 'Instruction',
    body: 'Rubén Fung, 6th Dan, Secretary of SKIF-USA and international technical advisor.',
    image: '/ruben_profil.webp',
  },
  {
    n: '05',
    href: '/events',
    title: 'Seminars & Gasshuku',
    kicker: 'Gatherings',
    body: 'Train under world-renowned SKIF instructors visiting Cincinnati.',
    image: '/2026_Kanazawa_Cincinnati.webp',
  },
];

export default function Home() {
  // This is the invisible SEO data that tells Google you are a local business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Doshinkai Dojo",
    "image": "https://doshinkaidojo.com/hero_image.webp",
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

  return (
    <div className="bg-void text-chalk">
      {/* INJECT LOCAL SEO SCHEMA */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── FULL-BLEED HERO ─────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
        <Image
          src="/hero_image.webp"
          alt="Karate training at Doshinkai Dojo in Cincinnati"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
        {/* Scrims: vertical for text legibility, horizontal for depth */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-void/25" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-void/85 via-transparent to-transparent" />

        {/* Meta column, pinned to the upper right */}
        <div className="hidden lg:flex absolute top-36 right-10 flex-col items-end gap-6 z-10">
          {heroMeta.map((m) => (
            <div key={m.label} className="text-right">
              <p className="eyebrow text-chalk-faint mb-1.5">{m.label}</p>
              <p className="text-sm text-chalk-soft">{m.value}</p>
              <span aria-hidden="true" className="block ml-auto mt-3 w-10 h-px bg-edge" />
            </div>
          ))}
        </div>

        <div className="relative z-10 px-5 lg:px-10 pb-14 lg:pb-20 pt-32">
          <p className="eyebrow text-chalk-soft mb-7 flex items-center gap-3">
            <span aria-hidden="true" className="w-10 h-px bg-seal" />
            Traditional Shotokan Karate
          </p>

          <h1 className="font-display font-light text-[3.5rem] sm:text-8xl lg:text-[9.5rem] xl:text-[11rem] leading-[0.86] tracking-[-0.02em] mb-9 max-w-6xl">
            Master
            <span className="text-seal"> the </span>
            form.
          </h1>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 max-w-7xl">
            <p className="text-base lg:text-lg text-chalk-soft leading-relaxed max-w-lg">
              Traditional Shotokan Karate in Cincinnati. We build character, discipline, and strength through strict
              adherence to Japanese martial arts roots.
            </p>

            <div className="flex flex-wrap items-center gap-4 lg:gap-6 shrink-0">
              <Link
                href="/join/class-registration"
                className="group inline-flex items-center gap-3 bg-chalk text-void px-8 py-4 eyebrow hover:bg-seal hover:text-chalk transition-colors duration-500"
              >
                Start Training
                <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-500">
                  &rarr;
                </span>
              </Link>
              <Link
                href="/schedule"
                className="group inline-flex items-center gap-3 border border-chalk/25 px-8 py-4 eyebrow text-chalk hover:border-seal hover:text-seal transition-colors duration-500"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE BAND ────────────────────────────────────── */}
      <div className="bg-shell border-y border-edge py-5 overflow-hidden" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {marqueeWords.map((word) => (
                <span key={`${copy}-${word}`} className="flex items-center shrink-0">
                  <span
                    className={`px-8 text-2xl lg:text-3xl font-light text-chalk-faint ${
                      /[　-鿿]/.test(word) ? 'font-jp' : 'font-display'
                    }`}
                  >
                    {word}
                  </span>
                  <span className="w-1 h-1 bg-seal rotate-45 shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── STICKY TWO-PANE PHILOSOPHY ──────────────────────── */}
      <section className="relative border-b border-edge">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left pane sticks while the right pane scrolls past it */}
          <div className="lg:col-span-5 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] flex flex-col justify-center px-5 lg:px-10 py-16 lg:py-0 border-b lg:border-b-0 lg:border-r border-edge">
            <p className="eyebrow text-chalk-faint mb-8 flex items-center gap-3">
              <span aria-hidden="true" className="w-8 h-px bg-seal" />
              Philosophy &amp; Story
            </p>
            <h2 className="font-display font-light text-5xl lg:text-6xl xl:text-7xl leading-[0.95] mb-10">
              The way of
              <br />
              body, mind,
              <br />
              <span className="text-seal">and spirit</span>
            </h2>
            <span aria-hidden="true" className="font-jp text-7xl xl:text-8xl text-chalk/10 select-none">
              空手道
            </span>
          </div>

          <div className="lg:col-span-7">
            <div className="px-5 lg:px-14 py-16 lg:py-28 border-b border-edge rise">
              <p className="font-display font-light text-3xl lg:text-4xl xl:text-5xl leading-[1.15]">
                DOSHINKAI means <span className="text-seal">&lsquo;The Way of Body, Mind, and Spirit&rsquo;.</span>
              </p>
              <p className="text-chalk-soft leading-relaxed mt-10 max-w-xl">
                The name was bestowed upon our director by the founder of our organization, Hirokazu Kanazawa, Soke. The
                name of our dojo exemplifies the philosophy and teachings of SKIF. The word &lsquo;DOJO&rsquo; means
                &lsquo;the place where the Way is taught and learned&rsquo;.
              </p>
            </div>

            {/* Pillars as full-width numbered rows, not columns */}
            <div className="px-5 lg:px-14 py-14 lg:py-20 border-b border-edge">
              <p className="eyebrow text-chalk-faint mb-12 max-w-md leading-relaxed">
                At Doshinkai Dojo, we emphasize the holistic development of our practitioners
              </p>
              {pillars.map((pillar) => (
                <div
                  key={pillar.subject}
                  className="rise flex items-baseline gap-6 lg:gap-10 py-8 border-t border-edge first:border-t-0"
                >
                  <span aria-hidden="true" className="font-jp text-3xl lg:text-4xl text-seal/80 shrink-0 select-none">
                    {pillar.numeral}
                  </span>
                  <p className="text-lg lg:text-xl leading-relaxed text-chalk-soft">
                    <span className="font-display text-2xl lg:text-3xl text-chalk">{pillar.subject}</span>{' '}
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="px-5 lg:px-14 py-16 lg:py-24 rise">
              <p className="eyebrow text-seal mb-7">Federation</p>
              <p className="text-chalk-soft leading-relaxed max-w-xl">
                Doshinkai Dojo is proudly affiliated with the Shotokan Karate-Do International Federation-United States
                of America (SKIF-USA) and the Shotokan Karate-Do International Federation (SKIF) based in Japan. SKIF is
                one of the world&rsquo;s largest traditional karate organizations, boasting over 2 million members across
                more than 130 countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDEXED ROWS (inverted block) ───────────────────── */}
      <section className="bg-bone text-ink">
        <div className="px-5 lg:px-10 pt-20 lg:pt-28 pb-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-ink-faint mb-6 flex items-center gap-3">
                <span aria-hidden="true" className="w-8 h-px bg-seal" />
                Your Path
              </p>
              <h2 className="font-display font-light text-5xl lg:text-7xl leading-[0.95]">Where to begin</h2>
            </div>
            <span className="index-num text-ink-faint">05 Entries</span>
          </div>
        </div>

        <div className="border-t border-edge-light">
          {index.map((row) => (
            <Link
              key={row.href}
              href={row.href}
              className="group/row relative flex items-center gap-6 lg:gap-12 px-5 lg:px-10 py-8 lg:py-11 border-b border-edge-light overflow-hidden hover:bg-bone-warm transition-colors duration-500"
            >
              {/* Thumbnail slides in from the right on hover */}
              <span
                aria-hidden="true"
                className="hidden lg:block absolute right-0 top-0 bottom-0 w-72 opacity-0 translate-x-6 group-hover/row:opacity-100 group-hover/row:translate-x-0 transition-all duration-700 ease-zen"
              >
                <span className="relative block w-full h-full">
                  <Image src={row.image} alt="" fill sizes="288px" className="object-cover" />
                  <span className="absolute inset-0 bg-gradient-to-r from-bone-warm to-transparent" />
                </span>
              </span>

              <span className="index-num text-ink-faint group-hover/row:text-seal transition-colors duration-300 shrink-0">
                {row.n}
              </span>

              <span className="min-w-0 flex-1 relative z-10">
                <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-display text-3xl lg:text-5xl font-light leading-none group-hover/row:text-seal group-hover/row:translate-x-2 transition-all duration-500 ease-zen">
                    {row.title}
                  </span>
                  <span className="eyebrow text-ink-faint">{row.kicker}</span>
                </span>
                <span className="block text-sm text-ink-soft mt-3 max-w-md">{row.body}</span>
              </span>

              <span
                aria-hidden="true"
                className="relative z-10 shrink-0 text-2xl text-ink-faint group-hover/row:text-seal group-hover/row:translate-x-2 transition-all duration-500"
              >
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── AFFILIATION, offset editorial ───────────────────── */}
      <section className="bg-bone text-ink border-b border-edge-light">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-3 px-5 lg:px-10 pt-16 lg:pt-24">
            <p className="eyebrow text-seal">Affiliation</p>
          </div>
          <div className="lg:col-span-8 px-5 lg:px-10 py-10 lg:py-24">
            <p className="font-display font-light text-3xl lg:text-5xl leading-[1.15] text-ink">
              The members of Doshinkai Dojo are proudly affiliated with{' '}
              <span className="text-seal">SKIF-USA</span>, connecting our students to one of the world&rsquo;s largest
              and most respected traditional karate organizations.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY + CLOSING ─────────────────────────────── */}
      <section className="bg-void">
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-edge">
          <div className="lg:col-span-6 px-5 lg:px-10 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-edge">
            <p className="eyebrow text-chalk-faint mb-8">We Proudly Support</p>
            <a href="https://aikidocincy.org" target="_blank" rel="noopener noreferrer" className="group inline-block">
              <span className="block font-display font-light text-4xl lg:text-5xl text-chalk group-hover:text-seal transition-colors duration-500">
                Aikido of Cincinnati
              </span>
              <span className="flex items-center gap-3 mt-4">
                <span className="index-num text-seal">aikidocincy.org</span>
                <span aria-hidden="true" className="w-10 h-px bg-edge group-hover:bg-seal group-hover:w-16 transition-all duration-500" />
              </span>
            </a>
          </div>

          <div className="lg:col-span-6 px-5 lg:px-10 py-16 lg:py-24 flex flex-col justify-center">
            <h2 className="font-display font-light text-4xl lg:text-6xl leading-[0.95] mb-8">
              Step onto
              <br />
              <span className="text-seal">the mat.</span>
            </h2>
            <p className="text-chalk-soft leading-relaxed max-w-md mb-10">
              All ages and experience levels are welcome. Begin with a class registration, or reach out with any
              questions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/join/class-registration"
                className="group inline-flex items-center gap-3 bg-chalk text-void px-8 py-4 eyebrow hover:bg-seal hover:text-chalk transition-colors duration-500"
              >
                Class Registration
                <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-500">
                  &rarr;
                </span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-chalk/25 px-8 py-4 eyebrow text-chalk hover:border-seal hover:text-seal transition-colors duration-500"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
