import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
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
            <div className="markdown-code-block" data-language={match?.[1]}>
              <code>{value.replace(/\n$/, '')}</code>
            </div>
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
