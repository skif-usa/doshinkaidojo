"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

type NavItem = {
  label: string;
  href: string;
  hint: string;
  external?: boolean;
  dot: string;
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
      { label: 'Class Schedule', href: '/schedule', hint: 'Days, times & age groups', dot: 'bg-ocean' },
      { label: 'Class Registration', href: '/join/class-registration', hint: 'Start with a free trial', dot: 'bg-dojo' },
      { label: 'Private Instruction', href: '/join/private-class', hint: 'One-on-one with Sensei', dot: 'bg-belt-purple' },
    ],
  },
  {
    id: 'about',
    label: 'About',
    items: [
      { label: 'Shotokan Karate', href: '/about/shotokan', hint: 'What students learn', dot: 'bg-leaf' },
      { label: 'Karate History', href: '/about/history', hint: 'Where Shotokan comes from', dot: 'bg-belt-brown' },
      { label: 'Meet the Sensei', href: '/about/instructor', hint: 'Our head instructor', dot: 'bg-sun' },
    ],
  },
  {
    id: 'events',
    label: 'Events',
    items: [
      { label: 'Upcoming Events', href: '/events', hint: 'Seminars & camps', dot: 'bg-dojo' },
      { label: 'Event Archive', href: '/events/archive', hint: 'Past gatherings', dot: 'bg-ocean' },
    ],
  },
  {
    id: 'more',
    label: 'More',
    items: [
      { label: 'Global Network', href: '/resources', hint: 'Our SKIF partners', dot: 'bg-ocean' },
      { label: 'Dan & Kyu Registry', href: '/resources/registry', hint: 'Belt rankings', dot: 'bg-belt-brown' },
      { label: 'Affiliated Dojos', href: '/resources/affiliated', hint: 'Sister dojos', dot: 'bg-leaf' },
      { label: 'Dojo Accessories', href: '/shop/accessories', hint: 'Gear & apparel', dot: 'bg-sun' },
      { label: 'SKIFUSA Goods', href: 'https://skifusa.org/shop', hint: 'Federation shop', external: true, dot: 'bg-belt-purple' },
    ],
  },
];

