export const COLORS = {
  bg: '#0F0F1A',
  fg: '#F5F5F7',
  muted: '#9CA3AF',
  accent: '#14B8A6',
} as const;

export const CONTACT = {
  email: 'ihedioranmapromise@gmail.com',
  whatsappNumber: '2349161919164',
  whatsappUrl: 'https://wa.me/2349161919164',
} as const;

export const ABIA_DATA = {
  electricBuses: 20,
  passengersToDate: 202601,
  launchMonth: 'March 2026',
  card: {
    launch: 'March 2026',
    topUpFeeNaira: 50,
    firstCardFree: true,
    hasExpiry: false,
    paymentSound: 'Welcome',
  },
  routes: [
    { from: 'Aba', to: 'Umuahia', fare: 800, type: 'inter-city' },
    { from: 'Umuahia', to: 'Ohafia', fare: 1000, type: 'inter-city' },
    { from: 'Intra-city', to: 'Intra-city', fare: 150, type: 'intra-city' },
  ],
  existingMobileApps: 0,
} as const;

export const SITE = {
  title: 'Abia Green Shuttle Tracker',
  description:
    'A proposal to the Abia State Ministry of Transport — the digital layer for the Green Shuttle and Abia Connect Card.',
  url: 'https://abia-green-shuttle-tracker.vercel.app',
  author: 'Promise Ihedioranma',
} as const;