"use client";

import { useEffect, useRef } from 'react';

type Props = {
  tone: 'success' | 'error';
  title: string;
  body: string;
  actionLabel: string;
  onClose: () => void;
};

/** Confirmation dialog shown after a form submit. Closes on Escape and moves
 *  focus to the dismiss button so keyboard users are not left behind. */
export default function FormModal({ tone, title, body, actionLabel, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const success = tone === 'success';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="form-modal-title"
      className="fixed inset-0 z-100 flex items-center justify-center bg-steel/80 backdrop-blur-sm p-4"
    >
      <div className="bg-white rounded-md shadow-lift max-w-md w-full p-8 lg:p-10 text-center">
        <span
          aria-hidden="true"
          className={`inline-flex w-14 h-14 rounded-full items-center justify-center mb-6 ${
            success ? 'bg-dojo-soft text-dojo' : 'bg-bone-deep text-ink'
          }`}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d={success ? 'M5 13l4 4L19 7' : 'M6 18L18 6M6 6l12 12'}
            />
          </svg>
        </span>

        <h2 id="form-modal-title" className="font-display font-extrabold text-2xl lg:text-3xl mb-4">
          {title}
        </h2>
        <p className="text-ink-soft leading-relaxed mb-8">{body}</p>

        <button
          ref={closeRef}
          onClick={onClose}
          className="w-full bg-dojo text-white font-semibold py-4 rounded-md hover:bg-dojo-deep transition-colors duration-200 cursor-pointer"
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
}
