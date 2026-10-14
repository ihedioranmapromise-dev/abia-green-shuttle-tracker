'use client';

import { motion } from 'framer-motion';
import { Mail, RotateCcw } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

interface Slide07AskProps {
  onRestart: () => void;
}

export function Slide07Ask({ onRestart }: Slide07AskProps) {
  return (
    <div className="relative flex flex-col items-center text-center max-w-2xl mx-auto">
      {/* Subtle teal atmosphere — no motion, just glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(20,184,166,0.12) 0%, transparent 60%)',
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-fg text-base md:text-lg leading-relaxed md:leading-loose"
      >
        Abia has already built the foundation. The Green Shuttle. The Connect
        Card. The first free electric bus service in the South-East. What
        remains is the layer that connects the people to it. I have started
        building that layer — not for profit, but for the 202,601 passengers
        who have already trusted this system. I am offering to complete it. If
        the state sees value in this work, I am prepared to discuss how we
        bring it home together.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-8 text-accent italic text-sm md:text-base"
      >
        Nke a bụ nke anyị
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="mt-10 flex flex-col sm:flex-row items-center gap-4 text-sm"
      >
        <a
          href={`mailto:${CONTACT.email}`}
          className="flex items-center gap-2 text-muted hover:text-accent transition-colors"
        >
          <Mail className="h-4 w-4" />
          {CONTACT.email}
        </a>
        <button
          onClick={onRestart}
          className="flex items-center gap-2 text-muted hover:text-accent transition-colors"
        >
          <RotateCcw className="h-4 w-4" />
          Replay
        </button>
      </motion.div>
    </div>
  );
}