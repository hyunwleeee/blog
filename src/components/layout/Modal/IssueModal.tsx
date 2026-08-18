'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import type { MouseEvent, PropsWithChildren } from 'react';
import { useEffect } from 'react';

function IssueModal({ children }: PropsWithChildren) {
  const router = useRouter();

  const close = () => router.back();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') router.back();
    };

    document.documentElement.classList.add('overflow-hidden');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.documentElement.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) close();
  };

  return (
    <div
      role="presentation"
      onMouseDown={handleBackdropClick}
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm tablet:p-8"
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="issue-modal-title"
        className="relative flex max-h-[calc(100dvh-32px)] w-full max-w-[800px] flex-col overflow-hidden rounded-20 border border-border bg-neutral-0 text-neutral-700 shadow-2xl dark:bg-neutral-800 dark:text-neutral-0 tablet:max-h-[calc(100dvh-64px)]"
      >
        <button
          type="button"
          onClick={close}
          aria-label="글 닫기"
          className="absolute right-4 top-4 z-20 flex size-10 items-center justify-center rounded-full border border-border bg-neutral-0 text-neutral-700 shadow-lg transition-colors hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:bg-neutral-800 dark:text-neutral-0 dark:hover:bg-neutral-700"
        >
          <XMarkIcon className="size-5" />
        </button>

        <div className="overflow-y-auto overscroll-contain scrollbar-hide">
          {children}
        </div>
      </section>
    </div>
  );
}

export default IssueModal;
