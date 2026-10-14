'use client';

import { motion } from 'framer-motion';
import { AnimatedNumber } from '@/components/AnimatedNumber';
import { ABIA_DATA } from '@/lib/constants';

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Slide01Hook() {
  return (
    <div className="text-center space-y-10">
      <motion.p
        variants={fade}
        initial="hidden"
        animate="show"
        custom={0}
        className="text-muted text-sm md:text-base tracking-[0.3em] uppercase"
      >
        Abia State · Green Shuttle
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <motion.div variants={fade} initial="hidden" animate="show" custom={1}>
          <div className="text-6xl md:text-8xl font-semibold tracking-tight text-fg">
            <AnimatedNumber value={ABIA_DATA.electricBuses} />
          </div>
          <div className="mt-3 text-muted text-sm md:text-base">Electric buses</div>
        </motion.div>

        <motion.div variants={fade} initial="hidden" animate="show" custom={2}>
          <div className="text-6xl md:text-8xl font-semibold tracking-tight text-fg">
            <AnimatedNumber value={ABIA_DATA.passengersToDate} duration={2200} />
          </div>
          <div className="mt-3 text-muted text-sm md:text-base">Passengers</div>
        </motion.div>

        <motion.div variants={fade} initial="hidden" animate="show" custom={3}>
          <div className="text-6xl md:text-8xl font-semibold tracking-tight text-accent">
            0
          </div>
          <div className="mt-3 text-muted text-sm md:text-base">Mobile apps</div>
        </motion.div>
      </div>
    </div>
  );
}