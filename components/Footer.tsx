import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-50 text-neutral-900 relative overflow-hidden border-t-8 border-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          <div className="lg:col-span-1">
            <div className="w-16 h-16 bg-white border border-neutral-200 shadow-sm rounded-full flex items-center justify-center p-2 mb-6">
              <img src="/doshinkai_logo.png" alt="Doshinkai Dojo" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-black uppercase tracking-tighter mb-4 text-black">Doshinkai Dojo</h3>
            <p className="text-sm text-neutral-600 leading-relaxed pr-4">
              Dedicated to the strict preservation of traditional Shotokan technique, discipline, and philosophy in Cincinnati.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-red-700 mb-6">Dojo Location</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li className="font-bold text-black">Doshinkai Dojo</li>
              <li>6620 Montgomery Road</li>
              <li>Suite 3</li>
              <li>Cincinnati, OH 45213</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-red-700 mb-6">Mailing Address</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>P.O. Box 42316</li>
              <li>Cincinnati, OH 45242</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-red-700 mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-neutral-600">
              <li>
                <a href="tel:+18325130058" className="hover:text-red-700 transition-colors flex items-center gap-2 group font-medium">
                  <span className="w-8 h-px bg-neutral-300 group-hover:bg-red-700 transition-colors"></span>
                  +1 (832) 513 – 0058
                </a>
              </li>
              <li>
                <a href="mailto:dskdojo1@gmail.com" className="hover:text-red-700 transition-colors flex items-center gap-2 group font-medium">
                  <span className="w-8 h-px bg-neutral-300 group-hover:bg-red-700 transition-colors"></span>
                  dskdojo1@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <Link href="/join/class-registration" className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-6 py-3 hover:bg-red-700 transition-colors duration-300">
                Register Now
              </Link>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 uppercase tracking-widest font-bold">
          <p>&copy; {new Date().getFullYear()} Doshinkai Dojo. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/schedule" className="hover:text-black transition-colors">Schedule</Link>
            <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden flex justify-center pointer-events-none select-none">
        <span className="text-[15vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap text-black opacity-[0.03]">
          DOSHINKAI
        </span>
      </div>
    </footer>
  );
}