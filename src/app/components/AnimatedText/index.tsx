'use client';

import { motion } from 'framer-motion';
import ContactMeButton from '@components/ContactMeButton';
import { container, item } from './motion';
import './index.css';

const tagMap = {
  paragraph: 'p',
  heading2: 'h2',
} as const;

type TagType = keyof typeof tagMap;

const AnimatedCharacters = ({
  text,
  type,
}: {
  text: string;
  type: TagType;
}) => {
  const splitWords = text.split(' ');
  const words = splitWords.map(word => word.split(''));

  words.map(word => {
    return word.push('\u00A0');
  });

  const Tag = tagMap[type];

  return (
    <Tag>
      {words.map((word, wordIndex) => (
        <span key={wordIndex}>
          {word.map((char, charIndex) => (
            <span key={charIndex} className="inline-block overflow-hidden">
              <motion.span className="inline-block" variants={item}>
                {char}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
};

export default function AnimatedText({
  textures,
}: {
  textures: { type: TagType; text: string }[];
}) {
  return (
    <motion.div
      className="animated-text"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {textures.map((item, index) => (
        <AnimatedCharacters
          key={index}
          text={item.text}
          type={item.type as TagType}
        />
      ))}
      <ContactMeButton />
    </motion.div>
  );
}
