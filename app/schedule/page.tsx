import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = pageMetadata({
  title: 'Class Schedule',
  description: 'View the training schedule for Doshinkai Dojo in Cincinnati. We offer youth, adult, and advanced Shotokan Karate classes both in-person and via Zoom.',
  path: '/schedule',
});

const scheduleData = [
  {
    day: 'Sunday',
    classes: [
      { time: '1:30 PM – 2:30 PM', name: 'All Levels', type: 'In-Person' },
      { time: '2:30 PM – 3:30 PM', name: 'Intermediate / Advance', type: 'In-Person' },
    ],
  },
  {
    day: 'Monday',
    classes: [{ time: '7:30 PM – 8:30 PM', name: 'All Levels', type: 'Zoom' }],
  },
  {
    day: 'Wednesday',
    classes: [
      { time: '5:15 PM – 6:15 PM', name: 'Youth', type: 'In-Person', note: 'Age 5–11' },
      { time: '7:30 PM – 8:30 PM', name: 'All Levels', type: 'Zoom' },
    ],
  },
  {
    day: 'Saturday',
    classes: [
      { time: '1:30 PM – 2:30 PM', name: 'All Levels', type: 'In-Person' },
      { time: '2:30 PM – 3:30 PM', name: 'Intermediate / Advance', type: 'In-Person' },
    ],
  },
];

export default function Schedule() {
  return (
    <div className="bg-white text-ink">
      <PageHeader
        label="Classes"
        title="Training schedule"
        intro="Consistency is the key to mastery. Find the right class for your skill level and join us on the mat or online via Zoom."
      />

      {/* ── WHERE WE TRAIN ───────────────────────────────────── */}
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="py-10 lg:py-12 md:pr-12 flex items-start gap-5">
              <span aria-hidden="true" className="shrink-0 mt-1 text-dojo">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <div>
                <h2 className="label text-ink-faint mb-3">Physical dojo</h2>
                <p className="font-display font-bold text-lg mb-1.5">Doshinkai Dojo</p>
                <address className="not-italic text-ink-soft leading-relaxed">
                  6620 Montgomery Road, Suite 3
                  <br />
                  Cincinnati, OH 45213
                </address>
              </div>
            </div>

            <div className="py-10 lg:py-12 md:pl-12 md:border-l border-line border-t md:border-t-0 flex items-start gap-5">
              <span aria-hidden="true" className="shrink-0 mt-1 text-dojo">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <div>
                <h2 className="label text-ink-faint mb-3">Virtual training</h2>
                <p className="font-display font-bold text-lg mb-1.5">Zoom access</p>
                <p className="text-ink-soft leading-relaxed">
                  Secure links for all virtual classes are provided directly to registered students prior to class.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMETABLE ────────────────────────────────────────── */}
      <section className="bg-bone border-b border-line py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-10">
            <p className="label text-ink-faint mb-6">Weekly timetable</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1]">
              Training four days a week
            </h2>
          </div>

          <div className="bg-white border border-line overflow-x-auto">
            <table className="w-full min-w-[36rem] text-left border-collapse">
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
                {scheduleData.map((dayPlan, di) =>
                  dayPlan.classes.map((cls, ci) => (
                    <tr
                      key={dayPlan.day + cls.time}
                      className={
                        ci === dayPlan.classes.length - 1 && di < scheduleData.length - 1
                          ? 'border-b border-line'
                          : undefined
                      }
                    >
                      {ci === 0 && (
                        <th
                          scope="row"
                          rowSpan={dayPlan.classes.length}
                          className="px-5 lg:px-7 py-5 align-top font-display font-extrabold text-lg whitespace-nowrap border-r border-line-soft"
                        >
                          {dayPlan.day}
                        </th>
                      )}
                      <td className="px-5 lg:px-7 py-5 font-semibold whitespace-nowrap tnum">{cls.time}</td>
                      <td className="px-5 lg:px-7 py-5">
                        <span className="text-ink-soft">{cls.name}</span>
                        {cls.note && (
                          <span className="ml-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                            {cls.note}
                          </span>
                        )}
                      </td>
                      <td className="px-5 lg:px-7 py-5">
                        <span
                          className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${
                            cls.type === 'Zoom' ? 'text-ink-faint' : 'text-dojo'
                          }`}
                        >
                          {cls.type === 'Zoom' ? 'Virtual (Zoom)' : 'Dojo'}
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

      {/* ── ATTENDANCE GUIDELINES ────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <p className="label text-ink-faint mb-6">Important information</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1]">
              Attendance guidelines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h3 className="font-display font-extrabold text-xl pb-4 border-b border-line mb-5">Youth classes</h3>
              <p className="text-ink-soft leading-relaxed mb-5">
                Youth classes are carefully divided into two age groups to ensure appropriate attention and development:
              </p>
              <ul className="space-y-3.5">
                <li className="flex items-baseline gap-3.5">
                  <span aria-hidden="true" className="w-1.5 h-1.5 bg-dojo shrink-0" />
                  <span className="text-ink-soft">
                    <strong className="text-ink font-semibold">Ages 5 to 7:</strong> 45-minute duration.
                  </span>
                </li>
                <li className="flex items-baseline gap-3.5">
                  <span aria-hidden="true" className="w-1.5 h-1.5 bg-dojo shrink-0" />
                  <span className="text-ink-soft">
                    <strong className="text-ink font-semibold">Ages 8 to 11:</strong> 60-minute duration.
                  </span>
                </li>
              </ul>
              <p className="text-sm text-ink-faint leading-relaxed mt-6 pt-5 border-t border-line-soft">
                Participants aged 12 years and older may have the opportunity to attend the Wednesday Youth class,
                subject to instructor permission and schedule availability.
              </p>
            </div>

            <div>
              <h3 className="font-display font-extrabold text-xl pb-4 border-b border-line mb-5">
                All Levels &amp; Advanced
              </h3>
              <p className="text-ink-soft leading-relaxed mb-5">
                To maintain the pace and rigor of our main sessions, the following age requirements apply:
              </p>
              <ul className="space-y-3.5">
                <li className="flex items-baseline gap-3.5">
                  <span aria-hidden="true" className="w-1.5 h-1.5 bg-dojo shrink-0" />
                  <span className="text-ink-soft">
                    Participants of <strong className="text-ink font-semibold">All Levels</strong>, including{' '}
                    <strong className="text-ink font-semibold">Intermediate and Advanced</strong>, must be{' '}
                    <strong className="text-ink font-semibold">12 years old or older</strong>.
                  </span>
                </li>
              </ul>
              <p className="text-sm text-ink-faint leading-relaxed mt-6 pt-5 border-t border-line-soft">
                Those aged 11 and younger may have the opportunity to attend these sessions strictly subject to
                instructor permission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-steel text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1] mb-4">
                Ready to step on the mat?
              </h2>
              <p className="text-white/70 leading-relaxed max-w-lg">
                Your first class is free. Register and we will confirm your place in the session that fits you best.
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
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 border border-white/25 text-white font-semibold px-7 py-4 rounded-md hover:border-white transition-colors duration-200"
              >
                Ask a question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
