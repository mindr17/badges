import { BadgeType } from '@/types/types';

export const copyHtml = (badges: BadgeType[]) => {
  const html = badges
    .map((badge) => {
      const { title, hex } = badge;

      return `<img src='https://img.shields.io/badge/${title}-${hex}?style=for-the-badge&logo=${title}&logoColor=${'FFF'}' alt='${title} badge'/>\n`;
    })
    .join('')
    .trim();

  const htmlWithAd = `${html}  \nMore at <a href='https://badges.bio'>badges.bio</a>`;

  navigator.clipboard.writeText(htmlWithAd);
};
