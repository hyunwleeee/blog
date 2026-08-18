import { type Variants } from 'framer-motion';

export const item: Variants = {
  hidden: {
    background: 'rgba(31, 29, 29, 0.85)',
    borderBottom: '1px solid #44403b',
    backdropFilter: 'blur(2px)',
  },
  show: {
    background: 'rgba(31, 29, 29, 0)',
    backdropFilter: '',
    borderBottom: '',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};
