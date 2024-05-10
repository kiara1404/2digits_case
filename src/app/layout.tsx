import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';

import './globals.css';

import Footer from './components/Footer/Footer';
import NavigationBar from './components/Navigation/NavigationBar';

const barlow = Barlow({ weight: ['100', '500', '600'] });

export const metadata: Metadata = {
  title: '2DIGITS case',
  description: 'Welcome to the 2DIGITS case',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`m-auto  ${barlow.className}`}>
        <NavigationBar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
