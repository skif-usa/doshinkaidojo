import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import HeroSlider from '@/components/HeroSlider';

export const metadata: Metadata = pageMetadata({
  title: 'Doshinkai Dojo | Traditional Shotokan Karate in Cincinnati',
  description: 'Traditional Shotokan Karate in Cincinnati, OH. Classes for children from age 5, teens, and adults, taught by certified SKIF-USA instructors. First class free.',
  path: '/',
  absoluteTitle: true,
});

const credentials = [
  { value: 'Age 5+', label: 'Youth classes' },
  { value: '6th Dan', label: 'Head instructor' },
  { value: '130+', label: 'SKIF countries' },
  { value: '35 yrs', label: 'Teaching experience' },
];

/* ── Real class groups, from the dojo schedule ───────────────── */
const programs = [
  { n: '01', age: 'Ages 5–7', name: 'Youth Karate', length: '45 minutes', when: 'Wednesdays, 5:15 PM' },
  { n: '02', age: 'Ages 8–11', name: 'Youth Karate', length: '60 minutes', when: 'Wednesdays, 5:15 PM' },
  { n: '03', age: 'Ages 12 & up', name: 'All Levels', length: 'In person & Zoom', when: 'Sun & Sat 1:30 PM · Mon & Wed 7:30 PM' },
  { n: '04', age: 'Ages 12 & up', name: 'Intermediate & Advanced', length: '60 minutes', when: 'Sun & Sat, 2:30 PM' },
];

const reasons = [
  { n: '01', title: 'Safety first', body: 'Experienced instructors, comprehensive safety instruction, and a controlled environment.' },
  { n: '02', title: 'Certified instruction', body: 'Taught under SKIF-USA certification, with proper technique guided at every step.' },
  { n: '03', title: 'Confidence and discipline', body: 'Students build focus, self-control, and character that carries well beyond the dojo.' },
  { n: '04', title: 'A free first class', body: 'Try traditional Shotokan before committing. Bring comfortable clothing; we do the rest.' },
];

