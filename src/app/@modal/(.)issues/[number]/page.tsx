import type { CSSProperties } from 'react';
import Markdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import remarkGfm from 'remark-gfm';
import { getRepoIssue } from '@apis/github';
import { info } from '@constants/info';
import { type IssueType } from '@types';
import { withAuth } from '@utils/withAuth';
import { Modal } from './modal';
import 'github-markdown-css/github-markdown.css';

export default async function IssueModal(props: {
  params: Promise<{ number: string }>;
}) {
  const params = await props.params;

  const { number: issue_number } = params;

  const issue = await withAuth<IssueType>(options =>
    getRepoIssue(info.username, info.repo, Number(issue_number), options),
  );

  return (
    <Modal>
      <Markdown
        className="markdown markdown-body size-full"
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter
                language={match[1]}
                style={gruvboxDark as { [key: string]: CSSProperties }}
                PreTag="div"
              >
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
        {issue.body}
      </Markdown>
    </Modal>
  );
}
