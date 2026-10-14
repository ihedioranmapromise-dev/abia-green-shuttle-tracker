'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

const BEYOND = [
  {
    title: 'Fleet Operations Console',
    line: 'Dispatch, maintenance scheduling, driver management.',
  },
  {
    title: 'Revenue Reconciliation Dashboard',
    line: 'Real-time fare collection and route profitability.',
  },
  {
    title: 'Citizen Feedback Channel',
    line: 'Complaints, lost items, driver ratings — one intake.',
  },
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Slide09Offer() {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-8 md:space-y-10">
      <motion.header {...fade(0.15)} className="space-y-3">
        <h2 className="text-3xl md:text-5xl font-medium leading-tight">
          Beyond this app.
        </h2>
        <p className="text-sm md:text-base text-muted max-w-xl leading-relaxed">
          The same team, the same tools, applied to what comes next.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 gap-3 md:gap-4">
        {BEYOND.map((b, i) => (
          <motion.div
            key={b.title}
            {...fade(0.35 + i * 0.15)}
            className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 md:px-6 md:py-5"
          >
            <div className="text-fg font-medium text-sm md:text-base">{b.title}</div>
            <div className="text-muted text-xs md:text-sm mt-1 leading-relaxed">{b.line}</div>
          </motion.div>
        ))}
      </div>

      <motion.div {...fade(0.85)} className="flex flex-col sm:flex-row gap-3 pt-2">
        <a
          href={`mailto:${CONTACT.email}`}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-fg hover:border-accent/40 hover:bg-accent/5 transition-all"
        >
          <Mail className="h-4 w-4" />
          Email
        </a>
        <a
          href={CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-accent hover:bg-accent/20 transition-all"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </motion.div>

      <motion.p {...fade(1)} className="text-xs text-muted/80 leading-relaxed pt-1 max-w-2xl">
        Available for scoped engagements with the Ministry, its agencies, and state-owned transport operations.
      </motion.p>
    </div>
  );
}
