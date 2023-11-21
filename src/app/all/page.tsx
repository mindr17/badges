import { Metadata } from 'next';

import { FRONTEND_URL } from '@/config';
import All from '@/views/all/all';

import image from '../../../public/og.png';

const title = 'Beautiful badges in a few clicks';
const description =
  'Badges for Github profile, personal website, etc';

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(FRONTEND_URL),
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

export default All;
