'use client';

import { MessageCircle } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

export function WhatsAppFloat() {
  return (
    <a
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-bg shadow-lg shadow-accent/30 transition-transform hover:scale-110 active:scale-95"
    >
      <span
        className="absolute inset-0 rounded-full bg-accent opacity-15"
        style={{ animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite' }}
      />
      <MessageCircle className="h-6 w-6 relative" strokeWidth={2.5} />
    </a>
  );
}
