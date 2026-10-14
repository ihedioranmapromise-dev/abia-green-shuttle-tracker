'use client';

import { motion } from 'framer-motion';

const STACK = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind',
  'Node.js',
  'React Native',
  'PostgreSQL',
  'Firebase',
  'REST',
  'GraphQL',
];

const CAPABILITIES = [
  'Public web applications',
  'Admin dashboards',
  'Mobile apps',
  'Payment integrations',
  'Mapping & geolocation',
  'Offline-first systems',
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Slide08Profile() {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-7 md:space-y-9">
      <motion.header {...fade(0.15)} className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <motion.h1
              className="text-5xl md:text-7xl font-semibold tracking-tight bg-gradient-to-r from-fg via-accent via-fg to-accent bg-[length:300%_100%] bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%_50%', '300%_50%'] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            >
              Moph
            </motion.h1>

            <motion.a
              href="https://github.com/ihedioranmapromise-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
              whileHover={{ x: 3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="flex h-5 w-5 items-center justify-center rounded-full border border-current text-[9px] font-semibold tracking-tight"
              >
                GH
              </motion.span>
              <span className="text-sm tracking-tight">ihedioranmapromise-dev</span>
            </motion.a>
          </div>

          <div className="flex items-center gap-2 shrink-0 pt-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-xs text-muted tracking-wide uppercase">Available</span>
          </div>
        </div>

        <p className="mt-5 text-base md:text-lg text-fg/85 max-w-xl leading-relaxed">
          I build the digital infrastructure that governments need, and the people deserve.
        </p>
      </motion.header>

      <motion.section {...fade(0.4)} className="space-y-3">
        <h2 className="text-[11px] text-muted tracking-[0.25em] uppercase">Stack</h2>
        <div className="flex flex-wrap gap-2">
          {STACK.map((s) => (
            <span
              key={s}
              className="text-xs md:text-sm rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-fg/80"
            >
              {s}
            </span>
          ))}
        </div>
      </motion.section>

      <motion.section {...fade(0.55)} className="space-y-3">
        <h2 className="text-[11px] text-muted tracking-[0.25em] uppercase">What I build</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm md:text-base text-fg/85">
          {CAPABILITIES.map((c) => (
            <li key={c} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent shrink-0" />
              {c}
            </li>
          ))}
        </ul>
      </motion.section>
    </div>
  );
}
