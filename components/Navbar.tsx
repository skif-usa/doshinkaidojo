"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

type NavItem = {
  label: string;
  href: string;
  hint: string;
  external?: boolean;
  badge?: string;
};

type NavGroup = {
  id: string;
  label: string;
  items: NavItem[];
  /** Optional descriptive panel shown alongside the links on desktop. */
  intro?: { title: string; body: string };
};

const groups: NavGroup[] = [
  {
    id: 'about',
    label: 'About',
    intro: {
      title: 'Our Foundation',
      body: 'Dedicated to the strict preservation of traditional Shotokan technique and philosophy.',
    },
    items: [
      { label: 'Shotokan Karate', href: '/about/shotokan', hint: 'Benefits of learning Shotokan Karate' },
      { label: 'Karate History', href: '/about/history', hint: 'Roots of traditional Japanese karate' },
      { label: 'Instructors', href: '/about/instructor', hint: 'Meet the Sensei' },
    ],
  },
  {
    id: 'events',
    label: 'Events',
    items: [
      { label: 'Upcoming Events', href: '/events', hint: 'Seminars & Gasshukus' },
      { label: 'Event Archive', href: '/events/archive', hint: 'Past clinics & gatherings' },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    items: [
      { label: 'Global Network', href: '/resources', hint: 'Our official partners' },
      { label: 'Dan & Kyu Registry', href: '/resources/registry', hint: 'Official belt rankings' },
      { label: 'Affiliated Dojos', href: '/resources/affiliated', hint: 'Satellite groups' },
    ],
  },
  {
    id: 'shop',
    label: 'Shop',
    items: [
      { label: 'Accessories', href: '/shop/accessories', hint: 'Dojo gear & equipment' },
      { label: 'SKIFUSA Goods', href: 'https://skifusa.org/shop', hint: 'Official Federation Shop', external: true },
    ],
  },
];

const joinItems: NavItem[] = [
  { label: 'Class Registration', href: '/join/class-registration', hint: 'Join group training sessions', badge: 'Popular' },
  { label: 'Private Class', href: '/join/private-class', hint: 'Book 1-on-1 instruction' },
];

function ExternalIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function Chevron() {
  return (
    <svg
      className="w-3 h-3 transition-transform duration-500 group-hover:rotate-180 group-focus-within:rotate-180"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

/** A link row inside a dropdown panel. */
function PanelLink({ item, onNavigate }: { item: NavItem; onNavigate?: () => void }) {
  const className =
    'group/row flex items-start justify-between gap-4 px-5 py-4 hover:bg-paper-warm transition-colors duration-300';

  const inner = (
    <>
      <span className="min-w-0">
        <span className="flex items-center gap-2">
          <span className="font-display text-lg font-medium text-ink group-hover/row:text-seal transition-colors duration-300">
            {item.label}
          </span>
          {item.badge && (
            <span className="eyebrow text-[9px] text-seal border border-seal/30 px-1.5 py-0.5">{item.badge}</span>
          )}
        </span>
        <span className="block text-xs text-ink-faint mt-0.5">{item.hint}</span>
      </span>
      {item.external ? (
        <ExternalIcon className="w-3.5 h-3.5 shrink-0 text-ink-faint group-hover/row:text-seal transition-colors" />
      ) : (
        <span
          aria-hidden="true"
          className="shrink-0 text-seal opacity-0 -translate-x-2 group-hover/row:opacity-100 group-hover/row:translate-x-0 transition-all duration-300"
        >
          &rarr;
        </span>
      )}
    </>
  );

  return item.external ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className} onClick={onNavigate}>
      {inner}
    </a>
  ) : (
    <Link href={item.href} className={className} onClick={onNavigate}>
      {inner}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveAccordion(null);
  };

  const toggleAccordion = (id: string) => setActiveAccordion(activeAccordion === id ? null : id);

  return (
    <header className="fixed top-0 w-full z-50 flex flex-col">
      {/* Utility strip — recedes once the visitor starts reading */}
      <div
        className={`hidden md:flex w-full justify-center bg-paper-warm border-b border-rule-soft overflow-hidden transition-all duration-700 ease-zen ${
          scrolled ? 'h-0 opacity-0' : 'h-9 opacity-100'
        }`}
      >
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6 text-[11px] tracking-[0.22em] uppercase text-ink-faint">
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="w-1 h-1 bg-seal rotate-45" />
              Cincinnati, Ohio
            </span>
            <span className="hidden lg:inline">S.K.I.F. Member Dojo</span>
          </div>
          <div className="flex gap-6 text-[11px] tracking-[0.18em] uppercase text-ink-faint">
            <a href="tel:+18325130058" className="hover:text-seal transition-colors">
              (832) 513-0058
            </a>
            <a href="mailto:dskdojo1@gmail.com" className="hover:text-seal transition-colors">
              dskdojo1@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`w-full bg-paper/95 backdrop-blur-sm border-b transition-all duration-700 ease-zen ${
          scrolled
            ? 'h-20 border-rule shadow-[0_18px_40px_-24px_rgba(26,24,21,0.28)]'
            : 'h-20 md:h-24 border-rule-soft'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full gap-6">
            {/* Wordmark */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 md:gap-4 group shrink-0 relative z-50"
            >
              <span
                className={`relative block shrink-0 transition-all duration-700 ease-zen ${
                  scrolled ? 'w-10 h-10' : 'w-11 h-11 md:w-14 md:h-14'
                }`}
              >
                <img src="/doshinkai_logo.png" alt="" aria-hidden="true" className="w-full h-full object-contain" />
              </span>
              <span className="flex flex-col justify-center">
                <span
                  className={`font-display font-normal tracking-[0.08em] text-ink group-hover:text-seal transition-colors duration-500 leading-none ${
                    scrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
                  }`}
                >
                  Doshinkai Dojo
                </span>
                <span
                  className={`eyebrow text-[9px] transition-all duration-700 hidden md:block ${
                    scrolled ? 'opacity-0 h-0 mt-0' : 'opacity-100 mt-1.5'
                  }`}
                >
                  Shotokan Karate
                </span>
              </span>
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative z-50 p-2 -mr-2 text-ink"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="w-6 h-4 flex flex-col justify-between items-center">
                <span
                  className={`w-full h-px bg-current transition-all duration-500 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                  }`}
                />
                <span
                  className={`w-full h-px bg-current transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`w-full h-px bg-current transition-all duration-500 ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                  }`}
                />
              </span>
            </button>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center h-full gap-8">
              {groups.map((group) => (
                <div key={group.id} className="relative group h-full flex items-center">
                  <button className="flex items-center gap-2 h-full text-[12px] uppercase tracking-[0.2em] text-ink-soft hover:text-ink group-focus-within:text-ink transition-colors duration-300 cursor-pointer">
                    {group.label}
                    <Chevron />
                  </button>

                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 bg-paper border border-rule shadow-[0_30px_70px_-20px_rgba(26,24,21,0.22)] opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-500 ease-zen z-50 flex ${
                      group.intro ? 'w-[620px]' : 'w-[320px]'
                    }`}
                  >
                    {group.intro && (
                      <div className="w-[38%] bg-paper-warm border-r border-rule-soft p-7 flex flex-col justify-between">
                        <div>
                          <p className="eyebrow text-seal mb-3">{group.intro.title}</p>
                          <p className="text-sm text-ink-soft leading-relaxed">{group.intro.body}</p>
                        </div>
                        <span aria-hidden="true" className="font-jp text-4xl text-ink/10 mt-8 select-none">
                          道
                        </span>
                      </div>
                    )}
                    <div className={`flex flex-col py-3 ${group.intro ? 'w-[62%]' : 'w-full'}`}>
                      {group.items.map((item) => (
                        <PanelLink key={item.href} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <Link
                href="/schedule"
                className="text-[12px] uppercase tracking-[0.2em] text-ink-soft hover:text-ink transition-colors duration-300 relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-seal after:transition-all after:duration-500 hover:after:w-full"
              >
                Schedule
              </Link>

              <Link
                href="/contact"
                className="text-[12px] uppercase tracking-[0.2em] text-ink-soft hover:text-ink transition-colors duration-300 relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-seal after:transition-all after:duration-500 hover:after:w-full"
              >
                Contact
              </Link>

              {/* Join */}
              <div className="relative group h-full flex items-center">
                <button className="inline-flex items-center gap-2 px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-paper bg-ink hover:bg-seal group-focus-within:bg-seal transition-colors duration-500 cursor-pointer">
                  Begin
                  <Chevron />
                </button>
                <div className="absolute top-full right-0 w-[320px] bg-paper border border-rule shadow-[0_30px_70px_-20px_rgba(26,24,21,0.22)] opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-500 ease-zen z-50 flex flex-col py-3">
                  {joinItems.map((item) => (
                    <PanelLink key={item.href} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-paper z-40 transition-all duration-500 ease-zen flex flex-col pt-24 pb-8 px-6 overflow-y-auto ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6 pointer-events-none'
        }`}
      >
        <div className="flex flex-col mt-6">
          {groups.map((group) => (
            <div key={group.id} className="border-b border-rule-soft">
              <button
                onClick={() => toggleAccordion(group.id)}
                className="w-full flex justify-between items-center text-left py-5 font-display text-3xl font-light text-ink"
                aria-expanded={activeAccordion === group.id}
              >
                {group.label}
                <span
                  aria-hidden="true"
                  className={`text-seal text-2xl font-sans font-light transition-transform duration-500 ${
                    activeAccordion === group.id ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-zen ${
                  activeAccordion === group.id ? 'max-h-72 opacity-100 pb-5' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="flex flex-col gap-4 pl-5 border-l border-seal">
                  {group.items.map((item) =>
                    item.external ? (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-ink-soft hover:text-seal transition-colors"
                      >
                        {item.label}
                        <ExternalIcon className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="text-[12px] uppercase tracking-[0.2em] text-ink-soft hover:text-seal transition-colors"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}

          <Link
            href="/schedule"
            onClick={closeMobileMenu}
            className="border-b border-rule-soft py-5 font-display text-3xl font-light text-ink"
          >
            Schedule
          </Link>
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="border-b border-rule-soft py-5 font-display text-3xl font-light text-ink"
          >
            Contact
          </Link>

          <div className="border-b border-rule-soft">
            <button
              onClick={() => toggleAccordion('join')}
              className="w-full flex justify-between items-center text-left py-5 font-display text-3xl font-light text-seal"
              aria-expanded={activeAccordion === 'join'}
            >
              Begin Training
              <span
                aria-hidden="true"
                className={`text-ink text-2xl font-sans font-light transition-transform duration-500 ${
                  activeAccordion === 'join' ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-zen ${
                activeAccordion === 'join' ? 'max-h-48 opacity-100 pb-5' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="flex flex-col gap-4 pl-5 border-l border-ink">
                {joinItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="text-[12px] uppercase tracking-[0.2em] text-ink-soft hover:text-seal transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-10">
          <Link
            href="/join/class-registration"
            onClick={closeMobileMenu}
            className="w-full flex justify-center items-center py-4 bg-ink text-paper text-[12px] uppercase tracking-[0.24em] hover:bg-seal transition-colors duration-500 mb-6"
          >
            Class Registration
          </Link>
          <div className="text-center text-[11px] uppercase tracking-[0.2em] text-ink-faint leading-loose">
            (832) 513-0058
            <br />
            dskdojo1@gmail.com
          </div>
        </div>
      </div>
    </header>
  );
}
