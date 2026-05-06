import type { Metadata } from 'next';
import Header from '@components/Header';
import { ThemeProvider } from '@contexts/theme.context';
import { dmSansFont } from '@styles/font';
import '@styles/globals.css';

export const metadata: Metadata = {
  title: "hyunwlee's blog",
  description: '주니어 프론트엔드 개발자 이현우의 블로그입니다.',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scrollbar-hide" data-theme="light">
      <body className={dmSansFont.className}>
        <ThemeProvider>
          <Header />
          {children}
          {modal}
        </ThemeProvider>
      </body>
    </html>
  );
}
