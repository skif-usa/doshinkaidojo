import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = pageMetadata({
  title: 'Meet Sensei Rubén Fung',
  description: 'Sensei Rubén Fung, 6th Dan SKIF Black Belt and Secretary of SKIF-USA, brings over 35 years of traditional Shotokan Karate experience to Doshinkai Dojo.',
  path: '/about/instructor',
});

const stats = [
  { value: '6th Dan', label: 'SKIF Black Belt' },
  { value: '35+', label: 'Years of experience' },
  { value: '2018', label: 'Secretary, SKIF USA' },
];

const highlights = [
  {
    title: '13 Years of Shaping the Community',
    desc: 'Served as the Senior Instructor and General Coordinator for The Shotokan Karate-Do Center at the Trotter Family YMCA in Houston, Texas.',
  },
  {
    title: 'Versatile Instruction',
    desc: 'Effectively instructed individuals of all ages, from grade school to senior practitioners, and across all skill levels from beginner to advanced.',
  },
  {
    title: 'Champion Developer',
    desc: 'Provided elite guidance that has propelled numerous young athletes to success in both national and international tournaments.',
  },
  {
    title: 'International Technical Advisor',
    desc: 'Served as the Karate Technical Advisor for dojos in Texas, New York, and Panama, contributing his expertise to enhance training methodologies.',
  },
  {
    title: 'Global Program Developer',
    desc: 'Developed and implemented diverse karate programs internationally, contributing significantly to the global growth of SKIF.',
  },
  {
    title: 'Pivotal Founder in Panama',
    desc: 'Collaborated with Arnoldo R Cohen to introduce and co-found SKIF in Panama at the University of Panama Karate Club in 1999.',
  },
  {
    title: 'Dynamic Camp Host',
    desc: 'Organized and hosted numerous karate training camps, fostering a dynamic learning environment for aspiring karatekas.',
  },
  {
    title: 'Continuous Refinement',
    desc: 'Maintains active participation in national and international karate seminars and tournaments, underscoring his commitment to continuous learning.',
  },
];

export default function InstructorProfile() {
  return (
    <div className="bg-white text-ink">
      <PageHeader label="Head instructor" title="Sensei Rubén Fung" />

      {/* ── PROFILE ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="relative aspect-4/5">
                <Image
                  src="/ruben_profil.webp"
                  alt="Sensei Rubén Fung, head instructor and founder of Doshinkai Dojo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="font-display font-extrabold text-2xl lg:text-3xl leading-snug mb-7">
                Bringing over <span className="text-dojo">35 years</span> of extensive experience in traditional karate
                training and teaching.
              </p>
              <p className="text-lg text-ink-soft leading-relaxed">
                As the Senior Director and founder of Doshinkai Dojo, Rubén Fung&rsquo;s expertise is marked by a
                distinguished career. Holding a 6th degree black belt (6th Dan) in SKIF (Shotokan Karate-Do
                International Federation), he is widely recognized as a Certified Instructor of the highest caliber.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <section className="bg-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-1 md:grid-cols-3">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-8 lg:py-10 md:px-10 md:first:pl-0 md:last:pr-0 border-b md:border-b-0 border-steel-line last:border-b-0 ${
                  i > 0 ? 'md:border-l md:border-steel-line' : ''
                }`}
              >
                <dt className="font-display font-extrabold text-4xl text-white leading-none">{stat.value}</dt>
                <dd className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55 mt-2.5">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CAREER HIGHLIGHTS ────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <p className="label text-ink-faint mb-6">Career highlights</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-[2.75rem] leading-[1.1] mb-4">
              A distinguished career
            </h2>
            <p className="text-ink-soft leading-relaxed">
              A lifetime dedicated to the advancement of Shotokan Karate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
            {highlights.map((item, i) => (
              <div key={item.title} className="rise flex gap-6 py-7 border-t border-line">
                <span className="font-display font-bold text-sm text-dojo tnum pt-1 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display font-extrabold text-lg leading-tight mb-2.5">{item.title}</h3>
                  <p className="text-ink-soft leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-bone border-t border-line py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1] mb-4">
                Train with Sensei Fung
              </h2>
              <p className="text-ink-soft leading-relaxed max-w-xl">
                Join Doshinkai Dojo to experience elite instruction grounded in decades of international experience and
                traditional discipline.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/join/class-registration"
                className="inline-flex items-center gap-2.5 bg-dojo text-white font-semibold px-7 py-4 rounded-md hover:bg-dojo-deep transition-colors duration-200"
              >
                Register for classes
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/join/private-class"
                className="inline-flex items-center gap-2.5 border border-line bg-white text-ink font-semibold px-7 py-4 rounded-md hover:border-dojo hover:text-dojo transition-colors duration-200"
              >
                Book private class
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
