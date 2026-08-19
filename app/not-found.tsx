import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="bg-white text-ink flex items-center justify-center px-4 min-h-[80vh] pt-32 pb-20">
      <div className="max-w-xl mx-auto text-center">
        <p className="font-display font-extrabold text-6xl sm:text-7xl text-bone-deep leading-none mb-4 tnum">404</p>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl leading-tight mb-5">Off the mat</h1>

        <p className="text-lg text-ink-soft leading-relaxed mb-10">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Let&rsquo;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2.5 bg-dojo text-white font-semibold px-7 py-4 rounded-md hover:bg-dojo-deep transition-colors duration-200"
          >
            Return home
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center gap-2.5 border border-line text-ink font-semibold px-7 py-4 rounded-md hover:border-dojo hover:text-dojo transition-colors duration-200"
          >
            View schedule
          </Link>
        </div>
      </div>
    </div>
  );
}
