'use client';

import { motion } from 'framer-motion';
import { item } from './motion';

export default function ContactMeButton() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact-me');
    if (!contactSection) return;
    scrollTo({
      top: contactSection?.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button variants={item} onClick={handleScrollToContact}>
      Contact Me
    </motion.button>
  );
}
