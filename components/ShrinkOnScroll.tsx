'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

type Props = {
  src: string;
  alt: string;
  title: string;
  text: string;
  cta?: { label: string; href: string };
};

// The artwork is 3:2, so the finished card on a phone uses that shape and nobody is cropped.
const IMAGE_RATIO = 1.5;

const clamp = (n: number, a = 0, b = 1) => Math.min(b, Math.max(a, n));
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * A photo that starts large and shrinks into a rounded card as you scroll through the section, with
 * its caption fading in underneath. Sticky and scroll-driven; a plain card for reduced motion.
 */
export default function ShrinkOnScroll({ src, alt, title, text, cta }: Props) {
  const outer = useRef<HTMLDivElement>(null);
  const pane = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const caption = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = outer.current;
    const frame = pane.current;
    const box = card.current;
    const cap = caption.current;
    if (!el || !frame || !box || !cap) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;

    const apply = (e: number) => {
      const small = window.innerWidth < 768;
      const W = frame.clientWidth;
      const H = frame.clientHeight;
      const room = cap.offsetHeight + 40; // caption + gap always fits below the card

      // Start: nearly the whole pane. End: a rounded card.
      const w0 = W;
      const h0 = Math.min(H * 0.92, H - room);
      const w1 = small ? W * 0.92 : W * 0.68;
      const h1 = small ? Math.min(w1 / IMAGE_RATIO, H - room) : Math.min(H * 0.62, H - room);

      box.style.width = `${w0 - (w0 - w1) * e}px`;
      box.style.height = `${h0 - (h0 - h1) * e}px`;
      box.style.borderRadius = `${e * (small ? 24 : 36)}px`;

      const c = clamp((e - 0.5) / 0.5);
      cap.style.opacity = String(c);
      cap.style.transform = `translateY(${(1 - c) * 20}px)`;
    };

    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const travel = r.height - window.innerHeight;
      const p = travel > 0 ? clamp(-r.top / travel) : 1;
      apply(ease(clamp(p / 0.7)));
    };

    if (reduced) {
      apply(1);
      cap.style.opacity = '1';
      cap.style.transform = 'none';
      return;
    }

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
  }, []);

  return (
    <div ref={outer} className="relative h-[190svh] md:h-[230svh] motion-reduce:h-auto">
      <div
        ref={pane}
        className="sticky top-[var(--nav-h)] h-[calc(100svh-var(--nav-h))] motion-reduce:static motion-reduce:h-[85svh] flex flex-col items-center justify-center gap-6 overflow-hidden"
      >
        <div ref={card} className="relative w-full h-[70%] overflow-hidden bg-bone-deep shrink-0">
          <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
        </div>

        <div ref={caption} className="text-center px-5 max-w-md" style={{ opacity: 0 }}>
          <h2 className="font-display font-semibold text-2xl lg:text-4xl">{title}</h2>
          <p className="text-ink-soft mt-2">{text}</p>
          {cta && (
            <Link href={cta.href} className="link-draw inline-block mt-3 font-medium">
              {cta.label} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
