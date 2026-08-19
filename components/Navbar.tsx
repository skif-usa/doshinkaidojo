"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

type MenuItem = {
  n: string;
  label: string;
  href: string;
  external?: boolean;
};

type MenuGroup = {
  title: string;
  items: MenuItem[];
};

/** The whole site, indexed. The overlay shows every destination at once
 *  instead of hiding them behind nested dropdowns. */
const menu: MenuGroup[] = [
  {
    title: 'Begin',
    items: [
      { n: '01', label: 'Class Registration', href: '/join/class-registration' },
      { n: '02', label: 'Private Instruction', href: '/join/private-class' },
      { n: '03', label: 'Class Schedule', href: '/schedule' },
    ],
  },
  {
    title: 'The Dojo',
    items: [
      { n: '04', label: 'Shotokan Karate', href: '/about/shotokan' },
      { n: '05', label: 'Karate History', href: '/about/history' },
      { n: '06', label: 'Instructors', href: '/about/instructor' },
    ],
  },
  {
    title: 'Gatherings',
    items: [
      { n: '07', label: 'Upcoming Events', href: '/events' },
      { n: '08', label: 'Event Archive', href: '/events/archive' },
    ],
  },
  {
    title: 'Network',
    items: [
      { n: '09', label: 'Global Network', href: '/resources' },
      { n: '10', label: 'Dan & Kyu Registry', href: '/resources/registry' },
      { n: '11', label: 'Affiliated Dojos', href: '/resources/affiliated' },
    ],
  },
  {
    title: 'Shop',
    items: [
      { n: '12', label: 'Dojo Accessories', href: '/shop/accessories' },
      { n: '13', label: 'SKIFUSA Goods', href: 'https://skifusa.org/shop', external: true },
    ],
  },
  {
    title: 'Contact',
    items: [{ n: '14', label: 'Contact Us', href: '/contact' }],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* Fixed identity rail — desktop only */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-20 z-50 flex-col items-center justify-between py-7 bg-void border-r border-edge">
        <Link href="/" onClick={close} aria-label="Doshinkai Dojo — home" className="block w-11 h-11 group">
          <img
            src="/doshinkai_logo.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          />
        </Link>

        <span aria-hidden="true" className="vertical-jp text-[11px] text-chalk-faint select-none">
          空手道
        </span>

        <span aria-hidden="true" className="vertical-jp eyebrow text-[9px] text-chalk-faint select-none">
          S.K.I.F.
        </span>
      </aside>

      {/* Slim top bar, offset past the rail */}
      <header className="fixed top-0 left-0 lg:left-20 right-0 z-50 h-16 lg:h-20 flex items-center justify-between px-5 lg:px-10 bg-void/85 backdrop-blur-md border-b border-edge">
        <Link href="/" onClick={close} className="flex items-center gap-3 group lg:hidden">
          <span className="block w-9 h-9 shrink-0">
            <img src="/doshinkai_logo.png" alt="" aria-hidden="true" className="w-full h-full object-contain" />
          </span>
          <span className="font-display text-xl tracking-[0.06em] text-chalk">Doshinkai Dojo</span>
        </Link>

        <Link
          href="/"
          onClick={close}
          className="hidden lg:block font-display text-2xl tracking-[0.07em] text-chalk hover:text-seal transition-colors duration-500"
        >
          Doshinkai Dojo
        </Link>

        <div className="flex items-center gap-5 lg:gap-8">
          <a
            href="tel:+18325130058"
            className="hidden xl:block index-num text-chalk-soft hover:text-seal transition-colors duration-300"
          >
            (832) 513-0058
          </a>

          <Link
            href="/join/class-registration"
            onClick={close}
            className="hidden sm:inline-flex items-center gap-2.5 border border-edge px-5 py-2.5 eyebrow text-chalk hover:border-seal hover:text-seal transition-colors duration-500"
          >
            Begin
            <span aria-hidden="true">&rarr;</span>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex items-center gap-3 text-chalk hover:text-seal transition-colors duration-300 cursor-pointer"
          >
            <span className="eyebrow hidden sm:inline">{open ? 'Close' : 'Menu'}</span>
            <span className="relative block w-6 h-3">
              <span
                className={`absolute left-0 w-full h-px bg-current transition-all duration-500 ease-zen ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 w-full h-px bg-current transition-all duration-500 ease-zen ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Full-screen index overlay */}
      <div
        id="site-menu"
        className={`fixed inset-0 z-40 bg-void transition-opacity duration-500 ease-zen overflow-y-auto ${
          open ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
        }`}
      >
        <div className="min-h-full lg:pl-20 pt-24 lg:pt-28 pb-14 px-5 lg:px-10 flex flex-col">
          <p className="eyebrow text-chalk-faint mb-10 lg:mb-14 flex items-center gap-3">
            <span aria-hidden="true" className="w-8 h-px bg-seal" />
            Index
          </p>

          <nav className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-14 gap-y-12">
            {menu.map((group) => (
              <div key={group.title}>
                <h2 className="eyebrow text-seal mb-5">{group.title}</h2>
                <ul>
                  {group.items.map((item) => {
                    const row = (
                      <>
                        <span className="index-num text-chalk-faint group-hover/row:text-seal transition-colors duration-300 pt-2">
                          {item.n}
                        </span>
                        <span className="font-display text-2xl lg:text-3xl font-light text-chalk group-hover/row:text-seal group-hover/row:translate-x-1.5 transition-all duration-500 ease-zen">
                          {item.label}
                        </span>
                        <span
                          aria-hidden="true"
                          className="ml-auto self-center text-seal opacity-0 -translate-x-2 group-hover/row:opacity-100 group-hover/row:translate-x-0 transition-all duration-500"
                        >
                          {item.external ? '↗' : '→'}
                        </span>
                      </>
                    );

                    const cls =
                      'group/row flex items-start gap-5 py-3.5 border-b border-edge hover:border-seal/40 transition-colors duration-500';

                    return (
                      <li key={item.href}>
                        {item.external ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={close} className={cls}>
                            {row}
                          </a>
                        ) : (
                          <Link href={item.href} onClick={close} className={cls}>
                            {row}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

          <div className="mt-auto pt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-edge text-sm">
            <div>
              <p className="eyebrow text-chalk-faint mb-3">Dojo</p>
              <p className="text-chalk-soft leading-relaxed">
                6620 Montgomery Road, Suite 3
                <br />
                Cincinnati, OH 45213
              </p>
            </div>
            <div>
              <p className="eyebrow text-chalk-faint mb-3">Reach Us</p>
              <a href="tel:+18325130058" className="block text-chalk-soft hover:text-seal transition-colors">
                +1 (832) 513 &ndash; 0058
              </a>
              <a href="mailto:dskdojo1@gmail.com" className="block text-chalk-soft hover:text-seal transition-colors">
                dskdojo1@gmail.com
              </a>
            </div>
            <div>
              <p className="eyebrow text-chalk-faint mb-3">Language</p>
              <p className="text-chalk-soft">Se Habla Español</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
