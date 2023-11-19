import { CategoryType } from '@/types/types';
import Category from '@/views/home/categories-list/category/category';

import s from './categories-list.module.css';

const categories: CategoryType[] = [
  {
    title: 'Frontend',
    badges: [
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
        title: 'Svelte',
        hex: 'FF3E00',
        source:
          'https://github.com/sveltejs/branding/blob/c4dfca6743572087a6aef0e109ffe3d95596e86a/svelte-logo.svg',
        aliases: {
          dup: [
            {
              title: 'Sapper',
              hex: '159497',
              source: 'https://sapper.svelte.dev',
            },
          ],
        },
      },
      {
        title: 'Astro',
        hex: 'BC52EE',
        source: 'https://astro.build/press',
      },
    ],
  },
  {
    title: 'Backend',
    badges: [
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
    ],
  },
  {
    title: 'Languages',
    badges: [
      {
        title: 'TypeScript',
        hex: '3178C6',
        source: 'https://www.typescriptlang.org/branding',
        guidelines: 'https://www.typescriptlang.org/branding',
      },
      {
        title: 'JavaScript',
        hex: 'F7DF1E',
        source:
          'https://github.com/voodootikigod/logo.js/tree/1544bdeed6d618a6cfe4f0650d04ab8d9cfa76d9',
        license: {
          type: 'MIT',
        },
      },
      {
        title: 'Python',
        hex: '3776AB',
        source: 'https://www.python.org/community/logos/',
        guidelines: 'https://www.python.org/community/logos/',
      },
      {
        title: 'C++',
        hex: '00599C',
        source:
          'https://github.com/isocpp/logos/tree/64ef037049f87ac74875dbe72695e59118b52186',
      },
      {
        title: 'Swift',
        hex: 'F05138',
        source: 'https://developer.apple.com/swift/resources/',
        guidelines: 'https://developer.apple.com/swift/resources/',
      },
    ],
  },
  {
    title: 'Styling',
    badges: [
      {
        title: 'CSS3',
        hex: '1572B6',
        source: 'https://www.w3.org/html/logo/',
      },
      {
        title: 'Sass',
        hex: 'CC6699',
        source: 'https://sass-lang.com/styleguide/brand',
        guidelines: 'https://sass-lang.com/styleguide/brand',
        license: {
          type: 'CC-BY-NC-SA-3.0',
        },
      },
      {
        title: 'CSS Modules',
        hex: '000000',
        source:
          'https://github.com/css-modules/logos/blob/32e4717062e4328ed861fa92d5d9cfd47859362f/css-modules-logo.svg',
      },
      {
        title: 'Tailwind CSS',
        hex: '06B6D4',
        source: 'https://tailwindcss.com/brand',
        guidelines: 'https://tailwindcss.com/brand',
      },
      {
        title: 'Material Design',
        hex: '757575',
        source: 'https://material.io/design/',
      },
    ],
  },
  // { title: 'Design' },
  // { title: 'Devops' },
  // { title: 'Productivity' },
];

export default function CategoriesList(): JSX.Element {
  return (
    <div className={s.container}>
      {categories.map((category, index) => {
        return <Category category={category} key={index} />;
      })}
    </div>
  );
}
