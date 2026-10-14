'use client';

interface PhoneFrameProps {
  children: React.ReactNode;
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="w-48 md:w-72 aspect-[9/19] rounded-[2.5rem] border-2 border-white/15 bg-black p-2 shadow-2xl shadow-accent/10">
      <div className="w-full h-full rounded-[2rem] bg-bg overflow-hidden">{children}</div>
    </div>
  );
}
