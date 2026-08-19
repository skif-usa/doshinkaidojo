"use client";

import { useEffect, useRef } from 'react';

/**
 * Tracks when a form became interactive in the visitor's browser, so the server
 * action can reject submissions that arrive impossibly fast.
 *
 * The value is held in a ref rather than a hidden input for two reasons: the
 * pages are statically generated, so a render-time timestamp would be frozen at
 * build time; and `form.reset()` after a successful submit would blank a hidden
 * field, silently breaking every submission after the first.
 *
 * Call `stamp(formData)` before invoking the action, and `restamp()` once a
 * submission succeeds so a second enquiry starts a fresh clock.
 */
export function useFormTimestamp() {
  const mountedAt = useRef(0);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  return {
    stamp: (formData: FormData) => formData.set('formTs', String(mountedAt.current)),
    restamp: () => {
      mountedAt.current = Date.now();
    },
  };
}
