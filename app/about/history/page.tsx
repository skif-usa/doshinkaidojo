import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = pageMetadata({
  title: 'Karate History',
  description: 'From Gichin Funakoshi in Okinawa to Hirokazu Kanazawa and the founding of SKIF: the origins and lineage of traditional Shotokan Karate.',
  path: '/about/history',
});

const karateLayers = [
  {
    num: '01',
    title: 'The Surface',
    desc: "Refers strictly to combat without weapons, denoting 'empty hands'—the practical, physical application of technique.",
  },
  {
    num: '02',
    title: 'The Character',
    desc: 'Speaks to the internal journey, emphasizing the importance of having a heart and mind devoid of malevolent intentions. For Master Funakoshi, the ultimate goal was to ‘seek perfection of character’.',
  },
  {
    num: '03',
    title: 'The Profound',
    desc: 'Drawn from deep Buddhist philosophy, this reflects the understanding that all things are transient and devoid of inherent, fixed existence. Karate is a practice of constant, conscious change.',
  },
];

export default function KarateHistory() {
  return (
    <div className="bg-white text-ink">
      <PageHeader
        label="About"
        title="The origins of our style"
        intro="The roots of traditional Japanese karate trace back to the island of Okinawa. In the 16th and 17th centuries, this martial art found its way to Okinawa from China through the efforts of soldiers and merchants."
      />

      {/* ── OKINAWAN ROOTS ───────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="label text-ink-faint mb-6">Okinawa</p>
              <h2 className="font-display font-extrabold text-2xl lg:text-3xl leading-tight">
                A thousand years of lineage
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-lg text-ink-soft leading-relaxed">
                With a rich history spanning over 1000 years in China, martial arts were ingrained deeply into the
                cultural fabric of the region. Initially known as{' '}
                <strong className="text-ink font-semibold">CHIN-TE</strong> by the Okinawans, which translates to
                ‘Chinese or foreign fist’, karate underwent significant evolution on the island.
              </p>
              <p className="text-lg text-ink-soft leading-relaxed">
                During the 19th century, Okinawa was characterized by small villages, each with its own karate master
                boasting a distinctive style. Typically, these masters imparted their knowledge to a single student in
                private settings. The karate practiced during this period was rigorous and unforgiving. Training focused
                on developing techniques of such potency that a single punch or kick could incapacitate an opponent. For
                both the master and students, it was a matter of life and death, reflecting the intensity and
                seriousness with which karate was approached.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GICHIN FUNAKOSHI ─────────────────────────────────── */}
      <section className="bg-bone border-y border-line py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="relative aspect-4/5">
                <Image
                  src="/gichin_funakoshi.webp"
                  alt="Gichin Funakoshi, Sensei, founder of Shotokan Karate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <p aria-hidden="true" className="font-jp text-2xl text-ink-faint mt-5 tracking-[0.2em]">
                船越 義珍
              </p>
            </div>

            <div className="lg:col-span-7">
              <p className="label text-ink-faint mb-6">The founder</p>
              <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1] mb-8">
                Gichin Funakoshi, Sensei
              </h2>

              <div className="space-y-6 text-ink-soft leading-relaxed">
                <p>
                  Gichin Funakoshi is revered as the founder of Shotokan karate. Born on November 10, 1868, and passing
                  away on April 26, 1957, his journey in martial arts was shaped by unique circumstances and unwavering
                  determination. Sensei Funakoshi had the rare opportunity to learn from two different Okinawan karate
                  masters, a testament to his commitment to mastering his craft.
                </p>
                <p>
                  His resilience and strength of character were legendary; it is said that he once braved a hurricane,
                  standing firm against the wind, as a personal test of fortitude.
                </p>
                <p>
                  In 1922, Master Funakoshi received an invitation to demonstrate his karate skills in Japan. His
                  presentation was met with resounding success, leading him to decide to stay in Japan for the remainder
                  of his life, dedicating himself to the promotion and advancement of karate.
                </p>
              </div>

              <blockquote className="border-l-2 border-dojo pl-6 my-9">
                <p className="font-display font-extrabold text-xl lg:text-2xl leading-snug text-ink">
                  Sensei Funakoshi was not only a martial artist but also a poet, known by the pen name SHOTO, meaning
                  ‘waving pines’.
                </p>
              </blockquote>

              <p className="text-ink-soft leading-relaxed">
                The term KAN translates to ‘house’. In homage to his poetic identity, Master Funakoshi’s students
                affectionately labeled his dojo as &ldquo;Shotokan&rdquo; – the House of Shoto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE THREE LAYERS ─────────────────────────────────── */}
      <section className="bg-steel text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="label text-white/50 mb-6">Philosophy</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1] mb-5">
              The philosophy of <span className="text-dojo">empty hands</span>
            </h2>
            <p className="text-white/70 leading-relaxed">
              Master Funakoshi redefined &lsquo;Karate&rsquo;, moving it from strictly combat to a profound path of
              character development, reflecting three layers of understanding:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-steel-line">
            {karateLayers.map((layer, i) => (
              <div
                key={layer.num}
                className={`py-9 md:px-10 md:first:pl-0 md:last:pr-0 border-b md:border-b-0 border-steel-line last:border-b-0 ${
                  i > 0 ? 'md:border-l md:border-steel-line' : ''
                }`}
              >
                <span className="font-display font-bold text-sm text-dojo tnum">{layer.num}</span>
                <h3 className="font-display font-extrabold text-xl mt-3 mb-3">{layer.title}</h3>
                <p className="text-white/65 leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIROKAZU KANAZAWA ────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="label text-ink-faint mb-6">Shotokan Karate-Do International Federation</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1] mb-3">
              Hirokazu Kanazawa, Soke
            </h2>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              May 3, 1931 – December 8, 2019
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6 text-ink-soft leading-relaxed">
              <p>
                Hirokazu Kanazawa, Soke was born 3 May 1931. He trained in judo while he was in high school, achieving a
                second-degree black belt (second dan). While at college he saw a group of karate students training and
                became entirely devoted to this new martial art.
              </p>
              <p>
                Soke Kanazawa was already a member of the judo club, but he made persistent efforts to join the karate
                club. An exception was made, and he was accepted, but found himself at a disadvantage: his class had been
                training for a period and he found himself behind. To catch up, he would sometimes train from midnight
                to 2 AM. Master Kanazawa was granted his first dan after only a year and a half of training.
              </p>
              <p>
                He graduated from college in 1956 with a degree in commerce, but immediately joined the karate
                organization. He won the first All Japan Karate Championship in free sparring (kumite) in 1957. He had
                not intended to compete because he had broken his right hand. However, he found that his mother had
                traveled to Tokyo to see him compete. And compete he did, with a bandaged right hand and was attended by
                a physician between each bout. He won each match convincingly.
              </p>
              <p className="font-display font-extrabold text-xl text-ink pt-2">
                In 1977 Soke Kanazawa founded the Shotokan Karate-Do International Federation (SKIF). He spent the rest
                of his life promoting his philosophy, his karate, and his organization.
              </p>
              <p>
                The International Martial Arts Federation promoted Soke Kanazawa to 10th Dan in 2000. There is no higher
                rank. Soke Kanazawa passed away on December 8, 2019.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-4/5 lg:sticky lg:top-28">
                <Image
                  src="/hirokazu_kanazawa.webp"
                  alt="Hirokazu Kanazawa, Soke, founder of the Shotokan Karate-Do International Federation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEDERATION LEADERSHIP ────────────────────────────── */}
      <section className="bg-bone border-y border-line py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <p className="label text-ink-faint mb-6">Our foundation</p>
              <h2 className="font-display font-extrabold text-3xl lg:text-[2.5rem] leading-[1.1] mb-6">
                SKIF-USA leadership
              </h2>
              <p className="text-ink-soft leading-relaxed max-w-md">
                Dedicated instructors carrying forward the strict standards and inclusive philosophy established by Soke
                Kanazawa. Doshinkai Dojo is proudly affiliated with the SKIF-USA and SKIF Japan organizations.
              </p>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 mt-7 py-2.5 -my-2.5 font-semibold text-dojo hover:gap-3 transition-all duration-200"
              >
                Explore our network
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-16/10">
                <Image
                  src="/skif_instructor_japan.webp"
                  alt="SKIF-USA federation leadership in the dojo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 lg:py-28 text-center">
        <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <Image src="/doshinkai_logo.png" alt="" width={900} height={900} className="h-[120%] w-auto object-contain" />
        </span>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[3rem] leading-[1.08] mb-8">
            We train with the <span className="text-dojo">spirit of a legend</span>
          </h2>
          <Link
            href="/join/class-registration"
            className="inline-flex items-center gap-2.5 bg-dojo text-white font-semibold px-7 py-4 rounded-md hover:bg-dojo-deep transition-colors duration-200"
          >
            Begin your training
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
