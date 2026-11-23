'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

export type Photo = { src: string; alt: string; caption: string; width: number; height: number };

export default function Lightbox({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const touch = useRef<{ x: number; y: number } | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touch.current;
    touch.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    // Horizontal swipe only: ignore short moves and mostly-vertical drags.
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
    if (dx < 0) next();
    else prev();
  };

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [index, close, prev, next]);

  const current = index === null ? null : photos[index];
  const btn =
    'absolute z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white text-2xl flex items-center justify-center cursor-pointer transition-colors';

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10 lg:gap-x-8 lg:gap-y-14">
        {photos.map((p, i) => {
          const featured = i === 0;
          return (
            <figure key={p.src} className={featured ? 'md:col-span-3' : ''}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Open photo: ${p.caption}`}
                className={`group relative block w-full overflow-hidden rounded-[2rem] bg-bone cursor-zoom-in ${
                  featured ? 'aspect-4/3 md:aspect-21/9' : 'aspect-3/2'
                }`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes={featured ? '(max-width: 1280px) 100vw, 1280px' : '(max-width: 768px) 100vw, 33vw'}
                  priority={i < 2}
                  className="object-cover object-[50%_60%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden="true"
                  className="absolute right-4 bottom-4 w-10 h-10 rounded-full bg-white/90 text-ink flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
                  </svg>
                </span>
              </button>
              <figcaption className="mt-4 flex items-baseline gap-3">
                <span className="text-xs font-semibold tracking-[0.14em] text-dojo tnum">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={`font-display font-semibold leading-snug ${featured ? 'text-xl lg:text-2xl' : 'text-lg'}`}>
                  {p.caption}
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-10 touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onClick={close}
        >
          <button type="button" aria-label="Close" onClick={close} className={`${btn} top-4 right-4`}>
            ×
          </button>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className={`${btn} left-3 sm:left-6 top-1/2 -translate-y-1/2`}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className={`${btn} right-3 sm:right-6 top-1/2 -translate-y-1/2`}
          >
            ›
          </button>

          <figure className="max-w-full max-h-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="100vw"
              priority
              className="w-auto h-auto max-w-full max-h-[80vh] object-contain"
            />
            <figcaption className="mt-4 text-center text-white/80 text-sm">
              {current.caption}
              <span className="ml-3 text-white/40 tnum">
                {(index ?? 0) + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
