import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/commons/Card';
import Markdown from '@/components/widget/Markdown';
import { getRepoIssue } from '@apis/github';
import { info } from '@constants/info';
import IssueModal from '@outer_components/layout/Modal/IssueModal';
import { type IssueType } from '@types';
import { withAuth } from '@utils/withAuth';

export default async function IssueModalPage(props: {
  params: Promise<{ number: string }>;
}) {
  const params = await props.params;

  const { number: issue_number } = params;

  const issue = await withAuth<IssueType>(options =>
    getRepoIssue(info.username, info.repo, Number(issue_number), options),
  );

  return (
    <IssueModal>
      <Card className="relative">
        <CardHeader className="border-b border-gray-200 fixed z-10 bg-white w-[70vw] items-center rounded-t-lg">
          <div className="relative mx-auto w-9 h-9 float-left rounded-full overflow-hidden mr-2">
            <Image
              src={issue.user?.avatar_url ?? ''}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              alt=""
              className="object-cover"
            />
          </div>
          <CardTitle>{issue.title}</CardTitle>
          <CardDescription>
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
