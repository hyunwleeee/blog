import { type Variants } from 'framer-motion';

export const container: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
  fadeout: {
    opacity: 0,
  },
};

export const item: Variants = {
  hidden: {
    y: '100px',
  },
  show: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  fadeout: {
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
    y: '100px',
  },
};
