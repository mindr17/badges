import './globals.css';

// import '@/styles/normalize.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';

import store from '@/store/store';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Beautiful badges in a few clicks',
  description: 'Badges for Github profile, personal website, etc',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Provider store={store}>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}
