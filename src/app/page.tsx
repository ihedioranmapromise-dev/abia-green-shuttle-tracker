'use client';

import { AnimatePresence } from 'framer-motion';
import { useSlideshow } from '@/hooks/useSlideshow';
import { SlideShell } from '@/components/SlideShell';
import { ProgressBar } from '@/components/ProgressBar';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { Slide01Hook } from '@/components/slides/Slide01Hook';
import { Slide02Gap } from '@/components/slides/Slide02Gap';
import { Slide03Solution } from '@/components/slides/Slide03Solution';
import { Slide04People } from '@/components/slides/Slide04People';
import { Slide05Government } from '@/components/slides/Slide05Government';
import { Slide06Vision } from '@/components/slides/Slide06Vision';
import { Slide07Ask } from '@/components/slides/Slide07Ask';
import { SLIDES } from '@/lib/slides';

// Slides 1–6 share the same shape (no props). Slide 7 is handled separately
// because it needs the `onRestart` callback.
const SLIDE_COMPONENTS = [
  Slide01Hook,
  Slide02Gap,
  Slide03Solution,
  Slide04People,
  Slide05Government,
  Slide06Vision,
];

export default function Page() {
  const slideshow = useSlideshow();
  const isLast = slideshow.index === SLIDES.length - 1;
  const CurrentSlide = SLIDE_COMPONENTS[slideshow.index];

  return (
    <main
      className="relative w-full h-[100dvh] overflow-hidden bg-bg text-fg select-none"
      onTouchStart={slideshow.onTouchStart}
      onTouchEnd={slideshow.onTouchEnd}
      onClick={() => slideshow.pause()}
    >
      <ProgressBar index={slideshow.index} autoplay={slideshow.autoplay} />

      <AnimatePresence mode="wait">
        <SlideShell key={slideshow.index} slideKey={slideshow.index}>
          {isLast ? (
            <Slide07Ask onRestart={slideshow.restart} />
          ) : (
            <CurrentSlide />
          )}
        </SlideShell>
      </AnimatePresence>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-40">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={(e) => {
              e.stopPropagation();
              slideshow.pause();
              slideshow.goTo(i);
            }}
            aria-label={`Go to ${s.title}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === slideshow.index ? 'w-8 bg-accent' : 'w-1.5 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      <WhatsAppFloat />
    </main>
  );
}