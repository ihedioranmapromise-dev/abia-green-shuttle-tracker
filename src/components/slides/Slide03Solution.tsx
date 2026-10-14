'use client';

import { motion } from 'framer-motion';
import { MapPin, Wallet, PlusCircle, Route } from 'lucide-react';
import { ABIA_DATA } from '@/lib/constants';

const features = [
  { icon: MapPin, label: 'Track buses live' },
  { icon: Wallet, label: 'Check balance' },
  { icon: PlusCircle, label: 'Top up instantly' },
  { icon: Route, label: 'Plan a route' },
];

export function Slide03Solution() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl font-medium leading-tight"
        >
          One app for the<br />
          <span className="text-accent">Green Shuttle.</span>
        </motion.h2>

        <div className="space-y-4">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
              className="flex items-center gap-4 text-fg"
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
          <div className="p-5 space-y-4">
            <div className="text-xs text-muted tracking-wider uppercase">Live · Green Shuttle</div>
            <div className="h-40 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 relative overflow-hidden border border-white/10">
              <div className="absolute top-4 left-4 h-2 w-2 rounded-full bg-accent" />
              <div className="absolute bottom-6 right-6 h-2 w-2 rounded-full bg-accent" />
              <svg viewBox="0 0 200 100" className="absolute inset-0 w-full h-full">
                <path d="M20 20 Q 80 60 180 80" stroke="#14B8A6" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
              </svg>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted">Aba → Umuahia</span>
                <span className="text-accent">On route</span>
              </div>
              <div className="flex justify-between text-xs">
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

export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-64 md:w-72 aspect-[9/19] rounded-[2.5rem] border-2 border-white/15 bg-black p-2 shadow-2xl shadow-accent/10">
      <div className="w-full h-full rounded-[2rem] bg-bg overflow-hidden">{children}</div>
    </div>
  );
}