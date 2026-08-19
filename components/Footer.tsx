import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-paper-warm text-ink border-t border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-10 mb-16">
          <div>
            <span className="block w-14 h-14 mb-6">
              <img src="/doshinkai_logo.png" alt="" aria-hidden="true" className="w-full h-full object-contain" />
            </span>
            <h3 className="font-display text-2xl font-normal tracking-[0.06em] mb-4">Doshinkai Dojo</h3>
            <p className="text-sm text-ink-soft leading-relaxed pr-4">
              Dedicated to the strict preservation of traditional Shotokan technique, discipline, and philosophy in
              Cincinnati.
            </p>
          </div>

          <div>
            <h4 className="eyebrow text-seal mb-6">Dojo Location</h4>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li className="text-ink font-medium">Doshinkai Dojo</li>
              <li>6620 Montgomery Road</li>
              <li>Suite 3</li>
              <li>Cincinnati, OH 45213</li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-seal mb-6">Mailing Address</h4>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>P.O. Box 42316</li>
              <li>Cincinnati, OH 45242</li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-seal mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-ink-soft">
              <li>
                <a href="tel:+18325130058" className="group flex items-center gap-3 hover:text-seal transition-colors">
                  <span aria-hidden="true" className="w-6 h-px bg-rule group-hover:bg-seal group-hover:w-9 transition-all duration-500" />
                  +1 (832) 513 &ndash; 0058
                </a>
              </li>
              <li>
                <a href="mailto:dskdojo1@gmail.com" className="group flex items-center gap-3 hover:text-seal transition-colors">
                  <span aria-hidden="true" className="w-6 h-px bg-rule group-hover:bg-seal group-hover:w-9 transition-all duration-500" />
                  dskdojo1@gmail.com
                </a>
              </li>
            </ul>
            <Link
              href="/join/class-registration"
              className="inline-block mt-8 bg-ink text-paper text-[11px] uppercase tracking-[0.24em] px-6 py-3.5 hover:bg-seal transition-colors duration-500"
            >
              Begin Training
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-rule flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-ink-faint">
          <p>&copy; {new Date().getFullYear()} Doshinkai Dojo. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/schedule" className="hover:text-seal transition-colors">
              Schedule
            </Link>
            <Link href="/contact" className="hover:text-seal transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Oversized 道 ("the Way") as a quiet watermark */}
      <span
        aria-hidden="true"
        className="font-jp pointer-events-none select-none absolute -bottom-16 right-4 md:right-16 text-[16rem] md:text-[22rem] leading-none text-ink opacity-[0.04]"
      >
        道
      </span>
    </footer>
  );
}
