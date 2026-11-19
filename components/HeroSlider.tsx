"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

type Slide = {
  image: string;
  /** Describe the photograph itself, for screen readers. */
  alt: string;
  heading: string;
  body: string;
  cta: { label: string; href: string };
  secondary?: { label: string; href: string };
};

const slides: Slide[] = [
  {
    image: '/technique-stance.webp',
    alt: 'A black belt in a deep front stance delivering a straight punch, the foundation of Shotokan technique',
    heading: 'Traditional Shotokan Karate in Cincinnati',
    body: 'Classical technique, discipline, and philosophy taught under certified SKIF-USA instruction.',
    cta: { label: 'Register for a free class', href: '/join/class-registration' },
    secondary: { label: 'View the schedule', href: '/schedule' },
  },
  {
    image: '/technique-kids.webp',
    alt: 'Four young students in colored belts practicing stances and punches',
    heading: 'Training begins at age five',
    body: 'Youth classes are divided by age so every child receives the attention they need.',
    cta: { label: 'See youth classes', href: '/schedule' },
    secondary: { label: 'Register now', href: '/join/class-registration' },
  },
  {
    image: '/technique-family.webp',
    alt: 'Adults and children of different ranks training side by side in kicks, blocks and punches',
    heading: 'Every level, no experience needed',
    body: 'All Levels and Advanced sessions run in person and on Zoom for students aged twelve and over.',
    cta: { label: 'Explore classes', href: '/schedule' },
    secondary: { label: 'Meet the Sensei', href: '/about/instructor' },
  },
];

const INTERVAL = 7000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  // Auto-advance, unless paused, reduced-motion, or the tab is hidden.
  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, [paused, reduced]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(index + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(index - 1);
    }
  };

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="Doshinkai Dojo highlights"
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      data-hero
      className="relative overflow-hidden bg-steel pt-[72px] lg:pt-0 lg:h-[calc(100svh-2.75rem)] lg:min-h-[36rem] lg:max-h-[60rem]"
    >
      <div className="grid lg:block">
        {slides.map((slide, i) => {
          const active = i === index;
          // All slides stay mounted for the crossfade, so only the first one may
          // carry the h1: otherwise the page ships three competing h1s.
          const Heading = i === 0 ? 'h1' : 'p';
          return (
            <div
              key={slide.image}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
              aria-hidden={!active}
              className={`[grid-area:1/1] lg:absolute lg:inset-0 transition-opacity duration-1000 ease-out ${
                active ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Photo: a 3:2 strip on phones so nobody is cropped, full-bleed on desktop */}
              <div className="relative aspect-[3/2] lg:absolute lg:inset-0 lg:aspect-auto">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  priority={i === 0}
                  className="object-cover photo-faces"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-steel via-transparent to-transparent lg:from-black/70 lg:via-black/15"
                />
                <div aria-hidden="true" className="hidden lg:block absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/50 to-transparent" />
                <div aria-hidden="true" className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />
              </div>

              <div className="lg:absolute lg:inset-0 lg:flex lg:items-end">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-24 lg:pt-0 lg:pb-20">
                  <div className="max-w-3xl">
                    {i === 0 && (
                      <p className="inline-block rounded-full bg-[#6b1010] px-4 py-1.5 text-sm font-medium text-white mb-4">
                        Se Habla Español
                      </p>
                    )}
                    <Heading
                      className={`font-display font-semibold text-white leading-[1.1] mb-4 lg:mb-5 ${
                        i === 1
                          ? 'text-[clamp(1.2rem,5.6vw,1.75rem)] whitespace-nowrap sm:text-[clamp(1.75rem,4.6vw,4rem)]'
                          : 'text-[1.75rem] sm:text-5xl lg:text-[4rem]'
                      }`}
                    >
                      {slide.heading}
                    </Heading>
                    <p className="text-base lg:text-lg text-white/85 leading-relaxed mb-6 lg:mb-8 max-w-xl">{slide.body}</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <Link href={slide.cta.href} tabIndex={active ? 0 : -1} className="btn-light">
                        {slide.cta.label}
                        <span aria-hidden="true">→</span>
                      </Link>
                      {slide.secondary && (
                        <Link
                          href={slide.secondary.href}
                          tabIndex={active ? 0 : -1}
                          className="btn-line text-white border-white/60 hover:!bg-white hover:!text-ink hover:!border-white"
                        >
                          {slide.secondary.label}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="absolute bottom-5 left-4 right-4 sm:left-6 sm:right-6 lg:left-auto lg:bottom-8 lg:right-8 z-10 flex items-center justify-between lg:justify-end gap-3">
        <div className="flex items-center gap-1.5">
          {slides.map((slide, i) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show slide ${i + 1}: ${slide.heading}`}
              aria-current={i === index}
              className="py-3 px-0.5 cursor-pointer"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? 'w-8 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
                }`}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? 'Resume slideshow' : 'Pause slideshow'}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/15 backdrop-blur text-white hover:bg-white/30 transition-colors cursor-pointer"
        >
          {paused ? (
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
