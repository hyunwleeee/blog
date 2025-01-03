import clsx from 'clsx';
import type { Metadata } from 'next';
import Header from '@components/Header';
import RouterAnimation from '@components/RouterAnimation';
import '@styles/globals.css';
import { pretendardFont } from '@styles/font';

export const metadata: Metadata = {
  title: 'CodeDummy',
  description: 'CodeDummy 개인 블로그',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html className="scrollbar-hide">
      <body
        className={clsx(pretendardFont.className, 'bg-background text-white')}
      >
        <Header />
        <RouterAnimation>{children}</RouterAnimation>
        {modal}
      </body>
    </html>
  );
}
