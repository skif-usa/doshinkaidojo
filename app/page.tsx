import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Doshinkai Dojo | Traditional Shotokan Karate in Cincinnati',
  description: 'Shotokan Karate classes for kids, teens, and adults in Cincinnati, OH. Youth classes from age 5, a free trial class, and certified SKIF-USA instruction.',
  path: '/',
  absoluteTitle: true,
});

/* ── Real class groups, from the dojo schedule ───────────────── */
const classGroups = [
  {
    age: 'Ages 5–7',
    name: 'Youth Karate',
    length: '45-minute classes',
    when: 'Wednesdays, 5:15 PM',
    band: 'bg-belt-yellow',
    blurb: 'A shorter first class built for younger beginners — games, basics, and plenty of encouragement.',
  },
  {
    age: 'Ages 8–11',
    name: 'Youth Karate',
    length: '60-minute classes',
    when: 'Wednesdays, 5:15 PM',
    band: 'bg-belt-orange',
    blurb: 'A full-length youth class focused on technique, focus, and steady progress through the belt ranks.',
  },
  {
    age: 'Ages 12 & up',
    name: 'All Levels',
    length: 'In-person & on Zoom',
    when: 'Sun & Sat 1:30 PM · Mon & Wed 7:30 PM',
    band: 'bg-belt-green',
    blurb: 'Teens and adults train together. Brand-new students are welcome — no experience needed.',
  },
  {
    age: 'Ages 12 & up',
    name: 'Intermediate & Advanced',
    length: 'In-person',
    when: 'Sun & Sat, 2:30 PM',
    band: 'bg-belt-brown',
    blurb: 'For students ready to sharpen kata, kumite, and exam preparation at a faster pace.',
  },
];

/* ── Real schedule, from the schedule page ───────────────────── */
const week = [
  {
    day: 'Sunday',
    tint: 'bg-dojo-soft text-dojo',
    classes: [
      { time: '1:30 – 2:30 PM', name: 'All Levels', type: 'In-Person' },
      { time: '2:30 – 3:30 PM', name: 'Intermediate / Advance', type: 'In-Person' },
    ],
  },
  {
    day: 'Monday',
    tint: 'bg-ocean-soft text-ocean',
    classes: [{ time: '7:30 – 8:30 PM', name: 'All Levels', type: 'Zoom' }],
  },
  {
    day: 'Wednesday',
    tint: 'bg-sun-soft text-belt-brown',
    classes: [
      { time: '5:15 – 6:15 PM', name: 'Youth · Ages 5–11', type: 'In-Person' },
      { time: '7:30 – 8:30 PM', name: 'All Levels', type: 'Zoom' },
    ],
  },
  {
    day: 'Saturday',
    tint: 'bg-leaf-soft text-leaf',
    classes: [
      { time: '1:30 – 2:30 PM', name: 'All Levels', type: 'In-Person' },
      { time: '2:30 – 3:30 PM', name: 'Intermediate / Advance', type: 'In-Person' },
    ],
  },
];

const benefits = [
  {
    title: 'Physical Fitness',
    body: 'Punching, kicking, and blocking build strength, flexibility, agility, and cardiovascular health.',
    tint: 'bg-dojo-soft text-dojo',
    icon: 'M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11',
  },
  {
    title: 'Self-Defense Skills',
    body: 'Students learn to defend themselves against real physical threats using strikes and blocks.',
    tint: 'bg-ocean-soft text-ocean',
    icon: 'M12 3l7 3v6c0 4-3 7.5-7 9-4-1.5-7-5-7-9V6l7-3z',
  },
  {
    title: 'Discipline & Focus',
    body: 'Following the rules and etiquette of the dojo develops self-control and concentration.',
    tint: 'bg-leaf-soft text-leaf',
    icon: 'M12 4a8 8 0 100 16 8 8 0 000-16zm0 4v4l3 2',
  },
  {
    title: 'Confidence Building',
    body: 'Confidence earned on the mat carries into school, work, and friendships.',
    tint: 'bg-sun-soft text-belt-brown',
    icon: 'M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.4l6.1-.8L12 3z',
  },
  {
    title: 'Character Development',
    body: 'Respect, humility, perseverance, and integrity are practised in every class.',
    tint: 'bg-mist text-belt-purple',
    icon: 'M12 21s-7-4.4-7-9.6A4.4 4.4 0 0112 8a4.4 4.4 0 017 3.4C19 16.6 12 21 12 21z',
  },
  {
    title: 'Community & Friendship',
    body: 'Training together builds strong bonds in a supportive, welcoming environment.',
    tint: 'bg-ocean-soft text-ocean',
    icon: 'M9 11a3 3 0 100-6 3 3 0 000 6zm8 0a3 3 0 100-6 3 3 0 000 6zM3 20c0-2.8 2.7-5 6-5s6 2.2 6 5m2-5c2.8.4 5 2.4 5 5',
  },
];

