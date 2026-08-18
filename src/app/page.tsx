import Introduce from '@components/Introduce';

export default function Page() {
  return (
    <main className="mx-auto min-h-[calc(100vh-72px)] w-[calc(100%-32px)] max-w-[640px] border-x border-border px-5 tablet:px-5">
      <Introduce />
    </main>
  );
}
