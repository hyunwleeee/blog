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
            className="inline-flex items-center underline text-blue-500"
            href={href}
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkIcon className="size-4 text-blue-500" />
            {children}
          </Link>
        ),
        code({ inline, className, children, ...props }) {
          if (inline) {
            return (
              <code
                className="rounded bg-gray-200 px-1 py-0.5 text-sm text-red-600"
                {...props}
              >
                {children}
              </code>
            );
          }

          const match = /language-(\w+)/.exec(className || '');

          return match ? (
            <SyntaxHighlighter style={vscDarkPlus} PreTag="div">
              {String(children).replace(/\n$/, '')}
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
