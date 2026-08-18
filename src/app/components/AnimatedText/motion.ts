import { type Variants } from 'framer-motion';

export const container: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.04,
    },
  },
};

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
