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

const paths = [
  {
    href: '/join/class-registration',
    label: 'Enroll',
    title: 'Class Registration',
    body: 'Join our upcoming training sessions. Suitable for all skill levels.',
    badge: 'Popular',
  },
  {
    href: '/schedule',
    label: 'Calendar',
    title: 'Dojo Schedule',
    body: 'Find the right training times for you and your family.',
  },
  {
    href: '/about/shotokan',
    label: 'Philosophy',
    title: 'The Way of Shotokan',
    body: 'Learn the history, roots, and benefits of traditional Japanese Karate.',
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
    <div className="bg-paper text-ink">
      {/* INJECT LOCAL SEO SCHEMA */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 1. HERO */}
      <section className="relative">
        {/* Vertical kanji rail, sitting quietly at the edge */}
        <span
          aria-hidden="true"
          className="vertical-jp hidden xl:block absolute right-8 top-56 text-sm text-ink-faint/70 select-none"
        >
          空手道 &nbsp;·&nbsp; 動禅
        </span>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-48 pb-20 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
            <div className="lg:col-span-6 xl:col-span-5">
              <p className="eyebrow mb-8 flex items-center gap-3">
                <span aria-hidden="true" className="w-8 h-px bg-seal" />
                Cincinnati, Ohio
              </p>

              <h1 className="font-display font-light text-6xl sm:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-[-0.01em] mb-8">
                Master
                <br />
                <em className="not-italic font-normal text-seal">the form.</em>
              </h1>

              <p className="text-lg text-ink-soft leading-relaxed max-w-md mb-8">
                Traditional Shotokan Karate in Cincinnati. We build character, discipline, and strength through strict
                adherence to Japanese martial arts roots.
              </p>

              <p className="flex items-center gap-3 mb-12">
                <span aria-hidden="true" className="w-1.5 h-1.5 bg-seal rotate-45" />
                <span className="eyebrow">Se Habla Español</span>
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                <Link
                  href="/join/class-registration"
                  className="group inline-flex items-center gap-3 bg-ink text-paper px-9 py-4 text-[12px] uppercase tracking-[0.24em] hover:bg-seal transition-colors duration-500"
                >
                  Start Training
                  <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-500">
                    &rarr;
                  </span>
                </Link>
                <Link
                  href="/schedule"
                  className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.24em] text-ink-soft hover:text-seal transition-colors duration-500"
                >
                  View Schedule
                  <span aria-hidden="true" className="w-8 h-px bg-rule group-hover:bg-seal group-hover:w-12 transition-all duration-500" />
                </Link>
              </div>
            </div>

            {/* Framed portrait with an offset seal block */}
            <div className="lg:col-span-6 xl:col-start-7 relative">
              <span aria-hidden="true" className="absolute -top-5 -left-5 w-28 h-28 bg-paper-deep hidden md:block" />
              <span aria-hidden="true" className="absolute -bottom-5 -right-5 w-16 h-16 bg-seal hidden md:block" />
              <div className="relative aspect-4/5 overflow-hidden border border-rule">
                <Image
                  src="/hero_image.webp"
                  alt="Karate training at Doshinkai Dojo in Cincinnati"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY & STORY */}
      <section className="relative overflow-hidden bg-ink text-paper py-24 md:py-36">
        <span
          aria-hidden="true"
          className="font-jp pointer-events-none select-none absolute -top-16 -right-10 text-[18rem] md:text-[26rem] leading-none text-paper opacity-[0.035]"
        >
          空手道
        </span>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="eyebrow text-paper/45 mb-6 flex items-center gap-3">
                <span aria-hidden="true" className="w-8 h-px bg-seal" />
                Philosophy &amp; Story
              </p>
              <h2 className="font-display font-light text-4xl md:text-5xl leading-tight text-paper">
                The way of body,
                <br />
                mind, and spirit
              </h2>
              <span aria-hidden="true" className="font-jp block text-6xl md:text-7xl text-paper/15 mt-14 select-none">
                空手道
              </span>
            </div>

            <div className="lg:col-span-8 rise">
              <blockquote className="border-l border-seal pl-8 md:pl-10 mb-12">
                <p className="font-display font-light text-2xl md:text-3xl leading-snug text-paper">
                  DOSHINKAI means{' '}
                  <em className="not-italic text-seal">&lsquo;The Way of Body, Mind, and Spirit&rsquo;.</em>
                </p>
              </blockquote>

              <div className="space-y-8 max-w-2xl">
                <p className="text-paper/70 text-base md:text-lg leading-relaxed">
                  The name was bestowed upon our director by the founder of our organization, Hirokazu Kanazawa, Soke.
                  The name of our dojo exemplifies the philosophy and teachings of SKIF. The word &lsquo;DOJO&rsquo;
                  means &lsquo;the place where the Way is taught and learned&rsquo;.
                </p>

                <div className="pt-8 border-t border-paper/12">
                  <p className="text-paper/70 text-base leading-relaxed">
                    Doshinkai Dojo is proudly affiliated with the Shotokan Karate-Do International Federation-United
                    States of America (SKIF-USA) and the Shotokan Karate-Do International Federation (SKIF) based in
                    Japan. SKIF is one of the world&rsquo;s largest traditional karate organizations, boasting over 2
                    million members across more than 130 countries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE THREE PILLARS */}
      <section className="bg-paper py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-16 max-w-xl leading-relaxed">
            At Doshinkai Dojo, we emphasize the holistic development of our practitioners
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.subject}
                className={`rise py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 border-rule-soft last:border-b-0 ${
                  i > 0 ? 'md:border-l md:border-rule-soft' : ''
                }`}
              >
                <span aria-hidden="true" className="font-jp block text-4xl text-seal/70 mb-8 select-none">
                  {pillar.numeral}
                </span>
                <p className="text-lg leading-relaxed text-ink-soft">
                  <span className="font-display text-2xl text-ink mr-1">{pillar.subject}</span> {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPLORE */}
      <section className="bg-paper-warm border-t border-rule py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-14">
            <div>
              <p className="eyebrow mb-5 flex items-center gap-3">
                <span aria-hidden="true" className="w-8 h-px bg-seal" />
                Explore
              </p>
              <h2 className="font-display font-light text-4xl md:text-5xl leading-tight">Your path at the dojo</h2>
            </div>
            <Link
              href="/join/class-registration"
              className="group hidden md:inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-ink-soft hover:text-seal transition-colors duration-500"
            >
              View All Classes
              <span aria-hidden="true" className="w-8 h-px bg-rule group-hover:bg-seal group-hover:w-12 transition-all duration-500" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule">
            {paths.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                className="group relative bg-paper p-9 lg:p-10 flex flex-col justify-between min-h-[19rem] hover:bg-paper-warm transition-colors duration-500"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-px w-0 bg-seal group-hover:w-full transition-all duration-700 ease-zen"
                />
                <div>
                  <div className="flex items-center justify-between mb-7">
                    <span className="eyebrow">{path.label}</span>
                    {path.badge && (
                      <span className="eyebrow text-[9px] text-seal border border-seal/30 px-2 py-1">{path.badge}</span>
                    )}
                  </div>
                  <h3 className="font-display font-normal text-3xl leading-tight mb-4 group-hover:text-seal transition-colors duration-500">
                    {path.title}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed max-w-xs">{path.body}</p>
                </div>
                <span
                  aria-hidden="true"
                  className="text-seal mt-10 group-hover:translate-x-2 transition-transform duration-500"
                >
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AFFILIATION */}
      <section className="bg-paper border-t border-rule py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="eyebrow text-seal mb-8">Affiliation</p>
          <p className="font-display font-light text-2xl md:text-3xl leading-relaxed text-ink-soft">
            The members of Doshinkai Dojo are proudly affiliated with{' '}
            <span className="text-ink">SKIF-USA</span>, connecting our students to one of the world&rsquo;s largest and
            most respected traditional karate organizations.
          </p>
        </div>
      </section>

      {/* 6. COMMUNITY */}
      <section className="bg-paper border-t border-rule-soft py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="eyebrow text-seal mb-6">Community</p>
          <h2 className="font-display font-light text-3xl md:text-4xl mb-10">We proudly support</h2>
          <a
            href="https://aikidocincy.org"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-col items-center gap-2"
          >
            <span className="font-display text-2xl md:text-3xl text-ink-soft group-hover:text-ink transition-colors duration-500">
              Aikido of Cincinnati
            </span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-seal">aikidocincy.org</span>
            <span aria-hidden="true" className="w-10 h-px bg-rule group-hover:bg-seal group-hover:w-20 transition-all duration-500 mt-2" />
          </a>
        </div>
      </section>
    </div>
  );
}
