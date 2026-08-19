import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = pageMetadata({
  title: 'Global Network',
  description: 'Doshinkai Dojo is affiliated with SKIF-USA, SKIF World, and the SKIF Yudansha-Kai — explore our network of traditional martial arts organizations.',
  path: '/resources',
});

const resources = [
  {
    n: '01',
    title: 'Shotokan Karate-Do International Federation USA',
    url: 'https://skifusa.org',
    displayUrl: 'skifusa.org',
    desc: 'The official United States branch of SKIF, overseeing dojos, tournaments, and grading nationwide.',
  },
  {
    n: '02',
    title: 'Shotokan Karate-Do International Federation',
    url: 'https://skifworld.com',
    displayUrl: 'skifworld.com',
    desc: 'The global headquarters in Japan, representing over 2 million practitioners across more than 130 countries.',
  },
  {
    n: '03',
    title: 'Shotokan Karate-Do International Yudansha-Kai Limited',
    url: 'https://skifyudanshakai.com',
    displayUrl: 'skifyudanshakai.com',
    desc: 'The official international association for SKIF Black Belts (Yudansha).',
  },
  {
    n: '04',
    title: 'Aikido of Cincinnati',
    url: 'https://aikidocincy.org',
    displayUrl: 'aikidocincy.org',
    desc: 'Our esteemed local martial arts partner, dedicated to the practice and philosophy of Aikido.',
  },
];

export default function Resources() {
  return (
    <div className="bg-white text-ink">
      <PageHeader
        label="Affiliations"
        title="Global network"
        intro="Doshinkai Dojo is proudly affiliated with the world's most prestigious traditional martial arts organizations. Explore our partners below."
      />

      {/* ── DIRECTORY ────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-line">
            {resources.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rise group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-9 lg:py-11 border-b border-line hover:bg-bone transition-colors duration-200 px-3 -mx-3"
              >
                <div className="lg:col-span-1">
                  <span className="font-display font-bold text-sm text-dojo tnum">{link.n}</span>
                </div>

                <div className="lg:col-span-7">
                  <h2 className="font-display font-extrabold text-xl lg:text-2xl leading-tight mb-2.5 group-hover:text-dojo transition-colors">
                    {link.title}
                  </h2>
                  <p className="text-ink-soft leading-relaxed max-w-2xl">{link.desc}</p>
                </div>

                <div className="lg:col-span-4 flex items-center lg:justify-end gap-4">
                  <span className="text-sm font-semibold text-ink-soft group-hover:text-dojo transition-colors">
                    {link.displayUrl}
                  </span>
                  <span
                    aria-hidden="true"
                    className="w-10 h-10 shrink-0 border border-line rounded-md flex items-center justify-center text-ink-faint group-hover:border-dojo group-hover:text-dojo transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
            <Link
              href="/resources/registry"
              className="group border border-line rounded-md p-6 hover:border-dojo transition-colors"
            >
              <p className="label text-ink-faint mb-3">Also in this section</p>
              <p className="font-display font-extrabold text-xl group-hover:text-dojo transition-colors">
                Dan &amp; Kyu Registry →
              </p>
            </Link>
            <Link
              href="/resources/affiliated"
              className="group border border-line rounded-md p-6 hover:border-dojo transition-colors"
            >
              <p className="label text-ink-faint mb-3">Also in this section</p>
              <p className="font-display font-extrabold text-xl group-hover:text-dojo transition-colors">
                Affiliated Dojos →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-steel text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1] mb-4">
                Ready to join our community?
              </h2>
              <p className="text-white/70 leading-relaxed max-w-lg">
                Training with Doshinkai connects you to one of the largest traditional karate federations in the world.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2.5 bg-dojo text-white font-semibold px-7 py-4 rounded-md hover:bg-dojo-deep transition-colors duration-200"
              >
                View class schedule
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