const promises = [
  {
    title: 'Safety First',
    body: 'Your safety is our top priority. Our experienced instructors provide comprehensive safety instruction and a controlled, secure environment.',
  },
  {
    title: 'Expert Instruction',
    body: 'Learn from certified instructors who bring years of experience and expertise to each class, guiding proper technique every step of the way.',
  },
  {
    title: 'Inclusive Atmosphere',
    body: 'Beginner or experienced, our classes accommodate all ages, fitness levels, and backgrounds. Everyone is welcome and encouraged to thrive.',
  },
  {
    title: 'Free Trial Class',
    body: 'Try Shotokan Karate for yourself before committing. Sign up for a free trial class and take the first step.',
  },
];

const pillars = [
  { numeral: '一', subject: 'Body', body: 'Cultivated through stamina, coordination, strength, and agility.', tint: 'bg-sun-soft', dot: 'bg-belt-yellow' },
  { numeral: '二', subject: 'Mind', body: 'Sharpened through practices fostering concentration and memory.', tint: 'bg-leaf-soft', dot: 'bg-leaf' },
  { numeral: '三', subject: 'Spirit', body: 'Nurtured through perseverance, humility, and self-confidence.', tint: 'bg-ocean-soft', dot: 'bg-ocean' },
];

const facts = [
  { value: 'Age 5+', label: 'Youth classes', tint: 'bg-sun-soft', accent: 'text-belt-brown' },
  { value: '6th Dan', label: 'Head instructor', tint: 'bg-dojo-soft', accent: 'text-dojo' },
  { value: '130+', label: 'SKIF countries', tint: 'bg-ocean-soft', accent: 'text-ocean' },
  { value: 'Free', label: 'First class', tint: 'bg-leaf-soft', accent: 'text-leaf' },
];

function Icon({ path, className = 'w-6 h-6' }: { path: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={path} />
    </svg>
  );
}

