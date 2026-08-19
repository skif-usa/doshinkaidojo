import Link from 'next/link';

const columns = [
  {
    title: 'Dojo Location',
    lines: ['Doshinkai Dojo', '6620 Montgomery Road', 'Suite 3', 'Cincinnati, OH 45213'],
  },
  {
    title: 'Mailing Address',
    lines: ['P.O. Box 42316', 'Cincinnati, OH 45242'],
  },
];

const quickLinks = [
  { label: 'Class Schedule', href: '/schedule' },
  { label: 'Class Registration', href: '/join/class-registration' },
  { label: 'Upcoming Events', href: '/events' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-void text-chalk">
      {/* Oversized wordmark as the closing gesture */}
      <div className="px-5 lg:px-10 pt-16 lg:pt-24 pb-10 border-b border-edge">
        <span className="block font-display font-light text-[15vw] lg:text-[11vw] leading-[0.82] tracking-[-0.02em] text-chalk">
          Doshinkai
        </span>
        <div className="flex flex-wrap items-end justify-between gap-6 mt-4">
          <span className="font-jp text-3xl lg:text-5xl text-seal/80 select-none" aria-hidden="true">
            道心会
          </span>
          <p className="eyebrow text-chalk-faint">Shotokan Karate &nbsp;·&nbsp; Cincinnati, Ohio</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-edge">
        {columns.map((col) => (
          <div key={col.title} className="px-5 lg:px-10 py-12 border-b sm:border-b-0 sm:border-r border-edge">
            <h3 className="eyebrow text-seal mb-6">{col.title}</h3>
            <ul className="space-y-1.5 text-sm text-chalk-soft">
              {col.lines.map((line, i) => (
                <li key={line} className={i === 0 && col.title === 'Dojo Location' ? 'text-chalk' : undefined}>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="px-5 lg:px-10 py-12 border-b sm:border-b-0 lg:border-r border-edge">
          <h3 className="eyebrow text-seal mb-6">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:+18325130058" className="group flex items-center gap-3 text-chalk-soft hover:text-seal transition-colors">
                <span aria-hidden="true" className="w-5 h-px bg-edge group-hover:bg-seal group-hover:w-8 transition-all duration-500" />
                +1 (832) 513 &ndash; 0058
              </a>
            </li>
            <li>
              <a href="mailto:dskdojo1@gmail.com" className="group flex items-center gap-3 text-chalk-soft hover:text-seal transition-colors">
                <span aria-hidden="true" className="w-5 h-px bg-edge group-hover:bg-seal group-hover:w-8 transition-all duration-500" />
                dskdojo1@gmail.com
              </a>
            </li>
          </ul>
          <p className="text-sm text-chalk-soft mt-6">Se Habla Español</p>
        </div>

        <div className="px-5 lg:px-10 py-12">
          <h3 className="eyebrow text-seal mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="group flex items-center gap-3 text-chalk-soft hover:text-seal transition-colors">
                  {link.label}
                  <span aria-hidden="true" className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-5 lg:px-10 py-7 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="index-num text-chalk-faint">
          &copy; {new Date().getFullYear()} Doshinkai Dojo &nbsp;·&nbsp; All rights reserved
        </p>
        <p className="index-num text-chalk-faint">Dedicated to traditional Shotokan technique</p>
      </div>
    </footer>
  );
}
