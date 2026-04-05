import { Outfit } from 'next/font/google';
import localFont from 'next/font/local';

export const outfit = Outfit({ subsets: ['latin'] });

export const dmSansFont = localFont({
  src: [
    {
      path: '../../public/fonts/DMSans-VariableFont_opsz,wght.ttf',
      style: 'normal',
    },
    {
      path: '../../public/fonts/DMSans-Italic-VariableFont_opsz,wght.ttf',
      style: 'italic',
    },
  ],
});

export const pretendardFont = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
});

export const bookkFontMyungjo = localFont({
  src: [
    { path: '../../public/fonts/BookkMyungjo_Light.ttf', weight: '400' },
    { path: '../../public/fonts/BookkMyungjo_Bold.ttf', weight: '700' },
  ],
});
