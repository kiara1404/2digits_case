import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';

import './globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Footer from './components/Footer/Footer';
import NavigationBar from './components/Navigation/NavigationBar';
import  Provider  from './lib/provider';

// const inter = Inter({ subsets: ['latin'] });
const barlow = Barlow({ weight: ['100', '500', '600'] });
// const fira = Fira_Sans({ weight: '200' });

const queryClient = new QueryClient();
export const metadata: Metadata = {
  title: '2DIGITS case',
  description: 'Welcome to the 2DIGITS case',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`m-auto  ${barlow.className}`}>
        <NavigationBar />

        <main>
          <Provider>{children}</Provider>
        </main>

        <Footer />
      </body>
    </html>
  );
}
