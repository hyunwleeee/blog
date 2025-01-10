import Link from 'next/link';
import type { PropsWithChildren } from 'react';

function TileLink({ href, children }: PropsWithChildren<{ href: string }>) {
  return (
    <Link
      href={href}
      className="relative flex justify-center items-center basis-52 size-full bg-slate-200 rounded-md"
    >
      {children}
    </Link>
  );
}

export default TileLink;
