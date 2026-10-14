'use client';

import { motion } from 'framer-motion';

interface SlideShellProps {
  children: React.ReactNode;
  slideKey: number;
}

export function SlideShell({ children, slideKey }: SlideShellProps) {
  return (
    <motion.section
      key={slideKey}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      className="absolute inset-0 overflow-y-auto overflow-x-hidden overscroll-contain"
    >
      {/* Padding accounts for top progress bar, bottom dots, and side arrows */}
      <div className="min-h-full flex items-center justify-center px-6 py-20 md:px-20 md:py-24">
        <div className="w-full max-w-6xl mx-auto">{children}</div>
      </div>
    </motion.section>
  );
}
