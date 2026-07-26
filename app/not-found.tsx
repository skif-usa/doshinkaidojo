import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-red-700 selection:text-white flex items-center justify-center px-4">
      <div className="max-w-xl mx-auto text-center py-32">
        <div className="w-16 h-1.5 bg-red-700 mx-auto mb-8"></div>
        <span className="text-7xl sm:text-8xl font-black uppercase tracking-tighter text-neutral-200 block mb-4">404</span>
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-black mb-6">
          Off The Mat
        </h1>
        <p className="text-lg text-neutral-500 font-medium leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest text-white bg-black overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-red-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative flex items-center gap-3">
              Return Home
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </span>
          </Link>
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest text-black border-2 border-black hover:bg-neutral-100 transition-colors"
          >
            View Schedule
          </Link>
        </div>
      </div>
    </div>
  );
}
