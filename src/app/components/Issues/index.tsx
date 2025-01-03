'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import IssueCard from '@components/IssueCard';
import { Section } from '@outer_components/layout';
import { bookkFontMyungjo } from '@styles/font';
import { type IssueType } from '@types';

export default function Issues({ issues }: { issues: IssueType[] }) {
  return (
    <Section heading="Issues">
      <motion.ul className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4">
        {issues?.map(issue => (
          <Link
            key={issue.id}
            href={`/issues/${issue.number}`}
            passHref
            className={`aspect-video ${bookkFontMyungjo.className} font-bold text-2xl`}
            scroll={false}
          >
            <IssueCard issue={issue} />
          </Link>
        ))}
      </motion.ul>
    </Section>
  );
}
