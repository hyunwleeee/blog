import { LinkIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import './index.css';

function Markdown({ markdown }: { markdown: string }) {
  return (
    <ReactMarkdown
      className="markdown markdown-body size-full"
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        a: ({ href, children }) => (
          <Link
            className="inline-flex items-center gap-1 text-blue-800 underline decoration-blue-500 underline-offset-4 transition-colors hover:text-blue-900 dark:text-blue-500"
            href={href ?? '#'}
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkIcon className="size-4" />
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
              style={vscDarkPlus}
              language={match?.[1]}
              PreTag="div"
              className="markdown-code-block"
              customStyle={{ margin: 0, borderRadius: 12, padding: 20 }}
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
