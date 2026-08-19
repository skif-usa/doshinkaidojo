/** Shared input/label classes so the three dojo forms stay identical. */

export const labelClass = 'block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint mb-2.5';

export const fieldClass =
  'w-full bg-white border border-line rounded-md px-4 py-3.5 text-[15px] text-ink placeholder:text-ink-faint ' +
  'focus:outline-none focus:border-dojo focus:ring-1 focus:ring-dojo transition-colors';

/** Same field, on the tinted bone background. */
export const fieldOnBoneClass = fieldClass.replace('bg-white', 'bg-white');
