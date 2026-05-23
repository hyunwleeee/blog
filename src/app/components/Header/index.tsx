'use client';

import Image from 'next/image';
import Navigation from '@components/Navigation';
import ThemeButton from '@components/ThemeButton';

export default function Header() {
  return (
    <header className="flex flex-row justify-between h-14 border-border p-[6px] max-w-[640px] mx-auto rounded-10 border">
      <Image
        src="/images/me.jpg"
        width={40}
        height={40}
        alt="me"
        className="shrink-0 rounded-10"
      />
      <div className="flex flex-row gap-5">
        <Navigation />
        <ThemeButton />
      </div>
    </header>
  );
}
