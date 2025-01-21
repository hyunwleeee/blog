import Image from 'next/image';
import Markdown from '@/components/widget/Markdown';
import { getRepoIssue, getRepoIssues } from '@apis/github';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@components/commons/Card';
import { info } from '@constants/info';
import IssueModal from '@outer_components/layout/Modal/IssueModal';
import { type IssueType } from '@types';
import { withAuth } from '@utils/withAuth';

export default async function IssueModalPage(props: {
  params: Promise<{ number: string }>;
}) {
  const params = await props.params;

  const { number: issue_number } = params;

  const [issue, issues] = await Promise.all([
    withAuth<IssueType>(options =>
      getRepoIssue(info.username, info.repo, Number(issue_number), options),
    ),
    withAuth<IssueType[]>(options =>
      getRepoIssues(info.username, info.repo, 1, 10, options),
    ),
  ]);

  return (
    <IssueModal
      issues={issues.filter(issue => String(issue.number) != issue_number)}
    >
      <Card className="relative">
        <CardHeader className="z-10 bg-white dark:bg-background border-b dark:border-black border-gray-200 fixed w-[70vw] items-center rounded-t-lg">
          <div className="relative mx-auto w-9 h-9 float-left rounded-full overflow-hidden mr-2">
            <Image
              src={issue.user?.avatar_url ?? ''}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              alt=""
              className="object-cover"
            />
          </div>
          <CardTitle className="dark:text-white">{issue.title}</CardTitle>
          <CardDescription className="dark:text-white">
            <span className="mr-1">{issue.user?.login}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="absolute top-20 w-[70vw] overflow-hidden">
          <Markdown markdown={issue.body ?? ''} />
        </CardContent>
      </Card>
    </IssueModal>
  );
}
