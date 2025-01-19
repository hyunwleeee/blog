'use client';

import clsx from 'clsx';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import type { ReactNode } from 'react';

type CarouselProps = {
  children: ReactNode;
  className?: string;
  align?: 'center' | 'start' | 'end';
};

function Carousel({ children, align = 'start', className }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel({ align }, [Autoplay()]);

  return (
    <div
      className={clsx(
        'bg-transparent overflow-hidden w-full h-full',
        className,
      )}
      ref={emblaRef}
    >
      <div className="p-4 flex size-full">{children}</div>
    </div>
  );
}

export default Carousel;
