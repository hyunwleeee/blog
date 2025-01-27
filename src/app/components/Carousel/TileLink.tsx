import Link from 'next/link';
import type { PropsWithChildren } from 'react';

function TileLink({ href, children }: PropsWithChildren<{ href: string }>) {
  return (
    <Link
      href={href}
      className="flex mr-3 p-4 basis-52 size-full bg-slate-300 dark:bg-slate-600 rounded-md items-center justify-center"
    >
      {children}
    </Link>
  );
}

export default TileLink;
