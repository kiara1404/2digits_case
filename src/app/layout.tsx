import type { Metadata } from 'next';
import { Barlow} from 'next/font/google';

import './globals.css';

import NavigationBar from './components/Navigation/NavigationBar';
import Footer from './components/Footer/Footer';

// const inter = Inter({ subsets: ['latin'] });
const barlow = Barlow({ weight: ['100', '500', '600'] });
// const fira = Fira_Sans({ weight: '200' });

export const metadata: Metadata = {
  title: '2DIGITS case',
  description: 'Welcome to the 2DIGITS case',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`m-auto w-10/12 ${barlow.className}`}>
          <NavigationBar />
        <main className="max-width-7xl">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