function Check({ tone = 'text-leaf bg-leaf-soft' }: { tone?: string }) {
  return (
    <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${tone}`}>
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

/** Curved section transition. Set the text colour to the section being entered. */
function Wave({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`w-full leading-none ${className}`}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-[38px] lg:h-[64px]">
        <path
          d="M0 34C210 82 430 4 720 26c290 22 510 54 720 18v36H0V34z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

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
    <div className="bg-white text-navy overflow-x-clip">
      {/* INJECT LOCAL SEO SCHEMA */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 lg:pt-44 pb-10 lg:pb-16">
        <span aria-hidden="true" className="absolute top-10 -right-28 w-[30rem] h-[30rem] rounded-full bg-sun-soft" />
        <span aria-hidden="true" className="absolute top-72 -left-32 w-[26rem] h-[26rem] rounded-full bg-ocean-soft" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="chip bg-dojo-soft text-dojo mb-6">
                <span aria-hidden="true" className="w-2 h-2 rounded-full bg-dojo" />
                Now enrolling · Ages 5 &amp; up
              </span>

              <h1 className="font-display font-extrabold text-[2.75rem] sm:text-6xl lg:text-[4.25rem] leading-[1.02] mb-6">
                Karate classes for{' '}
                <span className="swash text-dojo">
                  kids
                  <svg viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true" className="text-sun">
                    <path d="M2 8c22-6 62-7 96-3" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </span>
                , teens &amp; adults in Cincinnati
              </h1>

              <p className="text-lg text-navy-soft leading-relaxed mb-8 max-w-xl">
                Traditional Shotokan Karate that builds confidence, focus, and respect — taught by certified SKIF-USA
                instructors in a safe, welcoming dojo. Your first class is free.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/join/class-registration"
                  className="inline-flex items-center gap-2.5 bg-dojo text-white font-extrabold text-base px-7 py-4 rounded-full shadow-soft hover:bg-dojo-deep hover:-translate-y-0.5 transition-all duration-200"
                >
                  Book a Free Trial Class
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/schedule"
                  className="inline-flex items-center gap-2.5 bg-ocean-soft text-ocean font-extrabold text-base px-7 py-4 rounded-full hover:bg-mist-deep transition-colors duration-200"
                >
                  See Class Times
                </Link>
              </div>

              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {['SKIF-USA certified', 'All levels welcome', 'Se Habla Español'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-bold text-navy-soft">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Photo with playful floating badges */}
            <div className="relative">
              <div className="relative aspect-4/5 sm:aspect-square lg:aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-lift">
                <Image
                  src="/hero_image.webp"
                  alt="Students training in Shotokan Karate at Doshinkai Dojo in Cincinnati"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-5 -left-2 sm:left-5 bg-white rounded-3xl shadow-float px-5 py-4 flex items-center gap-3">
                <span aria-hidden="true" className="w-11 h-11 rounded-2xl bg-leaf-soft text-leaf flex items-center justify-center">
                  <Icon path="M9 11a3 3 0 100-6 3 3 0 000 6zm8 0a3 3 0 100-6 3 3 0 000 6zM3 20c0-2.8 2.7-5 6-5s6 2.2 6 5m2-5c2.8.4 5 2.4 5 5" className="w-5 h-5" />
                </span>
                <span>
                  <span className="block font-display font-extrabold text-lg leading-none">All ages</span>
                  <span className="block text-xs font-bold text-navy-faint mt-1">Kids, teens &amp; adults</span>
                </span>
              </div>

              <div
                className="absolute -top-4 -right-1 sm:right-4 bg-sun text-navy rounded-3xl shadow-float px-5 py-3.5 rotate-6"
                aria-hidden="true"
              >
                <span className="block font-display font-extrabold text-base leading-none">1st class free!</span>
              </div>

              <span
                aria-hidden="true"
                className="absolute top-1/2 -right-3 sm:right-1 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-float flex items-center justify-center font-jp text-2xl text-dojo"
              >
                空手
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK FACTS ──────────────────────────────────────── */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
          {facts.map((fact) => (
            <div key={fact.label} className={`rise rounded-3xl p-5 lg:p-7 text-center ${fact.tint}`}>
              <p className={`font-display font-extrabold text-3xl lg:text-4xl leading-none ${fact.accent}`}>
                {fact.value}
              </p>
              <p className="text-sm font-bold text-navy-soft mt-2">{fact.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Wave className="text-mist" />

      {/* ── FIND YOUR CLASS ──────────────────────────────────── */}
      <section className="bg-mist py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="chip bg-white text-ocean mb-4">Find your class</span>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl mb-4">Which class is right for you?</h2>
            <p className="text-lg text-navy-soft leading-relaxed">
              Youth classes are divided by age so every student gets the right attention. Teens and adults train
              together in our All Levels sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {classGroups.map((group) => (
              <div
                key={group.age + group.name}
                className="rise bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <span aria-hidden="true" className={`block h-2.5 w-full ${group.band}`} />
                <div className="p-6 flex flex-col flex-grow">
                  <p className="font-display font-extrabold text-2xl leading-none mb-1.5">{group.age}</p>
                  <p className="text-sm font-extrabold text-dojo mb-4">{group.name}</p>
                  <p className="text-sm text-navy-soft leading-relaxed mb-5 flex-grow">{group.blurb}</p>
                  <dl className="space-y-2 text-sm border-t border-line-soft pt-4">
                    <div className="flex gap-2">
                      <dt className="font-bold text-navy-faint shrink-0">Length</dt>
                      <dd className="font-bold text-navy text-right ml-auto">{group.length}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-bold text-navy-faint shrink-0">When</dt>
                      <dd className="font-bold text-navy text-right ml-auto">{group.when}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-navy-faint text-center mt-8 max-w-2xl mx-auto leading-relaxed">
            Students aged 12 and over may join the Wednesday Youth class, and students 11 and under may join All Levels
            sessions — both subject to instructor permission and schedule availability.
          </p>
        </div>
      </section>

      <div className="bg-mist text-white">
        <Wave />
      </div>

      {/* ── WEEKLY SCHEDULE ──────────────────────────────────── */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <span className="chip bg-ocean-soft text-ocean mb-4">Weekly schedule</span>
              <h2 className="font-display font-extrabold text-4xl lg:text-5xl">Train four days a week</h2>
            </div>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 py-2.5 -my-2.5 font-extrabold text-dojo hover:gap-3 transition-all duration-200"
            >
              Full schedule &amp; details
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {week.map((day) => (
              <div key={day.day} className="rise rounded-3xl border border-line overflow-hidden">
                <p className={`font-display font-extrabold text-xl px-6 py-4 ${day.tint}`}>{day.day}</p>
                <ul className="p-4 space-y-3">
                  {day.classes.map((cls) => (
                    <li key={cls.time} className="rounded-2xl bg-mist p-4">
                      <p className="font-extrabold text-navy">{cls.time}</p>
                      <p className="text-sm font-bold text-navy-soft mt-1">{cls.name}</p>
                      <span
                        className={`chip mt-2.5 text-[11px] ${
                          cls.type === 'Zoom' ? 'bg-white text-ocean' : 'bg-white text-leaf'
                        }`}
                      >
                        {cls.type}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Wave className="text-sand" />

      {/* ── WHAT STUDENTS LEARN ──────────────────────────────── */}
      <section className="bg-sand py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="chip bg-white text-dojo mb-4">What students gain</span>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl mb-4">More than kicks and punches</h2>
            <p className="text-lg text-navy-soft leading-relaxed">
              Karate shapes the whole student. Here is what parents notice first.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rise bg-white rounded-3xl p-6 shadow-soft">
                <span className={`inline-flex w-12 h-12 rounded-2xl items-center justify-center mb-5 ${benefit.tint}`}>
                  <Icon path={benefit.icon} />
                </span>
                <h3 className="font-display font-extrabold text-xl mb-2">{benefit.title}</h3>
                <p className="text-sm text-navy-soft leading-relaxed">{benefit.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-sand text-white">
        <Wave />
      </div>

      {/* ── PARENT PROMISES ─────────────────────────────────── */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <span className="chip bg-sun-soft text-belt-brown mb-4">For parents</span>
              <h2 className="font-display font-extrabold text-4xl lg:text-5xl mb-5 leading-[1.05]">
                A dojo you can feel good about
              </h2>
              <p className="text-lg text-navy-soft leading-relaxed mb-8">
                We know handing your child over to a new activity takes trust. Here is what we promise every family who
                walks through our door.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-ocean text-white font-extrabold px-7 py-4 rounded-full shadow-soft hover:-translate-y-0.5 transition-transform duration-200"
              >
                Ask us a question
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {promises.map((promise) => (
                <div key={promise.title} className="rise bg-mist rounded-3xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Check tone="text-ocean bg-white" />
                    <h3 className="font-display font-extrabold text-lg leading-tight">{promise.title}</h3>
                  </div>
                  <p className="text-sm text-navy-soft leading-relaxed">{promise.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MEET THE SENSEI ─────────────────────────────────── */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-mist rounded-[2.5rem] p-6 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5">
                <div className="relative aspect-4/5 max-w-sm mx-auto lg:mx-0 rounded-[2rem] overflow-hidden shadow-lift">
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
                <span className="chip bg-white text-dojo mb-4">Meet your instructor</span>
                <h2 className="font-display font-extrabold text-4xl lg:text-5xl mb-5">Sensei Rubén Fung</h2>
                <p className="text-lg text-navy-soft leading-relaxed mb-7">
                  Over 35 years of traditional Shotokan Karate experience, 6th Dan SKIF Black Belt, and Secretary of
                  SKIF-USA. Sensei Fung has spent 13 years shaping the Cincinnati karate community and serves as an
                  international technical advisor.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    '6th Dan SKIF Black Belt (Rokudan)',
                    'Secretary of SKIF-USA',
                    'International technical advisor & champion developer',
                    'Teaches youth, adult, and advanced classes',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-navy font-bold">
                      <Check tone="text-leaf bg-white" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/about/instructor"
                  className="inline-flex items-center gap-2 py-2.5 -my-2.5 font-extrabold text-dojo hover:gap-3 transition-all duration-200"
                >
                  Read the full profile
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT DOSHINKAI MEANS ────────────────────────────── */}
      <section className="pb-14 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span aria-hidden="true" className="font-jp block text-4xl text-dojo mb-5">
              道心会
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl mb-5">
              Doshinkai means &lsquo;The Way of Body, Mind, and Spirit&rsquo;
            </h2>
            <p className="text-navy-soft leading-relaxed">
              The name was bestowed upon our director by the founder of our organization, Hirokazu Kanazawa, Soke. The
              word &lsquo;DOJO&rsquo; means &lsquo;the place where the Way is taught and learned&rsquo;. We emphasize the
              holistic development of every practitioner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((pillar) => (
              <div key={pillar.subject} className={`rise rounded-3xl p-7 text-center ${pillar.tint}`}>
                <span aria-hidden="true" className="font-jp block text-3xl text-navy mb-3">
                  {pillar.numeral}
                </span>
                <span aria-hidden="true" className={`block w-10 h-2 rounded-full mx-auto mb-4 ${pillar.dot}`} />
                <h3 className="font-display font-extrabold text-2xl mb-2">{pillar.subject}</h3>
                <p className="text-sm text-navy-soft leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AFFILIATION + COMMUNITY ─────────────────────────── */}
      <section className="pb-14 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="rise bg-white rounded-3xl border border-line p-8 lg:p-10">
            <span className="chip bg-dojo-soft text-dojo mb-5">Affiliation</span>
            <h3 className="font-display font-extrabold text-2xl lg:text-3xl mb-4">Part of a global federation</h3>
            <p className="text-navy-soft leading-relaxed mb-6">
              Doshinkai Dojo is proudly affiliated with SKIF-USA and the Shotokan Karate-Do International Federation
              based in Japan — one of the world&rsquo;s largest traditional karate organizations, with over 2 million
              members across more than 130 countries.
            </p>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 py-2.5 -my-2.5 font-extrabold text-dojo hover:gap-3 transition-all duration-200"
            >
              Explore our network
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="rise bg-white rounded-3xl border border-line p-8 lg:p-10">
            <span className="chip bg-leaf-soft text-leaf mb-5">Community</span>
            <h3 className="font-display font-extrabold text-2xl lg:text-3xl mb-4">We proudly support</h3>
            <a href="https://aikidocincy.org" target="_blank" rel="noopener noreferrer" className="group inline-flex flex-col">
              <span className="font-display font-extrabold text-xl text-navy group-hover:text-dojo transition-colors">
                Aikido of Cincinnati
              </span>
              <span className="text-sm font-bold text-ocean mt-1">aikidocincy.org ↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ─────────────────────────────────────── */}
      <section className="pb-14 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-dojo px-6 py-14 lg:px-16 lg:py-20 text-center">
            <span aria-hidden="true" className="absolute -top-20 -left-16 w-72 h-72 rounded-full bg-white/10" />
            <span aria-hidden="true" className="absolute -bottom-24 -right-12 w-80 h-80 rounded-full bg-white/10" />
            <span aria-hidden="true" className="font-jp absolute top-6 right-8 text-7xl text-white/15 select-none">
              空手道
            </span>

            <div className="relative max-w-2xl mx-auto">
              <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-white mb-5 leading-[1.05]">
                Ready to try your first class?
              </h2>
              <p className="text-lg text-white/90 leading-relaxed mb-9">
                It&rsquo;s completely free. Bring comfortable clothes, and we&rsquo;ll take care of the rest. All ages
                and experience levels are welcome.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/join/class-registration"
                  className="inline-flex items-center gap-2.5 bg-white text-dojo font-extrabold text-base px-8 py-4 rounded-full shadow-soft hover:-translate-y-0.5 transition-transform duration-200"
                >
                  Book a Free Trial Class
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  href="tel:+18325130058"
                  className="inline-flex items-center gap-2.5 bg-sun text-navy font-extrabold text-base px-8 py-4 rounded-full hover:-translate-y-0.5 transition-transform duration-200"
                >
                  Call (832) 513-0058
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
