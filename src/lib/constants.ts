/**
 * Single source of truth for every constant in the deck.
 *
 * Why this file exists:
 * - Colors live here so Framer Motion and inline SVG can reference them
 *   as JS values. Tailwind reads them from CSS variables in globals.css.
 *   They must stay in sync — change both if you change a color.
 * - Abia data lives here so the Ministry's numbers are never scattered
 *   across components. When they publish new figures, edit one place.
 * - Contact info lives here so WhatsAppFloat and Slide 7 read the same
 *   source. No chance of the email in one place and a different email
 *   in another.
 */

// ─── Palette ────────────────────────────────────────────────────────────────
// Matches the @theme block in src/app/globals.css.
// Framer Motion and SVG need these as strings, not CSS vars.
export const COLORS = {
  bg: '#0F0F1A',
  fg: '#F5F5F7',
  muted: '#9CA3AF',
  accent: '#14B8A6',
} as const;

// ─── Contact ────────────────────────────────────────────────────────────────
// The WhatsApp link is intentionally the full wa.me URL so the float and
// Slide 7 can use it directly without string concatenation.
export const CONTACT = {
  email: 'ihedioranmapromise@gmail.com',
  whatsappNumber: '2349161919164',
  whatsappUrl: 'https://wa.me/2349161919164',
} as const;

// ─── Abia Green Shuttle — public data ───────────────────────────────────────
// Sourced from the Abia State Government's March 2026 announcements.
// If any figure changes, update it here. Every slide reads from this object.
export const ABIA_DATA = {
  // Fleet + ridership
  electricBuses: 20,
  passengersToDate: 202601, // Count-up animates from 0 to this number
  launchMonth: 'March 2026',

  // Abia Connect Card facts
  card: {
    launch: 'March 2026',
    topUpFeeNaira: 50,
    firstCardFree: true,
    hasExpiry: false,
    paymentSound: 'Welcome', // The tap-and-pay confirmation sound
  },

  // Route fares in Naira — used in Slides 3 and 5
  routes: [
    { from: 'Aba', to: 'Umuahia', fare: 800, type: 'inter-city' },
    { from: 'Umuahia', to: 'Ohafia', fare: 1000, type: 'inter-city' },
    { from: 'Intra-city', to: 'Intra-city', fare: 150, type: 'intra-city' },
  ],

  // The claim that anchors the whole deck — zero existing mobile apps
  existingMobileApps: 0,
} as const;

// ─── Site metadata ──────────────────────────────────────────────────────────
// Used in src/app/layout.tsx for <title>, <meta>, and Open Graph tags.
// The OG description is what appears in WhatsApp previews when the link
// is pasted — keep it short, sovereign, and factual.
export const SITE = {
  title: 'Abia Green Shuttle Tracker',
  description:
    'A proposal to the Abia State Ministry of Transport — the digital layer for the Green Shuttle and Abia Connect Card.',
  url: 'https://abia-green-shuttle-tracker.vercel.app',
  author: 'Promise Ihedioranma',
} as const;