'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/issues', label: 'Issues' },
];

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className="mt-4 tablet:mt-6 laptop:mt-10">
      <ul className="text-white text-sm tablet:text-lg laptop:text-xl desktop:text-2xl flex flex-row w-full justify-center gap-8">
        {links.map(link => (
          <li key={link.href}>
            <Link className="relative" href={link.href}>
              {link.href === path && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full block h-[2px] w-full bg-white"
                />
              )}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
