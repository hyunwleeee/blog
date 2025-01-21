import LinkPrimatives from 'next/link';
import React from 'react';

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  redirectType?: 'hard' | 'soft';
  href: string;
  passHref?: boolean;
  scroll?: boolean;
};

const DEFAULT_REDIRECT_TYPE = 'soft';
const DEFAULT_PASS_HREF = false;
const DEFAULT_SCROLL = false;

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      href,
      redirectType = DEFAULT_REDIRECT_TYPE,
      passHref = DEFAULT_PASS_HREF,
      scroll = DEFAULT_SCROLL,
      ...props
    },
    ref,
  ) => {
    if (redirectType === 'hard')
      return (
        <a href={href} ref={ref} {...props}>
          {children}
        </a>
      );

    return (
      <LinkPrimatives
        href={href}
        ref={ref}
        passHref={passHref}
        scroll={scroll}
        {...props}
      >
        {children}
      </LinkPrimatives>
    );
  },
);

Link.displayName = 'Link';

export default Link;
