import dayjs from 'dayjs';
import Link from 'next/link';
import { getRepoIssues } from '@apis/github';
import Footer from '@components/Footer';
import { info } from '@constants/info';
import type { IssueType } from '@types';
import { getIssueLabels } from '@utils/getIssueLabels';
import { withAuth } from '@utils/withAuth';

function getExcerpt(body: string | null | undefined) {
  const paragraph = (body ?? '')
    .split(/\n\s*\n/)
    .find(section => section.trim().length > 0);

  if (!paragraph) return '';

  const text = paragraph
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[#_*`>~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  return `${text.slice(0, 180)}${text.length > 180 ? '…' : ''}`;
}

export default async function IssuesPage() {
  const issues = await withAuth<IssueType[]>(options =>
    getRepoIssues(info.username, info.repo, 1, 10, {
      ...options,
      signal: AbortSignal.timeout(5_000),
    }),
  );

  return (
    <main className="mx-auto w-[calc(100%-32px)] max-w-[640px] border-x border-border px-5">
      <section aria-labelledby="articles-heading" className="pt-12">
        <header>
          <h1
            id="articles-heading"
            className="flex items-end gap-3 text-preset-2 text-neutral-700 dark:text-neutral-0"
          >
            My Articles
            <span
              aria-hidden="true"
              className="mb-2 h-[3px] w-10 bg-blue-500"
            />
          </h1>
          <p className="mt-1.5 max-w-[600px] text-preset-5 text-neutral-600 dark:text-neutral-400">
            Below are all my recent blog posts. Click on any title to read the
            full article.
          </p>
        </header>

        <ol className="mt-6 divide-y divide-border border-y border-border">
          {issues.map(issue => {
            const category = getIssueLabels(issue)[0];
            const excerpt = getExcerpt(issue.body);

            return (
              <li key={issue.id} className="py-5">
                <article>
                  <Link
                    href={`/issues/${issue.number}`}
                    className="group block rounded-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
                  >
                    <h2 className="text-preset-5 text-neutral-700 transition-colors group-hover:text-blue-800 dark:text-neutral-0 dark:group-hover:text-blue-500">
                      {issue.title}
                    </h2>

                    <div className="mt-2 flex flex-wrap items-baseline gap-2 text-neutral-600 dark:text-neutral-400">
                      <time
                        dateTime={issue.created_at}
                        className="text-preset-8-italic"
                      >
                        {dayjs(issue.created_at).format('MMMM D, YYYY')}
                      </time>
                      {category && (
                        <span
                          className="text-preset-8"
                          aria-label={`카테고리: ${category}`}
                        >
                          <span aria-hidden="true">— </span>
                          {category}
                        </span>
                      )}
                    </div>

                    {excerpt && (
                      <p className="mt-2 line-clamp-2 text-preset-7 text-neutral-600 dark:text-neutral-400">
                        {excerpt}
                      </p>
                    )}
                  </Link>
                </article>
              </li>
            );
          })}
        </ol>
      </section>

      <Footer />
    </main>
  );
}
