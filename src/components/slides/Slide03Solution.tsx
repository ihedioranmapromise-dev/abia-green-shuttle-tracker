'use client';

import { motion } from 'framer-motion';
import { MapPin, Wallet, PlusCircle, Route } from 'lucide-react';
import { ABIA_DATA } from '@/lib/constants';
import { PhoneFrame } from '@/components/PhoneFrame';

const features = [
  { icon: MapPin, label: 'Track buses live' },
  { icon: Wallet, label: 'Check balance' },
  { icon: PlusCircle, label: 'Top up instantly' },
  { icon: Route, label: 'Plan a route' },
];

export function Slide03Solution() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="space-y-6 md:space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl font-medium leading-tight"
        >
          One app for the<br />
          <span className="text-accent">Green Shuttle.</span>
        </motion.h2>

        <div className="space-y-3 md:space-y-4">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
              className="flex items-center gap-3 md:gap-4 text-fg"
            >
              <f.icon className="h-5 w-5 text-accent shrink-0" />
              <span className="text-base md:text-lg">{f.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-muted text-sm pt-4 border-t border-white/10"
        >
          Starting fare: ₦{ABIA_DATA.routes[2].fare} intra-city
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative mx-auto"
      >
        <PhoneFrame>
          <div className="p-4 md:p-5 space-y-3 md:space-y-4">
            <div className="text-[10px] md:text-xs text-muted tracking-wider uppercase">
              Live · Green Shuttle
            </div>
            <div className="h-32 md:h-40 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 relative overflow-hidden border border-white/10">
              <div className="absolute top-4 left-4 h-2 w-2 rounded-full bg-accent" />
              <div className="absolute bottom-6 right-6 h-2 w-2 rounded-full bg-accent" />
              <svg viewBox="0 0 200 100" className="absolute inset-0 w-full h-full">
                <path
                  d="M20 20 Q 80 60 180 80"
                  stroke="#14B8A6"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="3 3"
                />
              </svg>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[11px] md:text-xs">
                <span className="text-muted">Aba → Umuahia</span>
                <span className="text-accent">On route</span>
              </div>
              <div className="flex justify-between text-[11px] md:text-xs">
                <span className="text-muted">Next: 4 min</span>
                <span className="text-fg">₦800</span>
              </div>
            </div>
          </div>
        </PhoneFrame>
      </motion.div>
    </div>
  );
}
