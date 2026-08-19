import Link from 'next/link';

const linkColumns = [
  {
    title: 'Classes',
    links: [
      { label: 'Class Schedule', href: '/schedule' },
      { label: 'Class Registration', href: '/join/class-registration' },
      { label: 'Private Instruction', href: '/join/private-class' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Shotokan Karate', href: '/about/shotokan' },
      { label: 'Karate History', href: '/about/history' },
      { label: 'Meet the Sensei', href: '/about/instructor' },
    ],
  },
  {
    title: 'Dojo',
    links: [
      { label: 'Upcoming Events', href: '/events' },
      { label: 'Event Archive', href: '/events/archive' },
      { label: 'Global Network', href: '/resources' },
      { label: 'Dan & Kyu Registry', href: '/resources/registry' },
      { label: 'Affiliated Dojos', href: '/resources/affiliated' },
      { label: 'Dojo Accessories', href: '/shop/accessories' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-steel text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 lg:pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-steel-line">
          {/* Identity */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <span className="block w-14 h-14 shrink-0">
                <img src="/doshinkai_logo.png" alt="" aria-hidden="true" className="w-full h-full object-contain" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display font-bold text-xl">Doshinkai Dojo</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45 mt-1.5">
                  Shotokan Karate
                </span>
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm mb-7">
              Dedicated to the strict preservation of traditional Shotokan technique, discipline, and philosophy in
              Cincinnati, Ohio.
            </p>
            <Link
              href="/join/class-registration"
              className="inline-flex items-center gap-2 bg-dojo text-white font-semibold text-sm px-6 py-3.5 rounded-md hover:bg-dojo-deep transition-colors duration-200"
            >
              Register for a free class
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Link columns */}
          {linkColumns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45 mb-5">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/75 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Visit */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45 mb-5">Visit</h3>
            <address className="not-italic text-sm text-white/75 leading-relaxed mb-5">
              6620 Montgomery Road
              <br />
              Suite 3
              <br />
              Cincinnati, OH 45213
            </address>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45 mb-2">Mail</p>
            <address className="not-italic text-sm text-white/75 leading-relaxed mb-5">
              P.O. Box 42316
              <br />
              Cincinnati, OH 45242
            </address>
            <a href="tel:+18325130058" className="block text-sm font-semibold hover:text-dojo transition-colors tnum">
              (832) 513-0058
            </a>
            <a
              href="mailto:dskdojo1@gmail.com"
              className="block text-sm text-white/75 hover:text-white transition-colors mt-1"
            >
              dskdojo1@gmail.com
            </a>
            <p className="text-sm text-white/55 mt-4">Se Habla Español</p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/45">
            &copy; {new Date().getFullYear()} Doshinkai Dojo. All rights reserved.
          </p>
          <p className="text-xs text-white/45">Member dojo, Shotokan Karate-Do International Federation</p>
        </div>
      </div>
    </footer>
  );
}
