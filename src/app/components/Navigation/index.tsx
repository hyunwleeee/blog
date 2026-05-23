'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/issues', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/newsletter', label: 'Newsletter' },
];

export default function Navigation() {
  const path = usePathname();

  return (
    <nav>
      <ul className="flex flex-row items-center h-full gap-6 text-preset-8">
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href} className="relative">
              {link.href === path && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full block h-[3px] w-full bg-blue-500"
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
