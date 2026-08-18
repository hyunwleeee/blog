'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PopoverTrigger, usePopover } from '@outer_components/layout/Popover';
import MenuCloseIcon from '@svgs/icon-menu-close.svg';
import MenuIcon from '@svgs/icon-menu.svg';
import { cn } from '@utils/cn';

const links = [
  { href: '/', label: 'Home' },
  { href: '/issues', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/newsletter', label: 'Newsletter' },
];

function MenuButton({ className }: { className?: string }) {
  const { open } = usePopover();

  return (
    <PopoverTrigger
      aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
      className={cn(
        'flex size-10 items-center justify-center rounded-10 transition-colors',
        open
          ? 'bg-neutral-700 text-neutral-0 dark:bg-neutral-0 dark:text-neutral-900'
          : 'text-neutral-600 dark:text-neutral-400',
        className,
      )}
    >
      {open ? <MenuCloseIcon /> : <MenuIcon />}
    </PopoverTrigger>
  );
}

function NavLinks({
  orientation = 'vertical',
  className,
}: {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}) {
  const path = usePathname();
  const { close } = usePopover();
  const isVertical = orientation === 'vertical';

  return (
    <ul
      className={cn(
        'flex',
        isVertical ? 'flex-col' : 'flex-row items-center gap-1',
        className,
      )}
    >
      {links.map((link, index) => {
        const isActive =
          link.href === '/' ? path === '/' : path.startsWith(link.href);

        return (
          <li
            key={link.href}
            className={cn(isVertical && index > 0 && 'border-t border-border')}
          >
            <Link
              href={link.href}
              onClick={close}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'block text-preset-8 transition-colors',
                isVertical ? 'px-2 py-3' : 'rounded-10 px-3 py-2',
                isActive
                  ? 'font-semibold text-neutral-900 dark:text-neutral-0'
                  : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-0',
              )}
            >
              <span
                className={cn(
                  'relative inline-block',
                  isActive &&
                    'after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:rounded-full after:bg-blue-700 dark:after:bg-blue-500',
                )}
              >
                {link.label}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export { MenuButton, NavLinks };
