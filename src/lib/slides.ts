export type SlideId =
  | 'hook'
  | 'gap'
  | 'solution'
  | 'people'
  | 'government'
  | 'vision'
  | 'ask'
  | 'profile';

export interface SlideConfig {
  id: SlideId;
  title: string;
  durationMs: number | null;
}

export const SLIDES: SlideConfig[] = [
  { id: 'hook',       title: 'The Hook',            durationMs: 6000 },
  { id: 'gap',        title: 'The Gap',             durationMs: 8000 },
  { id: 'solution',   title: 'The Solution',        durationMs: 8000 },
  { id: 'people',     title: 'For the People',      durationMs: 7000 },
  { id: 'government', title: 'For the Government',  durationMs: 9000 },
  { id: 'vision',     title: 'The Vision',          durationMs: 8000 },
  { id: 'ask',        title: 'The Ask',             durationMs: null },
  { id: 'profile',    title: 'The Builder',         durationMs: null },
];

export const SLIDE_COUNT = SLIDES.length;
export const LAST_SLIDE_INDEX = SLIDE_COUNT - 1;
