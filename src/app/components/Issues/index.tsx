'use client';

import { motion } from 'framer-motion';
import Link from '@components/commons/Link';
import IssueCard from '@components/IssueCard';
import { Section } from '@outer_components/layout';
import { type IssueType } from '@types';

const DEFAULT_HEADING = 'Issues';
const DEFAULT_REDIRECT_TYPE = 'soft';

export default function Issues({
  heading = DEFAULT_HEADING,
  issues,
  redirectType = DEFAULT_REDIRECT_TYPE,
}: {
  heading?: string;
  issues: IssueType[];
  redirectType?: 'hard' | 'soft';
}) {
  return (
    <Section heading={heading}>
      <motion.ul className="grid grid-cols-1 mobile:grid-cols-2 laptop:grid-cols-3 gap-4">
        {issues?.map(issue => (
          <Link
            redirectType={redirectType}
            key={issue.id}
            href={`/issues/${issue.number}`}
            className={`aspect-video font-bold text-2xl`}
          >
            <IssueCard issue={issue} />
          </Link>
        ))}
      </motion.ul>
    </Section>
  );
}
