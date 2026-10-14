'use client';

import { motion } from 'framer-motion';
import { Activity, TrendingUp, Users, Map } from 'lucide-react';
import { ABIA_DATA } from '@/lib/constants';

const metrics = [
  { icon: Activity, label: 'Live fleet', value: '20 / 20' },
  { icon: Users, label: 'Ridership', value: '202,601' },
  { icon: TrendingUp, label: 'Revenue', value: '₦182M+' },
  { icon: Map, label: 'Routes active', value: '3' },
];

export function Slide05Government() {
  return (
    <div className="space-y-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-5xl font-medium text-center"
      >
        For the <span className="text-accent">government</span>.
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
          >
            <m.icon className="h-5 w-5 text-accent mb-3" />
            <div className="text-2xl font-semibold text-fg">{m.value}</div>
            <div className="text-xs text-muted mt-1">{m.label}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
      >
        <div className="text-xs text-muted uppercase tracking-wider mb-4">Route performance</div>
        <div className="space-y-3">
          {ABIA_DATA.routes.map((r, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-fg">{r.from} → {r.to}</span>
                <span className="text-muted">₦{r.fare.toLocaleString()}</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${70 - i * 15}%` }}
                  transition={{ duration: 1, delay: 1.1 + i * 0.15 }}
                  className="h-full bg-accent"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}