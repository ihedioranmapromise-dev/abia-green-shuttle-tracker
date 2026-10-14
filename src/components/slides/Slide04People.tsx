'use client';

import { motion } from 'framer-motion';
import { PhoneFrame } from '@/components/PhoneFrame';

export function Slide04People() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mx-auto order-2 md:order-1"
      >
        <PhoneFrame>
          <div className="p-4 md:p-5 space-y-4 md:space-y-5 h-full flex flex-col">
            <div className="text-[10px] md:text-xs text-muted tracking-wider uppercase">
              My card
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-accent/30 to-accent/5 border border-accent/20 p-4 md:p-5 space-y-2">
              <div className="text-[10px] md:text-xs text-muted">Balance</div>
              <div className="text-2xl md:text-3xl font-semibold text-fg">₦4,350</div>
            </div>
            <div className="space-y-2 md:space-y-3 pt-2">
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-muted">Last trip</span>
                <span className="text-fg">Aba → Umuahia</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-muted">Amount</span>
                <span className="text-fg">₦800</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-muted">Status</span>
                <span className="text-accent">Welcome ✓</span>
              </div>
            </div>
            <div className="mt-auto rounded-xl bg-accent text-bg text-center py-2.5 md:py-3 font-medium text-xs md:text-sm">
              Top up ₦50
            </div>
          </div>
        </PhoneFrame>
      </motion.div>

      <div className="space-y-6 md:space-y-8 order-1 md:order-2">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl font-medium leading-tight"
        >
          For the <span className="text-accent">people</span> of Abia.
        </motion.h2>

        <div className="space-y-3 md:space-y-4 text-base md:text-lg">
          {[
            'No more searching for agents.',
            'No more guessing your balance.',
            'One card. One app. One system.',
          ].map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
              className="text-fg/90"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
}
