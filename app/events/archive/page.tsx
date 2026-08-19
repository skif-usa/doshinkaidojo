import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = pageMetadata({
  title: 'Event Archive',
  description: 'A gallery of past seminars, gasshukus, and clinics hosted by Doshinkai Dojo, including visits from SKIF instructors from Japan and Panama.',
  path: '/events/archive',
});

const events = [
  { title: '2026 SKIF Cincinnati Gasshuku', date: 'June 5, 6 & 7, 2026', image: '/2026_Kanazawa_Cincinnati.webp', year: '2026' },
  { title: 'Karate Seminar with Ruben Fung', date: 'February 20 & 21, 2026', image: '/seminar_feb_20_21_2026.webp', year: '2026' },
  { title: 'Seminar with Hiyori Kanazawa', date: 'September 20 & 21, 2025', image: '/SKIF_Cincinnati_September_2025.webp', year: '2025' },
  { title: '2nd Annual Japanese Martial Arts Open House', date: 'September 13, 2025', image: '/open_house_2025.webp', year: '2025' },
  { title: 'SKIF Cincinnati Seminar with Manabu Murakami', date: 'August 24 & 25, 2024', image: '/Murakami_Seminar_08_2024_Cincinnati.webp', year: '2024' },
  { title: 'SKIF Cincinnati Seminar with Fumitoshi Kanazawa', date: 'December 16 & 17, 2023', image: '/Seminar_Dezember_2023.webp', year: '2023' },
  { title: 'Introduction to Shotokan Karate', date: 'October 25th - December 13th, 2023', image: '/introduction.webp', year: '2023' },
  { title: "Women's Self-Defense", date: 'Mar 2-3, 9-10, 16-17, Apr 6-7, 13-14, 20-21, 2023', image: '/womens_self_defense_clinic.webp', year: '2023' },
];

export default function EventArchive() {
  return (
    <div className="bg-white text-ink">
      <PageHeader
        label="Events"
        title="Event archive"
        intro="A historical gallery of our past and upcoming seminars, clinics, and special events hosted by Doshinkai Dojo."
        crumbs={[{ label: 'Upcoming Events', href: '/events' }]}
      />

      {/* ── GALLERY ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {events.map((event, i) => (
              <article key={event.title} className="rise group flex flex-col">
                <div className="relative aspect-3/4 bg-bone border border-line overflow-hidden group-hover:border-dojo transition-colors duration-300">
                  <Image
                    src={event.image}
                    alt={`Poster for ${event.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    priority={i < 3}
                    className="object-contain p-3"
                  />
                </div>

                <div className="flex items-start justify-between gap-4 mt-5">
                  <h2 className="font-display font-extrabold text-lg leading-snug group-hover:text-dojo transition-colors">
                    {event.title}
                  </h2>
                  <span className="shrink-0 text-[11px] font-semibold tracking-[0.14em] text-ink-faint border border-line rounded px-2 py-1 tnum">
                    {event.year}
                  </span>
                </div>

                <p className="text-sm text-ink-soft mt-2.5">{event.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-steel text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1] mb-4">
                Join us at the next one
              </h2>
              <p className="text-white/70 leading-relaxed max-w-lg">
                We regularly host visiting SKIF instructors from Japan and Panama. See what is coming up next.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/events"
                className="inline-flex items-center gap-2.5 bg-dojo text-white font-semibold px-7 py-4 rounded-md hover:bg-dojo-deep transition-colors duration-200"
              >
                Upcoming events
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/join/class-registration"
                className="inline-flex items-center gap-2.5 border border-white/25 text-white font-semibold px-7 py-4 rounded-md hover:border-white transition-colors duration-200"
              >
                Register for classes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
