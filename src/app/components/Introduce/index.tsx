import Image from 'next/image';
import type { UserType } from '@/types/github';
import { getUserInfo } from '@apis/github';
import AnimatedText from '@components/AnimatedText';
import { info } from '@constants/info';
import { Section } from '@outer_components/layout';
import { withAuth } from '@utils/withAuth';

export const tagMap = {
  paragraph: 'p',
  heading2: 'h2',
} as const;

export type TagType = keyof typeof tagMap;

export type TexturesType = {
  type: TagType;
  text: string;
}[];

const textures: TexturesType = [
  { type: 'paragraph', text: "Hello, I'm HyunWoo Lee," },
  { type: 'heading2', text: 'Frontend' },
  { type: 'heading2', text: 'Developer' },
];

export default async function Introduce() {
  const whoami = await withAuth<UserType>(options =>
    getUserInfo(info.username, options),
  );
  return (
    <Section>
      <div className="flex flex-row items-center justify-center gap-4 tablet:gap-10 laptop:gap-16 desktop:gap-20">
        <AnimatedText textures={textures} />
        <div className="flex flex-shrink-0 w-[80px] h-[80px] tablet:h-[120px] tablet:w-[120px] laptop:h-[200px] laptop:w-[200px] desktop:h-[300px] desktop:w-[300px] items-center justify-center overflow-hidden rounded-3xl bg-primary">
          <div className="relative aspect-square w-full">
            <Image
              className="absolute"
              fill
              src={'/svgs/avatar.svg'}
              alt={whoami?.login || ''}
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
