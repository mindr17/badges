import { BadgeType } from '@/types/types';

export const tickerBadges: BadgeType[] = [
  {
    title: 'React',
    hex: '61DAFB',
    source:
      'https://github.com/facebook/create-react-app/blob/282c03f9525fdf8061ffa1ec50dce89296d916bd/test/fixtures/relative-paths/src/logo.svg',
    aliases: {
      dup: [
        {
          title: 'React Native',
          source: 'https://reactnative.dev',
        },
      ],
    },
  },
  {
    title: 'Angular',
    hex: '0F0F11',
    source: 'https://angular.dev/press-kit',
    guidelines: 'https://angular.dev/press-kit',
    license: {
      type: 'CC-BY-4.0',
    },
  },
  {
    title: 'Vue.js',
    hex: '4FC08D',
    source:
      'https://github.com/vuejs/art/blob/a1c78b74569b70a25300925b4eacfefcc143b8f6/logo.svg',
    guidelines:
      'https://github.com/vuejs/art/blob/a1c78b74569b70a25300925b4eacfefcc143b8f6/README.md',
    license: {
      type: 'CC-BY-NC-SA-4.0',
    },
  },
  {
    title: 'Next.js',
    hex: '000000',
    source: 'https://nextjs.org',
  },
  {
    title: 'Astro',
    hex: 'BC52EE',
    source: 'https://astro.build/press',
  },
  {
    title: 'Node.js',
    hex: '339933',
    source: 'https://nodejs.org/en/about/resources/',
    guidelines: 'https://nodejs.org/en/about/resources/',
  },
  {
    title: 'NestJS',
    hex: 'E0234E',
    source: 'https://nestjs.com',
  },
  {
    title: 'Fastify',
    hex: '000000',
    source:
      'https://github.com/fastify/graphics/blob/91e8a3d4754807de3b69440f66c72a737a5fde94/fastify-1000px-square-02.svg',
  },
  {
    title: 'Laravel',
    hex: 'FF2D20',
    source:
      'https://github.com/laravel/art/tree/5a8325b064634b900f25dbb6f1cafd888b2d2211',
  },
  {
    title: 'Symphony',
    hex: '0098FF',
    source: 'https://symphony.com',
  },
];
