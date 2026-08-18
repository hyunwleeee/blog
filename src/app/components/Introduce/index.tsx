import Link from 'next/link';
import FrontendMentorIcon from '@svgs/logo-frontend-mentor.svg';
import GithubIcon from '@svgs/logo-github.svg';
import LinkedinIcon from '@svgs/logo-linkedin.svg';
import XIcon from '@svgs/logo-x.svg';

const socialLinks = [
  {
    href: 'https://x.com/hyunwleeee',
    label: 'X',
    icon: XIcon,
    disabled: true,
  },
  {
    href: 'https://github.com/hyunwleeee',
    label: 'GitHub',
    icon: GithubIcon,
  },
  {
    href: 'https://www.linkedin.com',
    label: 'LinkedIn',
    icon: LinkedinIcon,
    disabled: true,
  },
  {
    href: 'https://www.frontendmentor.io',
    label: 'Frontend Mentor',
    icon: FrontendMentorIcon,
  },
];

export default function Introduce() {
  return (
    <section aria-labelledby="intro-heading" className="pt-12 tablet:pt-16">
      <div className="max-w-[600px]">
        <h1
          id="intro-heading"
          className="text-preset-2 text-neutral-700 dark:text-neutral-0"
        >
          <span className="relative inline-block">
            Hi, I&apos;m Hyunwoo
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-1 -z-10 h-2 rounded-full bg-blue-500"
            />
          </span>{' '}
          👋
        </h1>

        <div className="mt-6 space-y-5 text-preset-7 text-neutral-600 dark:text-neutral-400">
          <p>
            I&apos;m on a journey to become a front-end web developer. I love
            building little projects, trying out new coding techniques, and
            sharing what I learn along the way. When I&apos;m not at my desk,
            you&apos;ll find me reading, hiking through the mountains, or
            challenging myself on rock-climbing walls.
          </p>
          <p>
            I started this blog to document my progress, keep myself
            accountable, and hopefully inspire anyone else who&apos;s learning
            to code. Welcome to my corner of the internet, and thanks for
            stopping by!
          </p>
        </div>

        <ul aria-label="소셜 링크" className="mt-6 flex items-center gap-3">
          {socialLinks.map(({ href, label, icon: Icon, disabled }) => (
            <li key={label}>
              {disabled ? (
                <span
                  aria-label={`${label} (준비 중)`}
                  aria-disabled="true"
                  className="flex size-10 cursor-not-allowed items-center justify-center rounded-10 border border-border bg-[var(--color-bg)] text-neutral-400 opacity-45 grayscale dark:text-neutral-600"
                >
                  <Icon aria-hidden="true" />
                </span>
              ) : (
                <Link
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="group relative flex size-10 items-center justify-center rounded-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-10 border border-border bg-[var(--color-bg)] transition-all group-hover:-translate-y-0.5 group-hover:bg-surface"
                  />
                  <Icon aria-hidden="true" className="relative z-10" />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