const pillars = [
  { numeral: '一', subject: 'Body', body: 'Stamina, coordination, strength, and agility.' },
  { numeral: '二', subject: 'Mind', body: 'Concentration, memory, and presence.' },
  { numeral: '三', subject: 'Spirit', body: 'Perseverance, humility, and self-confidence.' },
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
    <div className="bg-white text-ink">
      {/* INJECT LOCAL SEO SCHEMA */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <HeroSlider />

      {/* ── CREDENTIAL BAR ───────────────────────────────────── */}
      <section className="bg-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {credentials.map((item, i) => (
              <div
                key={item.label}
                className={`py-7 lg:py-9 px-2 lg:px-8 ${i > 0 ? 'lg:border-l border-steel-line' : ''} ${
                  i % 2 === 1 ? 'border-l border-steel-line lg:border-l' : ''
                } ${i < 2 ? 'border-b border-steel-line lg:border-b-0' : ''}`}
              >
                <dt className="font-display font-extrabold text-3xl lg:text-4xl text-white leading-none">
                  {item.value}
                </dt>
                <dd className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55 mt-2.5">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── PROGRAMS ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div className="max-w-xl">
              <p className="label text-ink-faint mb-6">Classes</p>
              <h2 className="font-display font-extrabold text-3xl lg:text-[2.75rem] leading-[1.1]">
                Four classes, divided by age and rank
              </h2>
            </div>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 py-2.5 -my-2.5 font-semibold text-dojo hover:gap-3 transition-all duration-200"
            >
              Full schedule and guidelines
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="border-t border-line">
            {programs.map((program) => (
              <Link
                key={program.n}
                href="/schedule"
                className="rise group grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 items-baseline py-6 lg:py-7 border-b border-line hover:bg-bone transition-colors duration-200 px-2 -mx-2"
              >
                <span className="sm:col-span-1 font-display font-bold text-sm text-dojo tnum">{program.n}</span>

                <span className="sm:col-span-3 font-display font-extrabold text-xl lg:text-2xl group-hover:text-dojo transition-colors">
                  {program.age}
                </span>

                <span className="sm:col-span-3 font-semibold text-ink-soft">{program.name}</span>

                <span className="sm:col-span-2 text-sm text-ink-faint">{program.length}</span>

                <span className="sm:col-span-3 text-sm text-ink-faint sm:text-right tnum">{program.when}</span>
              </Link>
            ))}
          </div>

          <p className="text-sm text-ink-faint mt-6">
            Age exceptions are possible with instructor permission.
          </p>
        </div>
      </section>

      {/* ── WHY TRAIN HERE ───────────────────────────────────── */}
      <section className="bg-bone border-y border-line py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <p className="label text-ink-faint mb-6">Why Doshinkai</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-[2.75rem] leading-[1.1]">
              What every family can expect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-0">
            {reasons.map((reason) => (
              <div key={reason.n} className="rise py-7 border-t border-line">
                <span className="font-display font-bold text-sm text-dojo tnum">{reason.n}</span>
                <h3 className="font-display font-extrabold text-xl mt-3 mb-2.5">{reason.title}</h3>
                <p className="text-ink-soft leading-relaxed">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTRUCTOR ───────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-4/5 max-w-sm">
                <Image
                  src="/ruben_profil.webp"
                  alt="Sensei Rubén Fung, head instructor at Doshinkai Dojo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="label text-ink-faint mb-6">Head instructor</p>
              <h2 className="font-display font-extrabold text-3xl lg:text-[2.75rem] leading-[1.1] mb-6">
                Sensei Rubén Fung
              </h2>
              <p className="text-lg text-ink-soft leading-relaxed mb-8 max-w-xl">
                Over thirty-five years of traditional Shotokan experience, 6th Dan SKIF Black Belt, and Secretary of
                SKIF-USA. He has spent thirteen years shaping the Cincinnati karate community and serves as an
                international technical advisor.
              </p>
              <Link
                href="/about/instructor"
                className="inline-flex items-center gap-2 py-2.5 -my-2.5 font-semibold text-dojo hover:gap-3 transition-all duration-200"
              >
                Read the full profile
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR NAME — solid band ────────────────────────────── */}
      <section className="bg-steel text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
            <div className="lg:col-span-5">
              <p className="label text-white/50 mb-6">Our name</p>
              <span aria-hidden="true" className="font-jp block text-5xl text-white/25 mb-6 select-none">
                道心会
              </span>
              <h2 className="font-display font-extrabold text-3xl lg:text-[2.375rem] leading-[1.12]">
                Doshinkai means &lsquo;The Way of Body, Mind, and Spirit&rsquo;
              </h2>
            </div>

            <div className="lg:col-span-7 lg:pt-16">
              <p className="text-white/70 leading-relaxed max-w-xl">
                The name was bestowed upon our director by Hirokazu Kanazawa, Soke, founder of our organization. We are
                a member dojo of the Shotokan Karate-Do International Federation, one of the world&rsquo;s largest
                traditional karate organizations.
              </p>
              <Link
                href="/about/shotokan"
                className="inline-flex items-center gap-2 mt-7 py-2.5 -my-2.5 font-semibold text-white hover:text-dojo transition-colors duration-200"
              >
                About Shotokan Karate
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-steel-line">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.subject}
                className={`py-8 md:px-10 md:first:pl-0 md:last:pr-0 border-b md:border-b-0 border-steel-line last:border-b-0 ${
                  i > 0 ? 'md:border-l md:border-steel-line' : ''
                }`}
              >
                <span aria-hidden="true" className="font-jp text-xl text-dojo mr-3 select-none">
                  {pillar.numeral}
                </span>
                <h3 className="font-display font-extrabold text-xl inline align-middle">{pillar.subject}</h3>
                <p className="text-white/65 leading-relaxed mt-2.5">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ─────────────────────────────────────── */}
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-display font-extrabold text-3xl lg:text-[2.75rem] leading-[1.1] mb-4">
                Your first class is free
              </h2>
              <p className="text-ink-soft leading-relaxed max-w-lg">
                Students of all ages and experience levels are welcome to train with us at 6620 Montgomery Road.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/join/class-registration"
                className="inline-flex items-center gap-2.5 bg-dojo text-white font-semibold px-7 py-4 rounded-md hover:bg-dojo-deep transition-colors duration-200"
              >
                Register now
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="tel:+18325130058"
                className="inline-flex items-center gap-2.5 border border-line text-ink font-semibold px-7 py-4 rounded-md hover:border-dojo hover:text-dojo transition-colors duration-200 tnum"
              >
                (832) 513-0058
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
