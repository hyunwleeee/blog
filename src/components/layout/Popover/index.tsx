'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type PropsWithChildren,
} from 'react';
import { cn } from '@utils/cn';

type Side = 'top' | 'bottom' | 'left' | 'right';
type Align = 'start' | 'center' | 'end' | 'stretch';

type PopoverContextValue = {
  open: boolean;
  toggle: () => void;
  close: () => void;
};

const PopoverContext = createContext<PopoverContextValue | null>(null);

function usePopover() {
  const context = useContext(PopoverContext);
  if (!context) throw Error('PopoverContext 안에서 사용해주세요.');

  return context;
}

function Popover({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <PopoverContext.Provider
      value={{
        open,
        toggle: () => setOpen(prev => !prev),
        close: () => setOpen(false),
      }}
    >
      <div
        ref={containerRef}
        className={cn('relative inline-block', className)}
      >
        {children}
      </div>
    </PopoverContext.Provider>
  );
}

function PopoverTrigger({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  const { open, toggle } = usePopover();

  return (
    <button
      type="button"
      aria-expanded={open}
      className={className}
      {...props}
      onClick={toggle}
    >
      {children}
    </button>
  );
}

const sideClasses: Record<Side, string> = {
  top: 'bottom-full mb-2',
  bottom: 'top-full mt-2',
  left: 'right-full mr-2',
  right: 'left-full ml-2',
};

const alignClasses: Record<Side, Record<Align, string>> = {
  top: {
    start: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    end: 'right-0',
    stretch: 'inset-x-0',
  },
  bottom: {
    start: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    end: 'right-0',
    stretch: 'inset-x-0',
  },
  left: {
    start: 'top-0',
    center: 'top-1/2 -translate-y-1/2',
    end: 'bottom-0',
    stretch: 'inset-y-0',
  },
  right: {
    start: 'top-0',
    center: 'top-1/2 -translate-y-1/2',
    end: 'bottom-0',
    stretch: 'inset-y-0',
  },
};

function PopoverContent({
  children,
  className,
  side = 'bottom',
  align = 'center',
}: PropsWithChildren<{ className?: string; side?: Side; align?: Align }>) {
  const { open } = usePopover();

  return (
    <AnimatePresence>
      {open ? (
        <div
          className={cn(
            'absolute z-50',
            sideClasses[side],
            alignClasses[side][align],
          )}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={cn(
              'min-w-max rounded-10 border border-border bg-surface p-2 shadow-lg',
              className,
            )}
          >
            {children}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

export { Popover, PopoverTrigger, PopoverContent, usePopover };
