import dayjs from 'dayjs';
import Link from 'next/link';
import type { IssueType } from '@types';

const fallbackArticles = [
  { title: 'Building a personal blog with Next.js', date: '2025-02-18' },
  { title: 'What I learned about responsive design', date: '2025-02-15' },
  { title: 'A better way to organize design tokens', date: '2025-02-10' },
  { title: 'Small tools that improve my workflow', date: '2025-02-04' },
  { title: 'Notes from my frontend journey', date: '2025-01-29' },
];

export default function LatestArticles({ issues }: { issues: IssueType[] }) {
  const articles = issues.length > 0 ? issues.slice(0, 5) : fallbackArticles;

  return (
    <section
      aria-labelledby="latest-articles"
      className="mt-12 border-t border-border pt-12"
    >
      <h2
        id="latest-articles"
        className="flex items-end gap-3 text-preset-2 text-neutral-700 dark:text-neutral-0"
      >
        Latest Articles
        <span aria-hidden="true" className="mb-2 h-[3px] w-10 bg-blue-500" />
      </h2>

      <ol className="mt-8 space-y-6">
        {articles.map((article, index) => {
          const issue = 'number' in article ? article : null;
          const publishedAt =
            issue?.created_at ?? ('date' in article ? article.date : '');

          return (
            <li key={issue?.id ?? `${article.title}-${index}`}>
              <Link
                href={issue ? `/issues/${issue.number}` : '/issues'}
                className="group block rounded-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
              >
                <span className="text-preset-5 text-neutral-700 transition-colors group-hover:text-blue-800 dark:text-neutral-0 dark:group-hover:text-blue-500">
                  {article.title}
                  {index % 2 === 1 && (
                    <span
                      aria-hidden="true"
                      className="ml-2 inline-block text-base"
                    >
                      ↗
                    </span>
                  )}
                </span>
                <time
                  dateTime={publishedAt}
                  className="mt-1 block text-preset-8-italic text-neutral-600 dark:text-neutral-400"
                >
                  {dayjs(publishedAt).format('MMMM D, YYYY')}
                </time>
              </Link>
            </li>
          );
        })}
      </ol>

      <Link
        href="/issues"
        className="mt-8 inline-block border-b-[3px] border-blue-500 pb-0.5 text-preset-7s text-neutral-700 transition-colors hover:text-blue-800 dark:text-neutral-0 dark:hover:text-blue-500"
      >
        View all articles
      </Link>
    </section>
  );
}
