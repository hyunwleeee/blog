import dayjs from 'dayjs';
import { getRepoIssue } from '@apis/github';
import Footer from '@components/Footer';
import { info } from '@constants/info';
import Markdown from '@outer_components/widget/Markdown';
import type { IssueType } from '@types';
import { withAuth } from '@utils/withAuth';

export default async function IssuePage(props: {
  params: Promise<{ number: string }>;
}) {
  const { number } = await props.params;
  const issue = await withAuth<IssueType>(options =>
    getRepoIssue(info.username, info.repo, Number(number), {
      ...options,
      signal: AbortSignal.timeout(5_000),
    }),
  );

  const sections = (issue.body ?? '').split(/\n\s*\n/);
  const intro = sections.shift() ?? '';
  const content = sections.join('\n\n');

  return (
    <main className="mx-auto w-[calc(100%-32px)] max-w-[640px] border-x border-border px-5">
      <article className="pt-12">
        <header>
          <h1 className="text-preset-2 text-neutral-700 dark:text-neutral-0 tablet:text-preset-1">
            {issue.title}
          </h1>
          <time
            dateTime={issue.created_at}
            className="mt-3 block text-preset-7 italic text-neutral-600 dark:text-neutral-400"
          >
            Published {dayjs(issue.created_at).format('MMMM D, YYYY')}
          </time>

          {intro && (
            <div className="mt-3 text-preset-6 text-neutral-600 dark:text-neutral-400">
              <Markdown markdown={intro} />
            </div>
          )}
        </header>

        <div className="my-8 h-px bg-border" />

        <div className="text-neutral-600 dark:text-neutral-400">
          <Markdown markdown={content} />
        </div>
      </article>

      <Footer />
    </main>
  );
}
