import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

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
  {
    n: '01',
    age: 'Ages 5–7',
    name: 'Youth Karate',
    length: '45 minutes',
    when: 'Wednesdays, 5:15 PM',
    blurb: 'A shorter introductory class for younger beginners, built around basics, etiquette, and steady encouragement.',
  },
  {
    n: '02',
    age: 'Ages 8–11',
    name: 'Youth Karate',
    length: '60 minutes',
    when: 'Wednesdays, 5:15 PM',
    blurb: 'A full-length youth class focused on technique, focus, and progress through the Kyu belt ranks.',
  },
  {
    n: '03',
    age: 'Ages 12 & up',
    name: 'All Levels',
    length: '60 minutes',
    when: 'Sun & Sat 1:30 PM · Mon & Wed 7:30 PM',
    blurb: 'Teens and adults train together, in person and on Zoom. No previous experience is required.',
  },
  {
    n: '04',
    age: 'Ages 12 & up',
    name: 'Intermediate & Advanced',
    length: '60 minutes',
    when: 'Sun & Sat, 2:30 PM',
    blurb: 'For ranked students refining kata and kumite, and preparing for grading examinations.',
  },
];

/* ── Real schedule, from the schedule page ───────────────────── */
const timetable = [
  {
    day: 'Sunday',
    classes: [
      { time: '1:30 – 2:30 PM', name: 'All Levels', format: 'In-Person' },
      { time: '2:30 – 3:30 PM', name: 'Intermediate / Advance', format: 'In-Person' },
    ],
  },
  {
    day: 'Monday',
    classes: [{ time: '7:30 – 8:30 PM', name: 'All Levels', format: 'Zoom' }],
  },
  {
    day: 'Wednesday',
    classes: [
      { time: '5:15 – 6:15 PM', name: 'Youth · Ages 5–11', format: 'In-Person' },
      { time: '7:30 – 8:30 PM', name: 'All Levels', format: 'Zoom' },
    ],
  },
  {
    day: 'Saturday',
    classes: [
      { time: '1:30 – 2:30 PM', name: 'All Levels', format: 'In-Person' },
      { time: '2:30 – 3:30 PM', name: 'Intermediate / Advance', format: 'In-Person' },
    ],
  },
];

const outcomes = [
  { title: 'Physical fitness', body: 'Punching, kicking, and blocking build strength, flexibility, agility, and cardiovascular health.' },
  { title: 'Self-defense skills', body: 'Students learn to defend themselves against real physical threats using strikes and blocks.' },
  { title: 'Discipline and focus', body: 'The rules and etiquette of the dojo develop self-control, concentration, and mental resilience.' },
  { title: 'Confidence', body: 'Confidence earned on the mat carries into academics, work, and social life.' },
  { title: 'Character', body: 'Respect, humility, perseverance, and integrity are practised in every class.' },
  { title: 'Community', body: 'Training together builds strong bonds in a supportive environment.' },
];

const promises = [
  {
    n: '01',
    title: 'Safety first',
    body: 'Your safety is our top priority. Our experienced instructors provide comprehensive safety instruction and a controlled, secure environment.',
  },
  {
    n: '02',
    title: 'Expert instruction',
    body: 'Learn from certified instructors who bring years of experience and expertise to each class, guiding proper technique every step of the way.',
  },
  {
    n: '03',
    title: 'Inclusive atmosphere',
    body: 'Beginner or experienced, our classes accommodate all ages, fitness levels, and backgrounds. Everyone is welcome and encouraged to thrive.',
  },
  {
    n: '04',
    title: 'A free first class',
    body: 'Try traditional Shotokan Karate before committing. Register for a free trial class and take the first step.',
  },
];

const pillars = [
  { numeral: '一', subject: 'Body', body: 'Cultivated through training in stamina, coordination, strength, and agility.' },
  { numeral: '二', subject: 'Mind', body: 'Sharpened through practices fostering concentration and memory.' },
  { numeral: '三', subject: 'Spirit', body: 'Nurtured through lessons in perseverance, humility, and self-confidence.' },
];

