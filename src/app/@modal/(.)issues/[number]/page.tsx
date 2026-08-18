import dayjs from 'dayjs';
import Image from 'next/image';
import Markdown from '@/components/widget/Markdown';
import { getRepoIssue } from '@apis/github';
import { info } from '@constants/info';
import IssueModal from '@outer_components/layout/Modal/IssueModal';
import type { IssueType } from '@types';
import { getIssueLabels } from '@utils/getIssueLabels';
import { withAuth } from '@utils/withAuth';

export default async function IssueModalPage(props: {
  params: Promise<{ number: string }>;
}) {
  const { number } = await props.params;
  const issue = await withAuth<IssueType>(options =>
    getRepoIssue(info.username, info.repo, Number(number), options),
  );
  const labels = getIssueLabels(issue).slice(0, 2);

  return (
    <IssueModal>
      <article>
        <header className="border-b border-border px-6 pb-6 pt-7 tablet:px-10 tablet:pb-8 tablet:pt-9">
          {labels.length > 0 && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-blue-800 dark:text-blue-500">
              {labels.join(' · ')}
            </p>
          )}
          <h1
            id="issue-modal-title"
            className="max-w-[650px] pr-12 text-preset-3 text-neutral-700 dark:text-neutral-0 tablet:text-preset-2"
          >
            {issue.title}
          </h1>

          <div className="mt-5 flex items-center gap-3 text-preset-8 text-neutral-600 dark:text-neutral-400">
            <div className="relative size-8 overflow-hidden rounded-full bg-surface">
              <Image
                src={issue.user?.avatar_url ?? '/images/me.jpg'}
                fill
                sizes="32px"
                alt=""
                className="object-cover"
              />
            </div>
            <p>
              <span className="font-medium text-neutral-700 dark:text-neutral-0">
                {issue.user?.login}
              </span>
              <span aria-hidden="true"> · </span>
              <time dateTime={issue.created_at}>
                {dayjs(issue.created_at).format('MMMM D, YYYY')}
              </time>
            </p>
          </div>
        </header>

        <div className="px-6 py-8 tablet:px-10 tablet:py-10">
          <Markdown markdown={issue.body ?? ''} />
        </div>
      </article>
    </IssueModal>
  );
}
