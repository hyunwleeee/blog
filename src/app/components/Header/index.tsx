import Logo from '@components/Logo';
import Navigation from '@components/Navigation';

export default async function Header() {
  return (
    <header className="relative mx-10 tablet:mx-auto tablet:w-[500px] laptop:w-[800px] desktop:w-[1100px]">
      <Logo className="left-2 -top-1 tablet:-top-4 desktop:-top-11" />
      <Navigation />
    </header>
  );
}
