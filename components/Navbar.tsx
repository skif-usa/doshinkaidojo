"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

type NavItem = {
  label: string;
  href: string;
  hint: string;
  external?: boolean;
};

type NavGroup = {
  id: string;
  label: string;
  items: NavItem[];
};

const groups: NavGroup[] = [
  {
    id: 'classes',
    label: 'Classes',
    items: [
      { label: 'Class Schedule', href: '/schedule', hint: 'Days, times & age groups' },
      { label: 'Class Registration', href: '/join/class-registration', hint: 'Start with a free trial' },
      { label: 'Private Instruction', href: '/join/private-class', hint: 'One-on-one with Sensei' },
    ],
  },
  {
    id: 'about',
    label: 'About',
    items: [
      { label: 'Shotokan Karate', href: '/about/shotokan', hint: 'What students learn' },
      { label: 'Karate History', href: '/about/history', hint: 'Where Shotokan comes from' },
      { label: 'Meet the Sensei', href: '/about/instructor', hint: 'Our head instructor' },
    ],
  },
  {
    id: 'events',
    label: 'Events',
    items: [
      { label: 'Upcoming Events', href: '/events', hint: 'Seminars & camps' },
      { label: 'Event Archive', href: '/events/archive', hint: 'Past gatherings' },
    ],
  },
  {
    id: 'more',
    label: 'More',
    items: [
      { label: 'Global Network', href: '/resources', hint: 'Our SKIF partners' },
      { label: 'Dan & Kyu Registry', href: '/resources/registry', hint: 'Belt rankings' },
      { label: 'Affiliated Dojos', href: '/resources/affiliated', hint: 'Sister dojos' },
      { label: 'Dojo Accessories', href: '/shop/accessories', hint: 'Gear & apparel' },
      { label: 'SKIFUSA Goods', href: 'https://skifusa.org/shop', hint: 'Federation shop', external: true },
    ],
  },
];

