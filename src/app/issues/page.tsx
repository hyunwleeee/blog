import { getRepoLabels } from '@apis/github';
import { info } from '@constants/info';
import { type ListLabelsType } from '@types';
import { withAuth } from '@utils/withAuth';

export default async function Issues() {
  const labels = await withAuth<ListLabelsType>(options =>
    getRepoLabels(info.username, info.repo, options),
  );

  return <div>{'helloworld!' + JSON.stringify(labels)}</div>;
}
