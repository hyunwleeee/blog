import type { IssuesType } from '@/types';

export const getIssueLabels = (issue: IssuesType) => {
  return issue.labels
    .map(label => (typeof label === 'string' ? label : label.name))
    .filter(label => label !== '');
};
