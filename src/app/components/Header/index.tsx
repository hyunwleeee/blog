'use client';

import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import Navigation from '@components/Navigation';
import ThemeButton from '@components/ThemeButton';
import { item } from './motion';

const LIMIT_SCROLL_Y = 288;

export default function Header() {
  const { scrollY } = useScroll();
  const control = useAnimation();

  useMotionValueEvent(scrollY, 'change', val => {
    if (val > LIMIT_SCROLL_Y) {
      control.start('hidden');
      return;
    }
    control.start('show');
  });

  return (
    <motion.header
      initial="show"
      animate={control}
      variants={item}
      className="h-16 z-20 fixed inset-x-0 top-0 w-full flex justify-center items-center"
    >
      <div className="w-[70vw] flex relative justify-center">
        <Navigation />
        <ThemeButton />
      </div>
    </motion.header>
  );
}
