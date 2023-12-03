import { config } from '@/config';

export const getImgSrc = (id: string | undefined): string => {
  const defaultImg = '';

  if (typeof id !== 'string' || !id)
    return `${config.publicApiUrl}/assets/${defaultImg}`;

  return `${config.publicApiUrl}/assets/${id}`;
};
