import { getRepoIssues, getRepoLabels } from '@apis/github';
import Issues from '@components/Issues';
import { info } from '@constants/info';
import type { ListLabelsType, IssueType } from '@types';
import { getIssueLabels } from '@utils/getIssueLabels';
import { withAuth } from '@utils/withAuth';

export default async function IssuesPage() {
  const [labels, issues] = await Promise.all([
    withAuth<ListLabelsType>(options =>
      getRepoLabels(info.username, info.repo, options),
    ),
    withAuth<IssueType[]>(options =>
      getRepoIssues(info.username, info.repo, 1, 10, options),
    ),
  ]);

  const groupedIssues = labels.map(label => ({
    labelName: label.name,
    issues: issues.filter(issue => getIssueLabels(issue).includes(label.name)),
  }));

  return (
    <div>
      {groupedIssues.map(({ labelName, issues }) => {
        if (issues.length === 0) return null;
        return (
          <Issues
            key={labelName}
            heading={labelName}
            redirectType="hard"
            issues={issues}
          />
        );
      })}
    </div>
  );
}
