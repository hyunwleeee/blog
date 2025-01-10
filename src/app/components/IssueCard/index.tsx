import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { IssueType, PropsWithClassName } from '@types';
import { item } from './motion';

export default function IssueCard({
  issue,
  className,
}: PropsWithClassName<{ issue: IssueType }>) {
  return (
    <motion.li
      className={clsx(
        "h-full flex justify-center items-center text-black bg-[url('/images/texture1.png')] bg-cover bg-center",
        className,
      )}
      whileTap="tap"
      whileHover="hover"
      variants={item}
    >
      <h3 className="text-xs tablet:text-lg laptop:text-xl">{issue.title}</h3>
    </motion.li>
  );
}
