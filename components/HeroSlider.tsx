"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

type Slide = {
  image: string;
  /** Describe the photograph itself, for screen readers. */
  alt: string;
  eyebrow: string;
  heading: string;
  body: string;
  cta: { label: string; href: string };
  secondary?: { label: string; href: string };
};

const slides: Slide[] = [
  {
    image: '/hero_image.webp',
    alt: 'Students training in traditional Shotokan Karate at Doshinkai Dojo',
    eyebrow: 'Children · Teens · Adults',
    heading: 'Traditional Shotokan Karate in Cincinnati',
    body: 'Classical technique, discipline, and philosophy taught under certified SKIF-USA instruction.',
    cta: { label: 'Register for a free class', href: '/join/class-registration' },
    secondary: { label: 'View the schedule', href: '/schedule' },
  },
  {
    image: '/introduction.webp',
    alt: 'A Doshinkai Dojo instructor guiding students through technique',
    eyebrow: 'Youth classes',
    heading: 'Training begins at age five',
    body: 'Youth classes are divided by age so every child receives the attention they need.',
    cta: { label: 'See youth classes', href: '/schedule' },
    secondary: { label: 'Register now', href: '/join/class-registration' },
  },
  {
    image: '/skif_instructor_japan.webp',
    alt: 'Doshinkai Dojo instruction within the international SKIF federation',
    eyebrow: 'Teens & adults',
    heading: 'Every level, no experience needed',
    body: 'All Levels and Advanced sessions run in person and on Zoom for students aged twelve and over.',
    cta: { label: 'Explore classes', href: '/schedule' },
    secondary: { label: 'Meet the Sensei', href: '/about/instructor' },
  },
];

const INTERVAL = 6500;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const region = useRef<HTMLDivElement>(null);

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
      ref={region}
      role="region"
      aria-roledescription="carousel"
      aria-label="Doshinkai Dojo highlights"
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative h-[86svh] min-h-[32rem] max-h-[52rem] overflow-hidden bg-steel"
    >
      {slides.map((slide, i) => {
        const active = i === index;
        // All slides stay mounted for the crossfade, so only the first one may
        // carry the h1 — otherwise the page ships three competing h1s.
        const Heading = i === 0 ? 'h1' : 'p';
        return (
          <div
            key={slide.image}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              active ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={i === 0}
              className="object-cover"
            />
            {/* Scrims: vertical for legibility, horizontal for depth */}
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-steel via-steel/70 to-steel/25" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-steel/80 via-transparent to-transparent" />

            <div className="absolute inset-0 flex items-end">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 lg:pb-28">
                <div className="max-w-2xl">
                  <p className="label text-white/60 mb-6">{slide.eyebrow}</p>
                  <Heading className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.05] text-white mb-5">
                    {slide.heading}
                  </Heading>
                  <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-lg">{slide.body}</p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={slide.cta.href}
                      tabIndex={active ? 0 : -1}
                      className="inline-flex items-center gap-2.5 bg-dojo text-white font-semibold px-7 py-4 rounded-md hover:bg-dojo-deep transition-colors duration-200"
                    >
                      {slide.cta.label}
                      <span aria-hidden="true">→</span>
                    </Link>
                    {slide.secondary && (
                      <Link
                        href={slide.secondary.href}
                        tabIndex={active ? 0 : -1}
                        className="inline-flex items-center gap-2.5 border border-white/30 text-white font-semibold px-7 py-4 rounded-md hover:border-white transition-colors duration-200"
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

      {/* Controls */}
      <div className="absolute bottom-0 inset-x-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 lg:pb-8 flex items-center gap-4">
          {/* Progress dots */}
          <div className="flex items-center gap-2.5">
            {slides.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show slide ${i + 1}: ${slide.heading}`}
                aria-current={i === index}
                className="group py-2 cursor-pointer"
              >
                <span
                  className={`block h-[3px] transition-all duration-500 ${
                    i === index ? 'w-12 bg-dojo' : 'w-6 bg-white/35 group-hover:bg-white/70'
                  }`}
                />
              </button>
            ))}
          </div>

          <span className="label text-white/45 tnum ml-1">
            {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>

          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? 'Resume slideshow' : 'Pause slideshow'}
              className="w-11 h-11 flex items-center justify-center border border-white/25 text-white rounded-md hover:border-white transition-colors cursor-pointer"
            >
              {paused ? (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
                </svg>
              )}
            </button>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
              className="w-11 h-11 flex items-center justify-center border border-white/25 text-white rounded-md hover:border-white transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next slide"
              className="w-11 h-11 flex items-center justify-center border border-white/25 text-white rounded-md hover:border-white transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
