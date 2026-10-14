/**
 * The slide registry — the deck's table of contents.
 *
 * Why this file exists:
 * - useSlideshow.ts reads SLIDES.length to know when to stop.
 * - page.tsx reads SLIDES to know which component to render for each index.
 * - ProgressBar.tsx reads SLIDES.length to render the right number of ticks.
 * - Adding, removing, or reordering a slide is a one-array edit.
 *
 * The `component` field is a *key*, not an import. This keeps this file
 * free of React imports so it can be read by non-React code (like the
 * progress bar) without pulling in the component tree.
 */

export type SlideId =
  | 'hook'
  | 'gap'
  | 'solution'
  | 'people'
  | 'government'
  | 'vision'
  | 'ask';

export interface SlideConfig {
  /** Stable identifier — used for React keys and analytics. */
  id: SlideId;
  /** Human-readable title — used in the progress bar tooltip. */
  title: string;
  /**
   * Auto-advance duration in milliseconds.
   * `null` means the slide never auto-advances (Slide 7, the ask).
   */
  durationMs: number | null;
}

/**
 * The deck, in order.
 *
 * Durations are tuned to reading speed, not uniformity. Slide 5 has the
 * most content (dashboard mockup), so it gets the longest window. Slide 1
 * needs time for the count-up animation to land. Slide 7 never advances —
 * the viewer must leave it deliberately.
 */
export const SLIDES: SlideConfig[] = [
  { id: 'hook',       title: 'The Hook',           durationMs: 6000 },
  { id: 'gap',        title: 'The Gap',            durationMs: 8000 },
  { id: 'solution',   title: 'The Solution',       durationMs: 8000 },
  { id: 'people',     title: 'For the People',     durationMs: 7000 },
  { id: 'government', title: 'For the Government', durationMs: 9000 },
  { id: 'vision',     title: 'The Vision',         durationMs: 8000 },
  { id: 'ask',        title: 'The Ask',            durationMs: null },
];

/** Convenience — the total number of slides, used all over the place. */
export const SLIDE_COUNT = SLIDES.length;

/** The index of the final slide. Used to decide when to show the Replay button. */
export const LAST_SLIDE_INDEX = SLIDE_COUNT - 1;