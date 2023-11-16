import { config } from '@/config';

export const getImgSrc = (id: string | undefined): string => {
  const defaultImg = '';

  if (typeof id !== 'string' || !id)
    return `${config.fetchUrl}/assets/${defaultImg}`;

  return `${config.fetchUrl}/assets/${id}`;
};
