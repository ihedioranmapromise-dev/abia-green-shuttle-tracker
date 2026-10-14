'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { SLIDES, LAST_SLIDE_INDEX } from '@/lib/slides';

interface UseSlideshowOptions {
  onSlideChange?: (index: number) => void;
}

export function useSlideshow({ onSlideChange }: UseSlideshowOptions = {}) {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const callbackRef = useRef(onSlideChange);

  // Keep the latest callback without re-triggering effects.
  useEffect(() => {
    callbackRef.current = onSlideChange;
  }, [onSlideChange]);

  const goTo = useCallback((next: number) => {
    setIndex((current) => {
      const clamped = Math.max(0, Math.min(LAST_SLIDE_INDEX, next));
      if (clamped !== current) callbackRef.current?.(clamped);
      return clamped;
    });
  }, []);

  const next = useCallback(() => {
    setIndex((current) => {
      const nextIndex = Math.min(LAST_SLIDE_INDEX, current + 1);
      if (nextIndex !== current) callbackRef.current?.(nextIndex);
      return nextIndex;
    });
  }, []);

  const prev = useCallback(() => {
    setIndex((current) => {
      const prevIndex = Math.max(0, current - 1);
      if (prevIndex !== current) callbackRef.current?.(prevIndex);
      return prevIndex;
    });
  }, []);

  const restart = useCallback(() => {
    setAutoplay(true);
    setIndex(0);
  }, []);

  const pause = useCallback(() => setAutoplay(false), []);

  // Auto-advance — clears on every index/autoplay change, plus on unmount.
  useEffect(() => {
    if (!autoplay) return;
    const duration = SLIDES[index]?.durationMs;
    if (!duration) return;

    timerRef.current = setTimeout(() => {
      next();
    }, duration);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [index, autoplay, next]);

  // Keyboard: arrows, space, R to restart.
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
  };
}
