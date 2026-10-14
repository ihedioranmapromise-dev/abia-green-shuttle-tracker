'use client';

import { motion } from 'framer-motion';
import { SLIDES } from '@/lib/slides';

interface ProgressBarProps {
  index: number;
  autoplay: boolean;
}

export function ProgressBar({ index, autoplay }: ProgressBarProps) {
  const duration = SLIDES[index]?.durationMs ?? 0;

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 bg-white/5 z-40">
      <motion.div
        key={`${index}-${autoplay}`}
        className="h-full bg-accent"
        initial={{ width: '0%' }}
        animate={{ width: autoplay && duration ? '100%' : '0%' }}
        transition={{ duration: duration / 1000, ease: 'linear' }}
      />
    </div>
  );
}