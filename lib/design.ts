/**
 * Which visual design the site renders.
 *
 *   'sumi'    — the new design (washi paper, sumi ink, vermilion seal). Default.
 *   'classic' — the original steel / bone / red design, unchanged.
 *
 * Switch by setting NEXT_PUBLIC_SITE_DESIGN=classic in `.env.local` (or in the
 * hosting provider's environment variables) and restarting / rebuilding.
 * Both designs live in this one codebase; only the look changes, never the content.
 */
export type SiteDesign = 'sumi' | 'classic';

export const design: SiteDesign = process.env.NEXT_PUBLIC_SITE_DESIGN === 'classic' ? 'classic' : 'sumi';

export const isSumi = design === 'sumi';