function Caret() {
  return (
    <svg
      className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function PanelRow({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  const body = (
    <>
      <span className="flex items-center gap-1.5 font-medium text-[15px] text-ink">
        {item.label}
        {item.external && (
          <span aria-hidden="true" className="text-ink-faint text-xs">
            ↗
          </span>
        )}
      </span>
      <span className="block text-[13px] text-ink-faint mt-0.5">{item.hint}</span>
    </>
  );

  const cls = 'block rounded-xl px-4 py-3 hover:bg-bone transition-colors duration-200';

  return item.external ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
      {body}
    </a>
  ) : (
    <Link href={item.href} className={cls} onClick={onClick}>
      {body}
    </Link>
  );
}

/**
 * Fixed top bar: a slim announcement strip above the navigation. On the home page the navigation
 * is transparent with white text while it floats over the hero photo, then turns solid white once
 * the photo has scrolled away. On every other page it is solid from the start.
 */
export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    if (!isHome) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const hero = document.querySelector('[data-hero]');
      const navBottom = window.innerWidth >= 1024 ? 132 : 116;
      setOverHero(hero ? hero.getBoundingClientRect().bottom > navBottom : false);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isHome]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const close = () => {
    setOpen(false);
    setOpenGroup(null);
  };

  // Transparent only on the home page, over the hero, with the mobile menu closed.
  const clear = isHome && overHero && !open;

  const isActive = (group: NavGroup) =>
    group.items.some((i) => !i.external && (pathname === i.href || pathname.startsWith(i.href + '/')));

  return (
    <>
      {/* Keeps page content clear of the fixed bar. The home hero slides under the navigation. */}
      <div aria-hidden="true" className={isHome ? 'h-11' : 'h-[116px] lg:h-[132px]'} />

      <div className="fixed top-0 inset-x-0 z-50">
        {/* Announcement bar */}
        <div className="h-11 flex items-center justify-center bg-ink text-white text-[13px] px-4 gap-2 whitespace-nowrap overflow-hidden">
          <span className="text-white/75">Your first class is free</span>
          <span className="text-white/30" aria-hidden="true">
            ·
          </span>
          <Link
            href="/join/class-registration"
            className="font-medium underline underline-offset-4 decoration-white/40 hover:decoration-white"
          >
            Register today →
          </Link>
        </div>

        <header
          className={`relative transition-colors duration-300 ${
            clear
              ? 'bg-transparent text-white border-b border-transparent'
              : 'bg-white/92 backdrop-blur-md text-ink border-b border-line'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] lg:h-[88px] flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" onClick={close} className="flex items-center gap-3 shrink-0">
              <span className="block w-12 h-12 shrink-0 rounded-full bg-white p-1 shadow-soft ring-1 ring-black/5">
                <Image
                  src="/doshinkai_logo.png"
                  alt=""
                  aria-hidden="true"
                  width={56}
                  height={56}
                  priority
                  className="w-full h-full object-contain"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display font-semibold text-lg tracking-tight">Doshinkai Dojo</span>
                <span
                  className={`hidden sm:block mt-1.5 text-[11px] font-medium tracking-[0.14em] uppercase transition-colors duration-300 ${
                    clear ? 'text-white/75' : 'text-ink-faint'
                  }`}
                >
                  Shotokan Karate · Cincinnati
                </span>
              </span>
            </Link>

            {/* Desktop links */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
              {groups.map((group) => {
                const active = isActive(group);
                return (
                  <div key={group.id} className="relative group">
                    <button
                      className={`relative flex items-center gap-1.5 px-4 py-2.5 text-[15px] font-medium transition-opacity cursor-pointer ${
                        clear ? 'text-white/90 hover:text-white' : 'text-ink-soft hover:text-ink'
                      } ${active ? (clear ? '!text-white' : '!text-ink') : ''}`}
                    >
                      {group.label}
                      <Caret />
                      <span
                        aria-hidden="true"
                        className={`absolute left-4 right-4 bottom-1 h-px bg-current origin-left transition-transform duration-300 ${
                          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </button>

                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[300px] opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200">
                      <div className="bg-white text-ink rounded-2xl border border-line shadow-lift p-2">
                        {group.items.map((item) => (
                          <PanelRow key={item.href} item={item} />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
              <Link
                href="/gallery"
                className={`relative group flex items-center px-4 py-2.5 text-[15px] font-medium transition-opacity ${
                  clear ? 'text-white/90 hover:text-white' : 'text-ink-soft hover:text-ink'
                } ${pathname.startsWith('/gallery') ? (clear ? '!text-white' : '!text-ink') : ''}`}
              >
                Gallery
                <span
                  aria-hidden="true"
                  className={`absolute left-4 right-4 bottom-1 h-px bg-current origin-left transition-transform duration-300 ${
                    pathname.startsWith('/gallery') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2.5 shrink-0">
              <Link
                href="/contact"
                onClick={close}
                className={`hidden sm:inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  clear
                    ? 'border-white/70 text-white hover:bg-white hover:text-ink'
                    : 'border-ink/70 text-ink hover:bg-ink hover:text-white'
                }`}
              >
                Contact
              </Link>
              <Link
                href="/join/class-registration"
                onClick={close}
                className={`inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  clear
                    ? 'bg-white text-ink border-white hover:bg-white/85'
                    : 'bg-ink text-white border-ink hover:bg-black'
                }`}
              >
                Free Trial
              </Link>

              {/* Mobile toggle */}
              <button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-label={open ? 'Close menu' : 'Open menu'}
                className={`lg:hidden w-11 h-11 rounded-full border flex items-center justify-center cursor-pointer transition-colors ${
                  clear ? 'border-white/60' : 'border-line'
                }`}
              >
                <span className="relative block w-5 h-3.5">
                  <span
                    className={`absolute left-0 w-full h-[2px] rounded-full bg-current transition-all duration-300 ${
                      open ? 'top-1.5 rotate-45' : 'top-0'
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1.5 w-full h-[2px] rounded-full bg-current transition-all duration-200 ${
                      open ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`absolute left-0 w-full h-[2px] rounded-full bg-current transition-all duration-300 ${
                      open ? 'top-1.5 -rotate-45' : 'top-3'
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`lg:hidden absolute inset-x-0 top-full bg-white text-ink border-b border-line shadow-lift max-h-[calc(100svh-120px)] overflow-y-auto transition-all duration-300 ${
              open ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            <div className="px-4 sm:px-6 py-4">
              {groups.map((group) => (
                <div key={group.id} className="border-b border-line-soft last:border-b-0">
                  <button
                    onClick={() => setOpenGroup(openGroup === group.id ? null : group.id)}
                    aria-expanded={openGroup === group.id}
                    className="w-full flex items-center justify-between py-4 font-display font-semibold text-lg cursor-pointer"
                  >
                    {group.label}
                    <span
                      aria-hidden="true"
                      className={`text-xl text-ink-faint transition-transform duration-300 ${
                        openGroup === group.id ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openGroup === group.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pb-3 space-y-0.5">
                      {group.items.map((item) => (
                        <PanelRow key={item.href} item={item} onClick={close} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <Link
                href="/gallery"
                onClick={close}
                className="block py-4 font-display font-semibold text-lg border-t border-line-soft"
              >
                Gallery
              </Link>

              <Link
                href="/contact"
                onClick={close}
                className="block py-4 font-display font-semibold text-lg border-t border-line-soft"
              >
                Contact
              </Link>

              <div className="mt-2 rounded-2xl bg-bone p-5 text-center">
                <a href="tel:+18325130058" className="block font-display font-semibold text-xl tnum">
                  (832) 513-0058
                </a>
                <a href="mailto:dskdojo1@gmail.com" className="block text-sm text-ink-soft mt-1">
                  dskdojo1@gmail.com
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
