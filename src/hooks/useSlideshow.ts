'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { SLIDES, LAST_SLIDE_INDEX } from '@/lib/slides';

interface UseSlideshowOptions {
  /** Called whenever the slide changes. Useful for analytics or resetting internal slide state. */
  onSlideChange?: (index: number) => void;
}

export function useSlideshow({ onSlideChange }: UseSlideshowOptions = {}) {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Core navigation — clamps to bounds, fires callback.
  const goTo = useCallback(
    (next: number) => {
      setIndex((current) => {
        const clamped = Math.max(0, Math.min(LAST_SLIDE_INDEX, next));
        if (clamped !== current) onSlideChange?.(clamped);
        return clamped;
      });
    },
    [onSlideChange]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const restart = useCallback(() => {
    setAutoplay(true);
    goTo(0);
  }, [goTo]);

  // Manual interaction cancels autoplay for the rest of the session.
  const pause = useCallback(() => setAutoplay(false), []);

  // Auto-advance — reads duration from the slide registry.
  useEffect(() => {
    if (!autoplay) return;
    const duration = SLIDES[index]?.durationMs;
    if (!duration) return;

    timerRef.current = setTimeout(() => {
      setIndex((current) => {
        const nextIndex = current + 1;
        if (nextIndex > LAST_SLIDE_INDEX) return current;
        onSlideChange?.(nextIndex);
        return nextIndex;
      });
    }, duration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, autoplay, onSlideChange]);

  // Keyboard: arrows, space, escape, R to restart.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        pause();
        next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        pause();
        prev();
      } else if (e.key.toLowerCase() === 'r') {
        restart();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, pause, restart]);

  // Touch: swipe left/right on mobile.
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;
      const delta = e.changedTouches[0].clientX - touchStartX.current;
      touchStartX.current = null;
      if (Math.abs(delta) < 50) return; // ignore small drags
      pause();
      if (delta < 0) next();
      else prev();
    },
    [next, prev, pause]
  );

  return {
    index,
    total: SLIDES.length,
    isLast: index === LAST_SLIDE_INDEX,
    isFirst: index === 0,
    autoplay,
    goTo,
    next,
    prev,
    restart,
    pause,
    onTouchStart,
    onTouchEnd,
  };
}