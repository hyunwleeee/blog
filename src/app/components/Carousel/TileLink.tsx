import Link from 'next/link';
import type { PropsWithChildren } from 'react';

function TileLink({ href, children }: PropsWithChildren<{ href: string }>) {
  return (
    <Link
      href={href}
      className="flex mr-3 basis-52 size-full bg-slate-200 rounded-md items-center justify-center"
    >
      {children}
    </Link>
  );
}

export default TileLink;
