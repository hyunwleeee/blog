import { getRepoIssues } from '@apis/github';
import Footer from '@components/Footer';
import Introduce from '@components/Introduce';
import LatestArticles from '@components/LatestArticles';
import { info } from '@constants/info';
import type { IssueType } from '@types';
import { withAuth } from '@utils/withAuth';

async function getLatestIssues() {
  try {
    return await withAuth<IssueType[]>(options =>
      getRepoIssues(info.username, info.repo, 1, 5, {
        ...options,
        signal: AbortSignal.timeout(3_000),
      }),
    );
  } catch {
    return [];
  }
}

export default async function Page() {
  const issues = await getLatestIssues();

  return (
    <main className="mx-auto min-h-[calc(100vh-72px)] w-[calc(100%-32px)] max-w-[640px] border-x border-border px-5 tablet:px-5">
      <Introduce />
      <LatestArticles issues={issues} />
      <Footer />
    </main>
  );
}
