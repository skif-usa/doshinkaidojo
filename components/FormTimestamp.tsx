"use client";

import { useEffect, useState } from 'react';

/**
 * Records when the form became interactive in the visitor's browser.
 *
 * The server action rejects submissions that arrive implausibly fast, which
 * filters bots that scrape a form and post it back immediately. The stamp has
 * to be written on mount rather than during render: these pages are statically
 * generated, so a render-time Date.now() would be frozen at build time and
 * every real submission would look hours old.
 */
export default function FormTimestamp() {
  const [ts, setTs] = useState('');

  useEffect(() => {
    setTs(String(Date.now()));
  }, []);

  return <input type="hidden" name="formTs" value={ts} readOnly />;
}
