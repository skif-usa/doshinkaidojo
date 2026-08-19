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
    title: 'More',
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
    <footer className="bg-card border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 lg:pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Identity */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <span className="block w-14 h-14 shrink-0">
                <img src="/doshinkai_logo.png" alt="" aria-hidden="true" className="w-full h-full object-contain" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-xl text-charcoal">Doshinkai Dojo</span>
                <span className="text-xs font-bold text-muted mt-1">Shotokan Karate · Cincinnati</span>
              </span>
            </Link>
            <p className="text-sm text-slate leading-relaxed mb-6 max-w-sm">
              Traditional Shotokan Karate for kids, teens, and adults. We build character, discipline, and strength in a
              safe, welcoming dojo.
            </p>
            <Link
              href="/join/class-registration"
              className="inline-flex items-center gap-2 bg-dojo text-white font-extrabold text-sm px-6 py-3.5 rounded-full hover:bg-dojo-deep transition-colors duration-200"
            >
              Free Trial Class
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Link columns */}
          {linkColumns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="font-display font-extrabold text-base text-charcoal mb-4">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-semibold text-slate hover:text-dojo transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Visit & contact */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-extrabold text-base text-charcoal mb-4">Visit &amp; Contact</h3>
            <address className="not-italic text-sm text-slate leading-relaxed mb-4">
              6620 Montgomery Road
              <br />
              Suite 3
              <br />
              Cincinnati, OH 45213
            </address>
            <p className="text-xs font-bold text-muted mb-1">Mailing address</p>
            <address className="not-italic text-sm text-slate leading-relaxed mb-4">
              P.O. Box 42316
              <br />
              Cincinnati, OH 45242
            </address>
            <a href="tel:+18325130058" className="block text-sm font-extrabold text-charcoal hover:text-dojo transition-colors">
              (832) 513-0058
            </a>
            <a href="mailto:dskdojo1@gmail.com" className="block text-sm font-semibold text-slate hover:text-dojo transition-colors mt-1">
              dskdojo1@gmail.com
            </a>
            <p className="text-sm font-bold text-belt-green mt-3">Se Habla Español</p>
          </div>
        </div>

        <div className="pt-8 border-t border-line flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted font-semibold">
            &copy; {new Date().getFullYear()} Doshinkai Dojo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/schedule" className="text-sm font-semibold text-slate hover:text-dojo transition-colors">
              Schedule
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-slate hover:text-dojo transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Closing obi */}
      <div className="belt-stripe" aria-hidden="true" />
    </footer>
  );
}
