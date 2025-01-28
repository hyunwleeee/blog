import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { getRepoIssue } from '@apis/github';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@components/commons/Card';
import { info } from '@constants/info';
import Markdown from '@outer_components/widget/Markdown';
import { type IssueType } from '@types';
import { getIssueLabels } from '@utils/getIssueLabels';
import { withAuth } from '@utils/withAuth';

export const dynamicParams = false;

export default async function IssuePage(props: {
  params: Promise<{ number: string }>;
}) {
  const params = await props.params;

  const { number: issue_number } = params;

  const issue = await withAuth<IssueType>(options =>
    getRepoIssue(info.username, info.repo, Number(issue_number), options),
  );

  return (
    <>
      <div className="absolute z-20 left-1/2 -translate-x-1/2 mt-4 mx-auto h-10 w-[70vw]">
        <Link
          href="/issues"
          className="flex justify-center items-center w-10 h-full bg-white float-right rounded-full mr-8"
        >
          <ArrowLeftIcon className="size-6 text-slate-900" />
        </Link>
      </div>

      <div className="absolute z-10 inset-0 bg-transparent text-black">
        <Card className="relative w-screen">
          <div className="backdrop-blur-lg w-full h-72">
            {/*<img src={bgImg} className="absolute -z-10 inset-0 size-full object-cover -z-10" alt="" />*/}
            <CardHeader className="bg-black/60 backdrop-blur-lg flex flex-col justify-end h-full mx-auto w-[70vw]">
              <CardTitle className="text-4xl text-white font-light">
                {issue.title}
              </CardTitle>
              <span className="mt-2 text-white">
                {getIssueLabels(issue).join(', ')}
              </span>
              <div className="mt-6 flex items-center gap-2">
                <div className="relative size-6 rounded-full overflow-hidden">
                  <Image
                    src={issue.user?.avatar_url ?? ''}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    alt=""
                    className="object-cover"
                  />
                </div>
                <CardDescription className="text-white">
                  <span className="mr-1">{`by ${issue.user?.login}`}</span>
                  <span>{dayjs(issue.created_at).format('YYYY.MM.DD')}</span>
                </CardDescription>
              </div>
            </CardHeader>
          </div>
          <CardContent className="mx-auto w-[70vw]">
            <Markdown markdown={issue.body ?? ''} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
