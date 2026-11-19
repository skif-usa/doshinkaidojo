'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

type ClassInfo = {
  tab: string;
  title: string;
  who: string;
  image: string;
  alt: string;
  points: string[];
};

const classes: ClassInfo[] = [
  {
    tab: 'Ages 5–7',
    title: 'Youth Karate',
    who: 'For our youngest students',
    image: '/technique-kids.webp',
    alt: 'Young students practicing Shotokan stances and punches',
    points: ['45-minute classes', 'Wednesdays at 5:15 PM', 'Grouped by age so every child gets attention'],
  },
  {
    tab: 'Ages 8–11',
    title: 'Youth Karate',
    who: 'For growing students',
    image: '/technique-family-kick.webp',
    alt: 'Students of different ages practicing blocks, stances and front kicks',
    points: ['60-minute classes', 'Wednesdays at 5:15 PM', 'Safety-first instruction in a controlled environment'],
  },
  {
    tab: 'All levels',
    title: 'Ages 12 and up',
    who: 'Teens and adults, no experience needed',
    image: '/technique-family.webp',
    alt: 'Teens and adults training together in kicks, blocks and punches',
    points: [
      'Sunday & Saturday at 1:30 PM',
      'Monday & Wednesday at 7:30 PM',
      'In person and on Zoom',
    ],
  },
  {
    tab: 'Advanced',
    title: 'Intermediate & Advanced',
    who: 'Ages 12 and up',
    image: '/technique-stance.webp',
    alt: 'A black belt in a deep front stance with a straight punch',
    points: ['60-minute classes', 'Sunday & Saturday at 2:30 PM', 'Taught in person at the dojo'],
  },
];

/** Four tabs, one panel: pick a class and its details appear beside a photo. */
export default function ClassTabs() {
  const [active, setActive] = useState(0);
  const current = classes[active];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Classes"
        className="flex flex-wrap justify-center gap-2 mb-8"
      >
        {classes.map((c, i) => (
          <button
            key={c.tab}
            role="tab"
            id={`class-tab-${i}`}
            aria-selected={active === i}
            aria-controls="class-panel"
            onClick={() => setActive(i)}
            className={`px-5 py-2.5 rounded-full text-[15px] font-medium border transition-colors duration-200 cursor-pointer ${
              active === i
                ? 'bg-ink text-white border-ink'
                : 'bg-white text-ink-soft border-line hover:border-ink hover:text-ink'
            }`}
          >
            {c.tab}
          </button>
        ))}
      </div>

      <div
        id="class-panel"
        role="tabpanel"
        aria-labelledby={`class-tab-${active}`}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 rounded-[2rem] bg-bone overflow-hidden"
      >
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[26rem]">
          {classes.map((c, i) => (
            <Image
              key={c.tab}
              src={c.image}
              alt={i === active ? c.alt : ''}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={`object-cover transition-opacity duration-500 ${i === active ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>

        <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
          <p className="text-sm font-medium text-ink-faint mb-3">{current.who}</p>
          <h3 className="font-display font-semibold text-3xl lg:text-4xl mb-7">{current.title}</h3>
          <ul className="space-y-4 mb-9">
            {current.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-ink-soft leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-1 w-5 h-5 shrink-0 rounded-full bg-ink text-white flex items-center justify-center text-[11px]"
                >
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Link href="/join/class-registration" className="btn-dark">
              Try a free class
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/schedule" className="btn-line text-ink">
              Full schedule
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
