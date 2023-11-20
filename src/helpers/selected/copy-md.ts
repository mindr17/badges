import { BadgeType } from '@/types/types';

export const copyMd = (badges: BadgeType[]) => {
  const markdown = badges
    .map((badge) => {
      const { title, hex } = badge;

      return `![${title}](https://img.shields.io/badge/${title}-${hex}?style=for-the-badge&logo=${title}&logoColor=${'FFF'})\n`;
    })
    .join('');

  navigator.clipboard.writeText(markdown);
};