function Caret() {
  return (
    <svg
      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
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
      <span aria-hidden="true" className={`mt-1.5 w-2.5 h-2.5 rounded-full shrink-0 ${item.dot}`} />
      <span>
        <span className="flex items-center gap-1.5 font-bold text-[15px] text-navy">
          {item.label}
          {item.external && (
            <span aria-hidden="true" className="text-navy-faint text-xs">
              ↗
            </span>
          )}
        </span>
        <span className="block text-[13px] text-navy-faint mt-0.5">{item.hint}</span>
      </span>
    </>
  );

  const cls = 'flex items-start gap-3 rounded-2xl px-4 py-3 hover:bg-mist transition-colors duration-200';

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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setOpenGroup(null);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-4 lg:px-6 pt-3 lg:pt-5">
      {/* Floating pill */}
      <div
        className={`max-w-7xl mx-auto bg-white rounded-[2rem] lg:rounded-full border border-line transition-shadow duration-300 ${
          scrolled ? 'shadow-float' : 'shadow-soft'
        }`}
      >
        <div className="flex items-center justify-between gap-3 pl-4 pr-3 lg:pl-6 lg:pr-4 h-[66px] lg:h-[76px]">
          {/* Logo */}
          <Link href="/" onClick={close} className="flex items-center gap-2.5 group shrink-0">
            <span className="block w-10 h-10 lg:w-12 lg:h-12 shrink-0">
              <img src="/doshinkai_logo.png" alt="" aria-hidden="true" className="w-full h-full object-contain" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display font-extrabold text-[17px] lg:text-xl text-navy group-hover:text-dojo transition-colors">
                Doshinkai Dojo
              </span>
              <span className="hidden sm:block text-[11px] font-bold text-navy-faint mt-1">
                Shotokan Karate · Cincinnati
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {groups.map((group) => (
              <div key={group.id} className="relative group">
                <button className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[15px] font-bold text-navy-soft hover:text-ocean hover:bg-ocean-soft group-focus-within:text-ocean group-focus-within:bg-ocean-soft transition-colors duration-200 cursor-pointer">
                  {group.label}
                  <Caret />
                </button>

                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[320px] opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200">
                  <div className="bg-white rounded-3xl border border-line shadow-lift p-2.5">
                    {group.items.map((item) => (
                      <PanelRow key={item.href} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/contact"
              className="px-4 py-2.5 rounded-full text-[15px] font-bold text-navy-soft hover:text-ocean hover:bg-ocean-soft transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 lg:gap-3 shrink-0">
            <a
              href="tel:+18325130058"
              aria-label="Call the dojo"
              className="hidden md:flex items-center gap-2 h-11 px-4 rounded-full bg-mist text-navy font-extrabold text-sm hover:bg-mist-deep transition-colors"
            >
              <svg className="w-4 h-4 text-ocean" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span className="hidden xl:inline">(832) 513-0058</span>
            </a>

            <Link
              href="/join/class-registration"
              onClick={close}
              className="hidden sm:inline-flex items-center gap-2 h-11 lg:h-12 px-5 lg:px-6 rounded-full bg-dojo text-white font-extrabold text-[15px] shadow-soft hover:bg-dojo-deep hover:-translate-y-0.5 transition-all duration-200"
            >
              Free Trial
              <span aria-hidden="true">→</span>
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="lg:hidden w-11 h-11 rounded-full bg-mist text-navy flex items-center justify-center cursor-pointer"
            >
              <span className="relative block w-5 h-3.5">
                <span
                  className={`absolute left-0 w-full h-[2.5px] rounded-full bg-current transition-all duration-300 ${
                    open ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 w-full h-[2.5px] rounded-full bg-current transition-all duration-200 ${
                    open ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 w-full h-[2.5px] rounded-full bg-current transition-all duration-300 ${
                    open ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`lg:hidden fixed inset-x-3 sm:inset-x-4 top-[86px] bottom-3 bg-white rounded-[2rem] border border-line shadow-lift overflow-y-auto transition-all duration-300 ${
          open ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="p-4">
          <Link
            href="/join/class-registration"
            onClick={close}
            className="flex items-center justify-center gap-2 bg-dojo text-white font-extrabold px-6 py-4 rounded-2xl shadow-soft mb-2.5"
          >
            Book a Free Trial Class
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/schedule"
            onClick={close}
            className="flex items-center justify-center gap-2 bg-mist text-navy font-extrabold px-6 py-4 rounded-2xl mb-5"
          >
            See Class Times
          </Link>

          <div className="space-y-2.5">
            {groups.map((group) => (
              <div key={group.id} className="rounded-2xl bg-mist overflow-hidden">
                <button
                  onClick={() => setOpenGroup(openGroup === group.id ? null : group.id)}
                  aria-expanded={openGroup === group.id}
                  className="w-full flex items-center justify-between px-5 py-4 font-display font-extrabold text-lg text-navy cursor-pointer"
                >
                  {group.label}
                  <span
                    aria-hidden="true"
                    className={`w-7 h-7 rounded-full bg-white text-dojo flex items-center justify-center text-lg font-bold transition-transform duration-300 ${
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
                  <div className="px-2.5 pb-2.5 space-y-1">
                    {group.items.map((item) => (
                      <div key={item.href} className="bg-white rounded-2xl">
                        <PanelRow item={item} onClick={close} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/contact"
              onClick={close}
              className="block rounded-2xl bg-mist px-5 py-4 font-display font-extrabold text-lg text-navy"
            >
              Contact
            </Link>
          </div>

          <div className="mt-6 rounded-2xl bg-sand p-5 text-center">
            <a href="tel:+18325130058" className="block font-display font-extrabold text-xl text-dojo">
              (832) 513-0058
            </a>
            <a href="mailto:dskdojo1@gmail.com" className="block text-sm font-bold text-navy-soft mt-1">
              dskdojo1@gmail.com
            </a>
            <p className="chip bg-leaf-soft text-leaf mt-3">Se Habla Español</p>
          </div>
        </div>
      </div>
    </header>
  );
}
