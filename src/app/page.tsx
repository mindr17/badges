import image from '../../public/og.png';
// import Image from 'next/image';

// import Hero from '@/shared/hero/hero';
// import Selected from '@/shared/selected/selected';
// import CategoriesList from '@/views/home/categories-list/categories-list';

const title = 'Beautiful badges in a few clicks';
const description =
  'Badges for Github profile, personal website, etc';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: image.src,
      },
    ],
  },
};

import { Metadata } from 'next';

import Home from '@/views/home/home';

export default Home;
