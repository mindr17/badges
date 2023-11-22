'use client';

import './globals.css';

// import '@/styles/normalize.css';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';

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
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}

// ('use client');

// import './globals.css';

// // import '@/styles/normalize.css';
// import { Inter } from 'next/font/google';
// import { Provider } from 'react-redux';

// import Hero from '@/shared/hero/hero';
// import Selected from '@/shared/selected/selected';
// import store from '@/store/store';

// import s from './layout.module.css';

// const inter = Inter({ subsets: ['latin'] });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang='en'>
//       <Provider store={store}>
//         <body className={`${inter.className} ${s.body}`}>
//           <div className={s.container}>
//             <Hero />
//             <Selected />
//             <div className={s.children}>{children}</div>
//           </div>
//         </body>
//       </Provider>
//     </html>
//   );
// }
