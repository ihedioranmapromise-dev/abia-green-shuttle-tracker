'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavArrowsProps {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

export function NavArrows({ index, total, onPrev, onNext }: NavArrowsProps) {
  const showPrev = index > 0;
  const showNext = index < total - 1;

  return (
    <>
      {showPrev && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous slide"
          className="fixed left-3 md:left-6 top-1/2 -translate-y-1/2 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-muted backdrop-blur-sm transition-all hover:border-accent/40 hover:text-accent hover:bg-accent/5"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} />
        </motion.button>
      )}

      {showNext && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next slide"
          className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-muted backdrop-blur-sm transition-all hover:border-accent/40 hover:text-accent hover:bg-accent/5"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} />
        </motion.button>
      )}
    </>
  );
}
