import type { Metadata } from 'next';
import './globals.css';

import Footer from './components/Footer/Footer';
import NavigationBar from './components/Navigation/NavigationBar';



export const metadata: Metadata = {
  title: '2DIGITS case',
  description: 'Welcome to the 2DIGITS case',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`m-auto`}>
        <NavigationBar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
