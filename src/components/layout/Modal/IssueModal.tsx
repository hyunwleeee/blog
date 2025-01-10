'use client';

import { XMarkIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import Carousel from '@components/Carousel';
import TileLink from '@components/Carousel/TileLink';
import { Card, CardTitle } from '@components/commons/Card';
import type { IssueType } from '@types';

function IssueModal({
  issues,
  children,
}: PropsWithChildren<{ issues: IssueType[] }>) {
  const router = useRouter();

  function handleBackdropClick() {
    router.back();
  }

  function handleBackdropKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape':
        router.back();
        return;
      default:
        return;
    }
  }

  useEffect(() => {
    document.documentElement.classList.add('overflow-hidden');
    window.addEventListener('keydown', handleBackdropKeyDown);

    return () => {
      document.documentElement.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', handleBackdropKeyDown);
    };
  }, []);

  return (
    <div className="w-full fixed inset-0 flex justify-center gap-4 bg-black/50 backdrop-blur-sm">
      <div className="absolute top-10 bg-transparent w-[70vw]">
        <button
          className="flex justify-center items-center w-10 h-10 bg-white float-right rounded-full"
          onClick={handleBackdropClick}
        >
          <XMarkIcon className="size-6 text-slate-900" />
        </button>
      </div>
      <div className="absolute top-24 text-black bg-primary/20 rounded-xl w-[70vw] h-24 overflow-auto scrollbar-hide">
        <Carousel>
          {issues.map(({ title, id, number }) => (
            <TileLink href={`/issues/${number}`} key={id}>
              <Card>
                <CardTitle>{title}</CardTitle>
              </Card>
            </TileLink>
          ))}
        </Carousel>
      </div>
      <div className="rounded-xl text-black absolute top-52 bg-white w-[70vw] h-[70vh] overflow-scroll scrollbar-hide">
        {children}
      </div>
    </div>
  );
}

export default IssueModal;
