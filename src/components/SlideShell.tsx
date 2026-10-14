'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface SlideShellProps {
  children: React.ReactNode;
  slideKey: number;
}

export function SlideShell({ children, slideKey }: SlideShellProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reset internal scroll on every slide change — prevents the "stuck slide"
  // bug when a returning visitor's browser tries to restore scroll position.
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    window.scrollTo(0, 0);
  }, [slideKey]);

  return (
    <div
      ref={scrollRef}
      className="absolute inset-0 overflow-y-auto overflow-x-hidden overscroll-contain"
    >
      <motion.div
        key={slideKey}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        className="min-h-full flex items-center justify-center px-6 py-20 md:px-20 md:py-24"
      >
        <div className="w-full max-w-6xl mx-auto">{children}</div>
      </motion.div>
    </div>
  );
}
