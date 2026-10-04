"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { upcomingEvents } from '@/lib/events';

const SHOW_DELAY_MS = 1500;
const SCROLL_TRIGGER_PX = 80;

/** Announces the next upcoming event once per browser session. */
export default function EventPopup() {
  const event = upcomingEvents[0];
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Show after a short delay, or as soon as the visitor starts scrolling.
  useEffect(() => {
    if (!event) return;
    const key = `event-popup-seen:${event.id}`;
    try {
      if (sessionStorage.getItem(key)) return;
    } catch {}

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      cleanup();
      setOpen(true);
      try {
        sessionStorage.setItem(key, '1');
      } catch {}
    };
    const onScroll = () => {
      if (window.scrollY > SCROLL_TRIGGER_PX) show();
    };
    const timer = window.setTimeout(show, SHOW_DELAY_MS);
    window.addEventListener('scroll', onScroll, { passive: true });
    function cleanup() {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    }
    return cleanup;
  }, [event]);

  // Close on Escape, lock page scroll, and move focus into the dialog.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!event || !open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-steel/70"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-popup-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md max-h-[92vh] overflow-y-auto bg-white rounded-md shadow-lift"
      >
        <button
          ref={closeRef}
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-2 right-2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-ink text-xl leading-none hover:text-dojo transition-colors cursor-pointer"
        >
          ×
        </button>

        <div className="relative aspect-3/4 bg-steel">
          <Image
            src={event.image}
            alt={`Poster for ${event.title}`}
            fill
            sizes="(max-width: 448px) 100vw, 448px"
            className="object-contain"
            priority
          />
        </div>

        <div className="p-6">
          <p className="label text-ink-faint mb-2">{event.date}</p>
          <h2 id="event-popup-title" className="font-display font-extrabold text-2xl leading-tight mb-5">
            {event.title}
          </h2>
          <Link
            href="/events"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2.5 bg-dojo text-white font-semibold px-6 py-3.5 rounded-md hover:bg-dojo-deep transition-colors duration-200"
          >
            See event details
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
