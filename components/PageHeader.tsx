import Link from 'next/link';
import type { ReactNode } from 'react';

type Crumb = { label: string; href: string };

type Props = {
  /** Small tracked label above the title. */
  label: string;
  title: string;
  intro?: string;
  /** Ancestor links; the current page is appended automatically as plain text. */
  crumbs?: Crumb[];
  children?: ReactNode;
};

/** Solid steel banner used at the top of every subpage. The floating navbar
 *  sits over it, so the top padding clears the pill. */
export default function PageHeader({ label, title, intro, crumbs, children }: Props) {
  return (
    <section className="bg-steel text-white pt-30 lg:pt-40 pb-14 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/45">
              {crumbs.map((crumb) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                  <span aria-hidden="true">/</span>
                </li>
              ))}
              <li aria-current="page" className="text-white/70">
                {title}
              </li>
            </ol>
          </nav>
        )}

        <p className="label text-white/50 mb-6">{label}</p>

        <h1 className="font-display font-extrabold text-4xl lg:text-[3.25rem] leading-[1.06] max-w-3xl">{title}</h1>

        {intro && <p className="text-lg text-white/70 leading-relaxed mt-6 max-w-2xl">{intro}</p>}

        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  );
}
