import Image from 'next/image';
import { MenuButton, NavLinks } from '@components/Navigation';
import ThemeButton from '@components/ThemeButton';
import { Popover, PopoverContent } from '@outer_components/layout/Popover';

export default function Header() {
  return (
    <Popover className="relative mx-auto mt-5 block w-[calc(100%-32px)] max-w-[640px]">
      <header className="flex h-[52px] flex-row justify-between rounded-10 border border-border bg-neutral-0 p-[5px] shadow-[0_6px_10px_rgba(123,123,123,0.03)] transition-colors dark:bg-neutral-800">
        <Image
          src="/images/me.jpg"
          width={40}
          height={40}
          alt="이현우 프로필"
          className="shrink-0 rounded-10"
        />
        <div className="flex flex-row items-center gap-[6px] mobile:gap-5">
          <NavLinks orientation="horizontal" className="hidden tablet:flex" />
          <MenuButton className="tablet:hidden" />
          <ThemeButton />
        </div>
      </header>

      <PopoverContent side="bottom" align="stretch" className="tablet:hidden">
        <NavLinks />
      </PopoverContent>
    </Popover>
  );
}
