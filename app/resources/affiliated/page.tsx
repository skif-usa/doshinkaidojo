import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = pageMetadata({
  title: 'Affiliated Dojos',
  description: 'Explore the official network of SKIF affiliated dojos in Kentucky and Panama City.',
  path: '/resources/affiliated',
});

type Dojo = {
  name: string;
  instructor: string;
  address: string;
  phone?: string;
  website?: string;
  link?: string;
  email?: string;
  instagram?: string;
};

const kentuckyDojos: Dojo[] = [
  {
    name: 'Suzakukan Dojo',
    instructor: 'Yukiko Kikuchi Lavalette, Sensei',
    address: '4811 Taylorsville Road, Unit 200\nTaylorsville, KY 40071',
    phone: '+1 - 720-232-1334',
    website: 'suzakukandojo.com',
    link: 'https://suzakukandojo.com',
  },
  {
    name: 'Traditional Shotokan Juku of Lexington',
    instructor: 'Shigeo Akiyama',
    address: 'North Lexington Family YMCA\n381 W Loudon Ave, Lexington, KY 40508',
    phone: '+1 - 210-621-8228',
    email: 'shigeoakiyama@gmail.com',
  },
];

const panamaDojos: Dojo[] = [
  {
    name: 'SKIF Doshinkai Panama',
    instructor: 'Official Branch',
    address: 'P. O. Box 0819-06726\nPanama, Republic of Panama',
    email: 'dskdojo1@gmail.com',
  },
  {
    name: 'Dojo Shoshin Karate-Do',
    instructor: 'Ernesto Ruiz',
    address: 'Casa Cultural las 600\nPanama City',
    phone: '+ 507 - 6724-6263',
    email: 'ernestalvarado788@gmail.com',
  },
  {
    name: 'Nintai Ryoku Dojo',
    instructor: 'Jorge Beleño',
    address: '12 de Octubre, Altos de Miramar\nPanama City',
    phone: '+ 507 - 6842-2044',
    instagram: '@nintairyokudojo',
    link: 'https://instagram.com/nintairyokudojo',
  },
];

const icons = {
  pin: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
  phone:
    'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  mail: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  link: 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14',
};

function Row({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3.5">
      <span aria-hidden="true" className="shrink-0 mt-0.5 text-ink-faint">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={icon} />
        </svg>
      </span>
      <span className="text-ink-soft">{children}</span>
    </li>
  );
}

function DojoCard({ dojo }: { dojo: Dojo }) {
  return (
    <article className="rise border border-line rounded-md p-6 lg:p-8 hover:border-dojo transition-colors duration-200">
      <h3 className="font-display font-extrabold text-xl lg:text-2xl leading-tight mb-1.5">{dojo.name}</h3>
      <p className="text-sm font-semibold text-dojo mb-6">{dojo.instructor}</p>

      <ul className="space-y-3 text-[15px]">
        <Row icon={icons.pin}>
          <address className="not-italic whitespace-pre-line leading-relaxed">{dojo.address}</address>
        </Row>

        {dojo.phone && (
          <Row icon={icons.phone}>
            <a href={`tel:${dojo.phone.replace(/[^+\d]/g, '')}`} className="hover:text-dojo transition-colors tnum">
              {dojo.phone}
            </a>
          </Row>
        )}

        {dojo.email && (
          <Row icon={icons.mail}>
            <a href={`mailto:${dojo.email}`} className="hover:text-dojo transition-colors break-all">
              {dojo.email}
            </a>
          </Row>
        )}

        {dojo.website && dojo.link && (
          <Row icon={icons.link}>
            <a
              href={dojo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-dojo transition-colors"
            >
              {dojo.website} ↗
            </a>
          </Row>
        )}

        {dojo.instagram && dojo.link && (
          <Row icon={icons.link}>
            <a
              href={dojo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-dojo transition-colors"
            >
              {dojo.instagram} ↗
            </a>
          </Row>
        )}
      </ul>
    </article>
  );
}

export default function AffiliatedDojos() {
  return (
    <div className="bg-white text-ink">
      <PageHeader
        label="Network"
        title="Affiliated dojos"
        intro="Doshinkai Dojo is proud to be connected with a strong network of dedicated instructors and traditional Shotokan schools across the Americas."
        crumbs={[{ label: 'Global Network', href: '/resources' }]}
      />

      {/* ── KENTUCKY ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="label text-ink-faint mb-6">United States</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1]">Kentucky</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {kentuckyDojos.map((dojo) => (
              <DojoCard key={dojo.name} dojo={dojo} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PANAMA ───────────────────────────────────────────── */}
      <section className="bg-bone border-y border-line py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="label text-ink-faint mb-6">Republic of Panama</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1]">Panama City</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {panamaDojos.map((dojo) => (
              <div key={dojo.name} className="bg-white">
                <DojoCard dojo={dojo} />
              </div>
            ))}
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
