import Link from 'next/link';
import FrontendMentorIcon from '@svgs/logo-frontend-mentor.svg';
import GithubIcon from '@svgs/logo-github.svg';
import LinkedinIcon from '@svgs/logo-linkedin.svg';
import XIcon from '@svgs/logo-x.svg';

const links = [
  { href: 'https://x.com/hyunwleeee', label: 'X', icon: XIcon },
  { href: 'https://github.com/hyunwleeee', label: 'GitHub', icon: GithubIcon },
  { href: 'https://www.linkedin.com', label: 'LinkedIn', icon: LinkedinIcon },
  {
    href: 'https://www.frontendmentor.io',
    label: 'Frontend Mentor',
    icon: FrontendMentorIcon,
  },
];

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-border py-4 text-neutral-600 dark:text-neutral-400">
      <div className="flex flex-col gap-4 mobile:flex-row mobile:items-center mobile:justify-between">
        <p className="text-preset-8">Made with ❤️ and ☕️</p>
        <ul aria-label="푸터 소셜 링크" className="flex items-center gap-4">
          {links.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <Link
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="block transition-colors hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 dark:hover:text-neutral-0"
              >
                <Icon />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
