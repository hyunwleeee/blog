'use client';

import { AnimatePresence } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { useState, useEffect } from 'react';
import { LoopAnimation } from '@outer_components/widget';

export default function RouterAnimation({ children }: PropsWithChildren) {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showAnimation && <LoopAnimation />}
      </AnimatePresence>
      {!showAnimation && children}
    </>
  );
}
