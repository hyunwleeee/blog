import type { Variants } from 'framer-motion';

export const item: Variants = {
  hidden: {
    y: 100,
  },
  show: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 10,
      mass: 0.5,
    },
  },
};
