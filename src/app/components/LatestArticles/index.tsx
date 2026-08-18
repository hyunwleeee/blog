'use client';

import dayjs from 'dayjs';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';
import type { IssueType } from '@types';

const fallbackArticles = [
  {
    title: 'Building a personal blog with Next.js',
    date: '2025-02-18',
    excerpt:
      'Notes on turning a small idea into a fast, accessible personal space.',
  },
  {
    title: 'What I learned about responsive design',
    date: '2025-02-15',
    excerpt:
      'Practical lessons from designing layouts that feel natural on every screen.',
  },
  {
    title: 'A better way to organize design tokens',
    date: '2025-02-10',
    excerpt:
      'A simple system for keeping colors, spacing, and typography consistent.',
  },
  {
    title: 'Small tools that improve my workflow',
    date: '2025-02-04',
    excerpt:
      'A collection of tiny tools that remove friction from everyday development.',
  },
  {
    title: 'Notes from my frontend journey',
    date: '2025-01-29',
    excerpt:
      'What I have learned by building, breaking, and rebuilding for the web.',
  },
];

export default function LatestArticles({ issues }: { issues: IssueType[] }) {
  const articles = issues.length > 0 ? issues.slice(0, 5) : fallbackArticles;
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const previewTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openPreview = (index: number, delayed = true) => {
    if (previewTimer.current) clearTimeout(previewTimer.current);
    previewTimer.current = setTimeout(
      () => setPreviewIndex(index),
      delayed ? 300 : 0,
    );
  };

  const closePreview = () => {
    if (previewTimer.current) clearTimeout(previewTimer.current);
    setPreviewIndex(null);
  };

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

          const href = issue ? `/issues/${issue.number}` : '/issues';
          const excerpt = issue?.body
            ? `${issue.body.replace(/[#_*`>\]]/g, '').slice(0, 150)}${issue.body.length > 150 ? '…' : ''}`
            : 'excerpt' in article
              ? article.excerpt
              : '';

          return (
            <li
              key={issue?.id ?? `${article.title}-${index}`}
              className="relative"
              onMouseEnter={() => openPreview(index)}
              onMouseLeave={closePreview}
              onFocus={() => openPreview(index, false)}
              onBlur={event => {
                if (!event.currentTarget.contains(event.relatedTarget))
                  closePreview();
              }}
            >
              <Link
                href={href}
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
                  className="mt-1 block text-preset-8 text-neutral-600 dark:text-neutral-400"
                >
                  {dayjs(publishedAt).format('MMMM D, YYYY')}
                </time>
              </Link>

              <AnimatePresence>
                {previewIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.94, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: 6 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="absolute left-[180px] top-1/2 z-40 hidden w-[360px] -translate-y-1/2 overflow-hidden rounded-12 border border-border bg-neutral-0 shadow-[0_18px_50px_rgba(28,26,25,0.18)] tablet:block dark:bg-neutral-800 dark:shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
                  >
                    <div className="h-1.5 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500" />
                    <div className="p-5">
                      <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue-800 dark:text-blue-500">
                        <span className="size-2 rounded-full bg-green-700" />
                        Article preview
                      </div>
                      <h3 className="text-preset-5 text-neutral-700 dark:text-neutral-0">
                        {article.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-preset-8 text-neutral-600 dark:text-neutral-400">
                        {excerpt}
                      </p>
                      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                        <time
                          dateTime={publishedAt}
                          className="text-sm text-neutral-600 dark:text-neutral-400"
                        >
                          {dayjs(publishedAt).format('MMM D, YYYY')}
                        </time>
                        <Link
                          href={href}
                          className="rounded-6 bg-neutral-700 px-3 py-2 text-sm font-semibold text-neutral-0 transition-colors hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:bg-neutral-0 dark:text-neutral-900 dark:hover:bg-blue-500"
                        >
                          Read article →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
