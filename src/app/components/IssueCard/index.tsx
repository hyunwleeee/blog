import { MinusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardDescription, CardTitle } from '@components/commons/Card';
import type { IssueType, PropsWithClassName } from '@types';
import { getImageOrTextByLabel, isImage } from '@utils/getImageOrTextByLabel';
import { getIssueLabels } from '@utils/getIssueLabels';
import { item } from './motion';

export default function IssueCard({
  issue,
  className,
}: PropsWithClassName<{ issue: IssueType }>) {
  const label = getIssueLabels(issue).join('');

  return (
    <motion.li
      className={clsx('relative', className)}
      whileTap="tap"
      whileHover="hover"
      variants={item}
    >
      <Card>
        <div
          className={clsx(
            'relative flex items-center justify-center w-full h-40 laptop:h-48 desktop:h-52 rounded-xl font-bold text-4xl laptop:text-5xl text-white',
            {
              ['bg-friendlyGit']: label === 'Git',
              ['bg-friendlyOs']: label === 'OS',
              ['bg-slate-500']: label === 'Frontend',
            },
          )}
        >
          {isImage(getImageOrTextByLabel(label)) ? (
            <Image
              fill
              src={getImageOrTextByLabel(label)}
              alt="git"
              className="absolute p-14"
            />
          ) : (
            getImageOrTextByLabel(label)
          )}
          <div className="bg-background -bottom-5 right-3 absolute size-10 rounded-full overflow-hidden">
            <Image
              src={issue.user?.avatar_url ?? ''}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              alt=""
              className="p-2 object-cover rounded-full"
            />
          </div>
        </div>
        <CardDescription className="mt-2 dark:text-neutral-400 text-neutral-800 font-normal">
          <span className="">{`${issue.user?.login}`}</span>
          <MinusIcon className="inline-block size-5 rotate-90" />
          <span>{dayjs(issue.created_at).format('YYYY.MM.DD')}</span>
        </CardDescription>
        <CardTitle className="mt-1.5 mb-2 text-lg font-light">
          {issue.title}
        </CardTitle>
      </Card>
    </motion.li>
  );
}
