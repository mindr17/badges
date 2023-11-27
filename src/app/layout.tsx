'use client';

import './globals.css';

// import '@/styles/normalize.css';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';

import { GOOGLE_ANALYTICS_ID } from '@/config';
import GoogleAnalytics from '@/shared/google-analytics/google-analytics';
import store from '@/store/store';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Provider store={store}>
        <body className={inter.className}>
          <GoogleAnalytics ga_id={GOOGLE_ANALYTICS_ID} />
          {children}
        </body>
      </Provider>
    </html>
  );
}
