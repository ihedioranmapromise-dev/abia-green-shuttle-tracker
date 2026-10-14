'use client';

import { motion } from 'framer-motion';

interface SlideShellProps {
  children: React.ReactNode;
  /** Slide index — used by Framer Motion to know when to swap content. */
  slideKey: number;
}

export function SlideShell({ children, slideKey }: SlideShellProps) {
  return (
    <motion.section
      key={slideKey}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 flex items-center justify-center px-6 md:px-12"
    >
      <div className="w-full max-w-6xl mx-auto">{children}</div>
    </motion.section>
  );
}