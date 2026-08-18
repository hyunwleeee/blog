import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import Header from '@components/Header';
import { ThemeProvider, type Theme } from '@contexts/theme.context';
import { dmSansFont } from '@styles/font';
import '@styles/globals.css';

export const metadata: Metadata = {
  title: "hyunwlee's blog",
  description: '주니어 프론트엔드 개발자 이현우의 블로그입니다.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const savedTheme = cookieStore.get('theme')?.value;
  const theme: Theme = savedTheme === 'dark' ? 'dark' : 'light';

  return (
    <html lang="ko" className="scrollbar-hide" data-theme={theme}>
      <body className={dmSansFont.className}>
        <ThemeProvider initialTheme={theme}>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
