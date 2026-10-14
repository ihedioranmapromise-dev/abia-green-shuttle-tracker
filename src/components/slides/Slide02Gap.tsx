'use client';

import { motion } from 'framer-motion';
import { Search, Wallet, BarChart3 } from 'lucide-react';

const items = [
  { icon: Search, title: 'Commuters', line: "Can't see where buses are." },
  { icon: Wallet, title: 'Cardholders', line: 'Must find an agent to check balance.' },
  { icon: BarChart3, title: 'Government', line: 'No real-time fleet visibility.' },
];

export function Slide02Gap() {
  return (
    <div className="space-y-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-5xl font-medium text-center"
      >
        The gap
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
          >
            <item.icon className="h-6 w-6 text-accent mb-5" strokeWidth={2} />
            <div className="text-fg font-medium mb-2">{item.title}</div>
            <div className="text-muted text-sm leading-relaxed">{item.line}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}