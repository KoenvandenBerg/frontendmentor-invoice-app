import Sidebar from '@/components/sidebar/Sidebar';
import './globals.css';
import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Invoice App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.className} flex flex-col desktop:flex-row bg-off-white dark:bg-blue-very-dark transition-colors duration-500`}
      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
