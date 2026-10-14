'use client';

import { useEffect, useState } from 'react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
}

const FORMATTER = new Intl.NumberFormat('en-NG');

export function AnimatedNumber({ value, duration = 1800, className }: AnimatedNumberProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setDisplay(value);
      return;
    }

    let raf: number;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setDisplay(Math.floor(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);

  return <span className={className}>{FORMATTER.format(display)}</span>;
}