const instructorCredits = [
  '6th Dan SKIF Black Belt (Rokudan)',
  'Secretary of SKIF-USA',
  'International technical advisor',
  'Teaches youth, adult, and advanced classes',
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

      {/* ── HERO — full-bleed split ──────────────────────────── */}
      <section className="relative border-b border-line">
        {/* Image bleeds to the right edge of the viewport on desktop */}
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="relative h-72 sm:h-96 lg:h-full pt-[86px] lg:pt-0">
            <Image
              src="/hero_image.webp"
              alt="Students training in traditional Shotokan Karate at Doshinkai Dojo in Cincinnati"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:w-1/2 lg:pr-20 py-14 lg:py-32">
            <p className="label text-ink-faint mb-8">Established in Cincinnati</p>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.06] mb-6">
              Traditional Shotokan Karate for children, teens, and adults
            </h1>

            <p className="text-lg text-ink-soft leading-relaxed mb-9 max-w-lg">
              Doshinkai Dojo teaches classical Shotokan under certified SKIF-USA instruction. Youth classes begin at age
              five, and adults train at every level. Your first class is free.
            </p>

            <div className="flex flex-wrap gap-3 mb-9">
              <Link
                href="/join/class-registration"
                className="inline-flex items-center gap-2.5 bg-dojo text-white font-semibold px-7 py-4 rounded-md hover:bg-dojo-deep transition-colors duration-200"
              >
                Register for a free class
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2.5 border border-line text-ink font-semibold px-7 py-4 rounded-md hover:border-dojo hover:text-dojo transition-colors duration-200"
              >
                View the schedule
              </Link>
            </div>

            <p className="text-sm text-ink-faint">
              6620 Montgomery Road, Suite 3, Cincinnati &nbsp;·&nbsp; Se Habla Español
            </p>
          </div>
        </div>
      </section>

      {/* ── CREDENTIAL BAR ───────────────────────────────────── */}
      <section className="bg-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {credentials.map((item, i) => (
              <div
                key={item.label}
                className={`py-8 lg:py-10 px-2 lg:px-8 ${
                  i > 0 ? 'lg:border-l border-steel-line' : ''
                } ${i % 2 === 1 ? 'border-l border-steel-line lg:border-l' : ''} ${
                  i < 2 ? 'border-b border-steel-line lg:border-b-0' : ''
                }`}
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-7">
              <p className="label text-ink-faint mb-6">Programs</p>
              <h2 className="font-display font-extrabold text-3xl lg:text-[2.75rem] leading-[1.1]">
                Four classes, divided by age and rank
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-14">
              <p className="text-ink-soft leading-relaxed">
                Youth classes are divided by age so that every student receives appropriate attention. All Levels and
                Advanced sessions are open to students aged twelve and over.
              </p>
            </div>
          </div>

          <div className="border-t border-line">
            {programs.map((program) => (
              <article
                key={program.n + program.name}
                className="rise grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 border-b border-line"
              >
                <div className="lg:col-span-1">
                  <span className="font-display font-bold text-sm text-dojo tnum">{program.n}</span>
                </div>

                <div className="lg:col-span-3">
                  <h3 className="font-display font-extrabold text-2xl leading-tight">{program.age}</h3>
                  <p className="text-sm font-semibold text-dojo mt-1">{program.name}</p>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-ink-soft leading-relaxed">{program.blurb}</p>
                </div>

                <div className="lg:col-span-3 lg:text-right">
                  <p className="font-semibold text-ink">{program.length}</p>
                  <p className="text-sm text-ink-faint mt-1 tnum">{program.when}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="text-sm text-ink-faint mt-8 max-w-3xl leading-relaxed">
            Students aged twelve and over may attend the Wednesday Youth class, and students eleven and under may attend
            All Levels sessions — both subject to instructor permission and schedule availability.
          </p>
        </div>
      </section>

      {/* ── TIMETABLE ────────────────────────────────────────── */}
      <section className="bg-bone border-y border-line py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <p className="label text-ink-faint mb-6">Weekly timetable</p>
              <h2 className="font-display font-extrabold text-3xl lg:text-[2.75rem] leading-[1.1]">
                Training four days a week
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

          <div className="bg-white border border-line overflow-x-auto">
            <table className="w-full min-w-[34rem] text-left border-collapse">
              <caption className="sr-only">Weekly class schedule at Doshinkai Dojo</caption>
              <thead>
                <tr className="border-b border-line">
                  {['Day', 'Time', 'Class', 'Format'].map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="px-5 lg:px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timetable.map((day, di) =>
                  day.classes.map((cls, ci) => (
                    <tr
                      key={day.day + cls.time}
                      className={
                        ci === day.classes.length - 1 && di < timetable.length - 1 ? 'border-b border-line' : undefined
                      }
                    >
                      {ci === 0 && (
                        <th
                          scope="row"
                          rowSpan={day.classes.length}
                          className="px-5 lg:px-7 py-5 align-top font-display font-extrabold text-lg text-ink whitespace-nowrap border-r border-line-soft"
                        >
                          {day.day}
                        </th>
                      )}
                      <td className="px-5 lg:px-7 py-5 font-semibold text-ink whitespace-nowrap tnum">{cls.time}</td>
                      <td className="px-5 lg:px-7 py-5 text-ink-soft">{cls.name}</td>
                      <td className="px-5 lg:px-7 py-5">
                        <span
                          className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${
                            cls.format === 'Zoom' ? 'text-ink-faint' : 'text-dojo'
                          }`}
                        >
                          {cls.format}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── WHAT TRAINING BUILDS ─────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="relative aspect-4/5 lg:sticky lg:top-28">
                <Image
                  src="/introduction.webp"
                  alt="A Doshinkai Dojo instructor guiding students through technique"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="label text-ink-faint mb-6">What training builds</p>
              <h2 className="font-display font-extrabold text-3xl lg:text-[2.75rem] leading-[1.1] mb-10">
                Karate develops the whole student
              </h2>

              <dl className="border-t border-line">
                {outcomes.map((item) => (
                  <div key={item.title} className="rise grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 py-6 border-b border-line">
                    <dt className="font-display font-bold text-lg">{item.title}</dt>
                    <dd className="sm:col-span-2 text-ink-soft leading-relaxed">{item.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY — solid band ──────────────────────────── */}
      <section className="bg-steel text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
            <div className="lg:col-span-5">
              <p className="label text-white/50 mb-6">Our name</p>
              <span aria-hidden="true" className="font-jp block text-5xl lg:text-6xl text-white/25 mb-7 select-none">
                道心会
              </span>
              <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1]">
                Doshinkai means &lsquo;The Way of Body, Mind, and Spirit&rsquo;
              </h2>
            </div>

            <div className="lg:col-span-7 lg:pt-16">
              <p className="text-white/70 leading-relaxed mb-6">
                The name was bestowed upon our director by the founder of our organization, Hirokazu Kanazawa, Soke. The
                name of our dojo exemplifies the philosophy and teachings of SKIF. The word &lsquo;DOJO&rsquo; means
                &lsquo;the place where the Way is taught and learned&rsquo;.
              </p>
              <p className="text-white/70 leading-relaxed">
                Doshinkai Dojo is affiliated with the Shotokan Karate-Do International Federation-United States of
                America (SKIF-USA) and the Shotokan Karate-Do International Federation based in Japan — one of the
                world&rsquo;s largest traditional karate organizations, with over two million members across more than
                130 countries.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-steel-line">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.subject}
                className={`py-10 md:px-10 md:first:pl-0 md:last:pr-0 border-b md:border-b-0 border-steel-line last:border-b-0 ${
                  i > 0 ? 'md:border-l md:border-steel-line' : ''
                }`}
              >
                <span aria-hidden="true" className="font-jp block text-2xl text-dojo mb-5 select-none">
                  {pillar.numeral}
                </span>
                <h3 className="font-display font-extrabold text-2xl mb-3">{pillar.subject}</h3>
                <p className="text-white/65 leading-relaxed">{pillar.body}</p>
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
              <div className="relative aspect-4/5 max-w-md">
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
              <p className="text-lg text-ink-soft leading-relaxed mb-9">
                Over thirty-five years of traditional Shotokan Karate experience, 6th Dan SKIF Black Belt, and Secretary
                of SKIF-USA. Sensei Fung has spent thirteen years shaping the Cincinnati karate community and serves as
                an international technical advisor.
              </p>

              <ul className="border-t border-line mb-9">
                {instructorCredits.map((credit) => (
                  <li key={credit} className="flex items-baseline gap-4 py-4 border-b border-line">
                    <span aria-hidden="true" className="w-1.5 h-1.5 bg-dojo shrink-0" />
                    <span className="font-medium">{credit}</span>
                  </li>
                ))}
              </ul>

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

      {/* ── WHAT WE PROMISE ──────────────────────────────────── */}
      <section className="bg-bone border-y border-line py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="label text-ink-faint mb-6">For families</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-[2.75rem] leading-[1.1] mb-5">
              What every family can expect
            </h2>
            <p className="text-ink-soft leading-relaxed">
              Choosing a dojo for your child takes trust. These are the commitments we make to every student who trains
              with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {promises.map((promise) => (
              <div key={promise.n} className="rise flex gap-6 py-7 border-t border-line">
                <span className="font-display font-bold text-sm text-dojo tnum pt-1 shrink-0">{promise.n}</span>
                <div>
                  <h3 className="font-display font-extrabold text-xl mb-2.5">{promise.title}</h3>
                  <p className="text-ink-soft leading-relaxed">{promise.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY ────────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-baseline">
            <div className="lg:col-span-4">
              <p className="label text-ink-faint mb-6">Community</p>
              <h2 className="font-display font-extrabold text-2xl lg:text-3xl">We proudly support</h2>
            </div>
            <div className="lg:col-span-8">
              <a
                href="https://aikidocincy.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-col border-b border-line pb-4"
              >
                <span className="font-display font-extrabold text-2xl lg:text-3xl group-hover:text-dojo transition-colors">
                  Aikido of Cincinnati
                </span>
                <span className="text-sm font-semibold text-dojo mt-2">aikidocincy.org ↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ─────────────────────────────────────── */}
      <section className="bg-steel text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-display font-extrabold text-3xl lg:text-[2.75rem] leading-[1.1] mb-5">
                Your first class is free
              </h2>
              <p className="text-white/70 leading-relaxed max-w-xl">
                Bring comfortable clothing; we provide everything else. Students of all ages and experience levels are
                welcome to train with us.
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
                className="inline-flex items-center gap-2.5 border border-white/25 text-white font-semibold px-7 py-4 rounded-md hover:border-white transition-colors duration-200 tnum"
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
