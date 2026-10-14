'use client';

import { motion } from 'framer-motion';

const routes = [
  { d: 'M80 200 Q 150 150 240 120', delay: 0.4, label: 'Aba → Umuahia' },
  { d: 'M240 120 Q 320 90 400 60', delay: 0.8, label: 'Umuahia → Ohafia' },
  { d: 'M120 240 Q 200 220 280 210', delay: 1.2, label: 'Intra-city' },
];

export function Slide06Vision() {
  return (
    <div className="space-y-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-5xl font-medium leading-tight"
      >
        One app. Every route. <span className="text-accent">Connected.</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mx-auto max-w-2xl"
      >
        <svg viewBox="0 0 500 320" className="w-full h-auto">
          <path
            d="M60 80 Q 180 40 280 100 Q 380 160 460 130 Q 480 260 380 280 Q 240 300 120 260 Q 60 200 60 80 Z"
            fill="rgba(20,184,166,0.05)"
            stroke="rgba(20,184,166,0.2)"
            strokeWidth="1"
          />
          {routes.map((r, i) => (
            <g key={i}>
              <motion.path
                d={r.d}
                fill="none"
                stroke="#14B8A6"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: r.delay, ease: 'easeInOut' }}
              />
              <motion.circle
                r="5"
                fill="#14B8A6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: r.delay + 1.4 }}
              >
                <animateMotion dur="3s" repeatCount="indefinite" path={r.d} begin={`${r.delay + 1.5}s`} />
              </motion.circle>
            </g>
          ))}
        </svg>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        className="text-muted text-sm md:text-base"
      >
        Every Green Shuttle. Every route. Every commuter.
      </motion.p>
    </div>
  );
}