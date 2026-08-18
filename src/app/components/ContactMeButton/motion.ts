import type { Variants } from 'framer-motion';

export const item: Variants = {
  hidden: {
    y: 100,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};
