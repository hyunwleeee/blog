'use client';

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  oneLight,
  vscDarkPlus,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import useTheme from '@hooks/useTheme';
import './index.css';

function Markdown({ markdown }: { markdown: string }) {
  const theme = useTheme();

  return (
    <ReactMarkdown
      className="markdown markdown-body size-full"
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        a: ({ href, children }) => (
          <Link
            className="text-inherit underline decoration-[3px] decoration-blue-500 underline-offset-4 transition-colors hover:text-blue-800 dark:hover:text-blue-500"
            href={href ?? '#'}
            rel="noopener noreferrer"
            target="_blank"
          >
            {children}
          </Link>
        ),
        pre: ({ children }) => <>{children}</>,
        code({ className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          const value = String(children);
          const isBlock = Boolean(match) || value.includes('\n');

          return isBlock ? (
            <SyntaxHighlighter
              language={match?.[1]}
              style={theme === 'dark' ? vscDarkPlus : oneLight}
              PreTag="div"
              className="markdown-code-block"
            >
              {value.replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
}

export default Markdown;
