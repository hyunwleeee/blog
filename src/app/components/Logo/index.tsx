import clsx from 'clsx';
import Image from 'next/image';
import { type PropsWithClassName } from '@types';

export default function Logo({ className }: PropsWithClassName) {
  return (
    <>
      <h1 className="sr-only">CodeDummy</h1>
      <div
        className={clsx(
          'absolute size-10 tablet:size-20 desktop:size-40',
          className,
        )}
      >
        <Image
          fill
          src="/svgs/logo.svg"
          alt="codedummy logo"
          className="absolute"
          priority
        />
      </div>
    </>
  );
}
