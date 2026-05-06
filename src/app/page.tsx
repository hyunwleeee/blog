'use client';

import { getRepoIssues } from '@apis/github';
/* import About from '@components/About'; */
/* import ContanctMe from '@components/ContactMe'; */
import Introduce from '@components/Introduce';
import Issues from '@components/Issues';
/* import Projects from '@components/Projects'; */
import { info } from '@constants/info';
import { type IssueType } from '@types';
import { withAuth } from '@utils/withAuth';

export default async function Page() {
  {
    /*const issues = await withAuth<IssueType[]>(options =>
    getRepoIssues(info.username, info.repo, 1, 10, options),
  );*/
  }

  return (
    <main>
      {/*<Introduce />*/}
      {/*<Issues issues={issues} />*/}
      {/*<About />*/}
      {/*<Projects />*/}
      {/*<ContanctMe />*/}
    </main>
  );
}
