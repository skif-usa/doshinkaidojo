import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = pageMetadata({
  title: 'Dojo Gear & Accessories',
  description: 'Official Doshinkai Dojo apparel, including premium t-shirts featuring our Tiger and Kanji crest. Represent the tradition on and off the mat.',
  path: '/shop/accessories',
});

const ORDER_FORM =
  'https://docs.google.com/forms/d/e/1FAIpQLSfjFtU8n_eilGrCBrfnx6vMHX03VbPh4Mv3rudgbwjTULiFwg/viewform';

const specs = [
  { label: 'Colors', value: 'Charcoal / Navy Blue' },
  { label: 'Fit', value: 'Athletic / Unisex' },
];

export default function Accessories() {
  return (
    <div className="bg-white text-ink">
      <PageHeader
        label="Shop"
        title="Dojo gear"
        intro="Official Doshinkai Dojo apparel and accessories. Represent the tradition on and off the mat."
      />

      {/* ── PRODUCT ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="relative aspect-square bg-bone border border-line flex items-center justify-center p-10">
                <Image
                  src="/t-shirts.webp"
                  alt="Official Doshinkai Dojo t-shirts featuring the Tiger and Kanji crest"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-10"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <p className="label text-ink-faint mb-6">Official apparel</p>
              <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1] mb-6">
                Doshinkai T-Shirt
              </h2>
              <p className="text-lg text-ink-soft leading-relaxed mb-9">
                Represent Doshinkai Dojo with our official premium t-shirts. Designed for both intense training sessions
                and everyday lifestyle wear. Features our iconic Tiger and Kanji crest.
              </p>

              <dl className="border-t border-line mb-9">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex items-baseline gap-6 py-4 border-b border-line">
                    <dt className="label text-ink-faint w-28 shrink-0">{spec.label}</dt>
                    <dd className="font-semibold">{spec.value}</dd>
                  </div>
                ))}
              </dl>

              <a
                href={ORDER_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-dojo text-white font-semibold px-7 py-4 rounded-md hover:bg-dojo-deep transition-colors duration-200"
              >
                Order now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              <p className="text-sm text-ink-faint mt-5">
                Opens a secure Google Form to select sizes and complete your order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEDERATION SHOP ──────────────────────────────────── */}
      <section className="bg-bone border-y border-line py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
            <div className="lg:col-span-8">
              <p className="label text-ink-faint mb-4">Federation shop</p>
              <h2 className="font-display font-extrabold text-2xl lg:text-3xl mb-3">Looking for gi and equipment?</h2>
              <p className="text-ink-soft leading-relaxed max-w-xl">
                SKIF-USA runs the official federation store for uniforms, belts, patches, and training equipment.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a
                href="https://skifusa.org/shop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 border border-line bg-white text-ink font-semibold px-7 py-4 rounded-md hover:border-dojo hover:text-dojo transition-colors duration-200"
              >
                Visit SKIFUSA shop
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="label label-center text-ink-faint justify-center mb-6">Not training with us yet?</p>
          <Link
            href="/join/class-registration"
            className="inline-flex items-center gap-2.5 bg-dojo text-white font-semibold px-7 py-4 rounded-md hover:bg-dojo-deep transition-colors duration-200"
          >
            Register for a free class
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
