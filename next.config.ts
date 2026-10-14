import type { NextConfig } from 'next';
import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
  register: true,
  disable: process.env.NODE_ENV === 'development',
  workboxOptions: {
    skipWaiting: true,
    clientsClaim: true,
  },
});

const nextConfig: NextConfig = {
  devIndicators: false,
  // @ducanh2912/next-pwa injects webpack config. Next 16 uses Turbopack by
  // default and refuses to build if webpack config exists without an
  // explicit (even empty) turbopack config. This empty object acknowledges
  // it. The service worker still runs via the PWA plugin's own build step.
  turbopack: {},
};

export default withPWA(nextConfig);
