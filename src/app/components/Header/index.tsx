import Navigation from '@components/Navigation';
import ThemeButton from '@components/ThemeButton';

export default async function Header() {
  return (
    <header className="relative mx-10 tablet:mx-auto tablet:w-[500px] laptop:w-[800px] desktop:w-[1100px]">
      <Navigation />
      <ThemeButton />
    </header>
  );
}
