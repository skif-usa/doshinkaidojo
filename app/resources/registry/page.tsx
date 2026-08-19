import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = pageMetadata({
  title: 'Dan & Kyu Registry',
  description: 'Official registry of Dan (Black Belt) and Kyu (Color Belt) ranked members at Doshinkai Dojo.',
  path: '/resources/registry',
});

const danRanks = [
  { name: 'Fung, Rubén', rank: 'Rokudan', desc: '6th Degree Black Belt' },
  { name: 'Kikuchi Lavalette, Yukiko', rank: 'Yondan', desc: '4th Degree Black Belt' },
  { name: 'Hayatghaibi, Shireen', rank: 'Sandan', desc: '3rd Degree Black Belt' },
  { name: 'Beleño, Jorge', rank: 'Shodan', desc: '1st Degree Black Belt' },
  { name: 'Guzman, Juan', rank: 'Shodan', desc: '1st Degree Black Belt' },
  { name: 'Kolachina, Ravi', rank: 'Shodan', desc: '1st Degree Black Belt' },
  { name: 'Kolachina, Lasya', rank: 'Shodan', desc: '1st Degree Black Belt' },
  { name: 'Kolachina, Lekhya', rank: 'Shodan', desc: '1st Degree Black Belt' },
  { name: 'Ruiz, Ernesto', rank: 'Shodan', desc: '1st Degree Black Belt' },
];

const kyuRanks = [
  { name: 'Akiyama, Shigeo', rank: '1 Kyu', desc: 'Brown Belt' },
  { name: 'Pack, Arthur', rank: '3 Kyu', desc: 'Brown Belt' },
  { name: 'Cronin, Donald', rank: '4 Kyu', desc: 'Purple Belt' },
];

export default function Registry() {
  return (
    <div className="bg-white text-ink">
      <PageHeader
        label="Rankings"
        title="Official registry"
        intro="The official Dan (Black Belt) and Kyu (Color Belt) registry of Doshinkai Dojo practitioners."
        crumbs={[{ label: 'Global Network', href: '/resources' }]}
        path="/resources/registry"
      />

      {/* ── DAN RANKS ────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-10">
            <p className="label text-ink-faint mb-6">Yudansha</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1] mb-3">Dan registry</h2>
            <p className="text-ink-soft">Black belt ranks recognized by SKIF.</p>
          </div>

          <div className="border border-line overflow-x-auto">
            <table className="w-full min-w-[30rem] text-left border-collapse">
              <caption className="sr-only">Dan (black belt) ranked members of Doshinkai Dojo</caption>
              <thead>
                <tr className="border-b border-line bg-bone">
                  {['Name', 'Rank', 'Grade'].map((h) => (
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
                {danRanks.map((member, i) => (
                  <tr key={member.name} className={i < danRanks.length - 1 ? 'border-b border-line-soft' : undefined}>
                    <th scope="row" className="px-5 lg:px-7 py-4 font-display font-bold text-lg text-left">
                      {member.name}
                    </th>
                    <td className="px-5 lg:px-7 py-4">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-dojo">
                        {member.rank}
                      </span>
                    </td>
                    <td className="px-5 lg:px-7 py-4 text-ink-soft">{member.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── KYU RANKS ────────────────────────────────────────── */}
      <section className="bg-bone border-y border-line py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-10">
            <p className="label text-ink-faint mb-6">Mudansha</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1] mb-3">Kyu registry</h2>
            <p className="text-ink-soft">Dedicated students advancing through the color belt ranks.</p>
          </div>

          <div className="bg-white border border-line overflow-x-auto">
            <table className="w-full min-w-[30rem] text-left border-collapse">
              <caption className="sr-only">Kyu (color belt) ranked members of Doshinkai Dojo</caption>
              <thead>
                <tr className="border-b border-line">
                  {['Name', 'Rank', 'Belt'].map((h) => (
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
                {kyuRanks.map((member, i) => (
                  <tr key={member.name} className={i < kyuRanks.length - 1 ? 'border-b border-line-soft' : undefined}>
                    <th scope="row" className="px-5 lg:px-7 py-4 font-display font-bold text-lg text-left">
                      {member.name}
                    </th>
                    <td className="px-5 lg:px-7 py-4">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">
                        {member.rank}
                      </span>
                    </td>
                    <td className="px-5 lg:px-7 py-4 text-ink-soft">{member.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── BACK ─────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2.5 py-2.5 -my-2.5 font-semibold text-dojo hover:gap-3 transition-all duration-200"
          >
            <span aria-hidden="true">←</span>
            Back to Global Network
          </Link>
        </div>
      </section>
    </div>
  );
}
