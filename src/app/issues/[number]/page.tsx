export const dynamicParams = false;

export default async function IssuePage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;

  const { id } = params;

  return <div>{id}</div>;
}
