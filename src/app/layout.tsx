import type { Metadata } from 'next';
import Header from '@components/Header';
import RouterAnimation from '@components/RouterAnimation';
import '@styles/globals.css';
import { dmSansFont } from '@styles/font';
import { ThemeProvider } from './components/Provider/ThemeProvider';

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
    <html lang="ko" className="scrollbar-hide">
      <body className={dmSansFont.className}>
        <ThemeProvider>
          <Header />
          <RouterAnimation>{children}</RouterAnimation>
          {modal}
        </ThemeProvider>
      </body>
    </html>
  );
}
