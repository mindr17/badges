import { CategoryType } from '@/types/types';

export const categories: CategoryType[] = [
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
        title: 'Next.js',
        hex: '000000',
        source: 'https://nextjs.org',
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
        title: 'C Sharp',
        hex: '512BD4',
        source:
          'https://learn.microsoft.com/training/paths/get-started-c-sharp-part-1',
        aliases: {
          aka: ['C#'],
        },
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
    title: 'Low-level Languages',
    badges: [
      {
        title: 'C',
        hex: 'A8B9CC',
        source:
          'https://commons.wikimedia.org/wiki/File:The_C_Programming_Language_logo.svg',
      },
      {
        title: 'C++',
        hex: '00599C',
        source:
          'https://github.com/isocpp/logos/tree/64ef037049f87ac74875dbe72695e59118b52186',
      },
      {
        title: 'Fortran',
        hex: '734F96',
        source:
          'https://github.com/fortran-lang/fortran-lang.org/blob/5469465d08d3fcbf16d048e651ca5c9ba050839c/assets/img/fortran-logo.svg',
      },
      {
        title: 'Haskell',
        hex: '5D4F85',
        source: 'https://wiki.haskell.org/Thompson-Wheeler_logo',
      },
      {
        title: 'Rust',
        hex: '000000',
        source: 'https://www.rust-lang.org',
        guidelines: 'https://www.rust-lang.org/policies/media-guide',
        license: {
          type: 'CC-BY-SA-4.0',
        },
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
  {
    title: 'Devops',
    badges: [
      {
        title: 'Docker',
        hex: '2496ED',
        source:
          'https://www.docker.com/company/newsroom/media-resources',
      },
      {
        title: 'Netlify',
        hex: '00C7B7',
        source: 'https://www.netlify.com/press/',
        guidelines: 'https://www.netlify.com/press/',
        aliases: {
          dup: [
            {
              title: 'Netlify CMS',
              hex: 'C9FA4B',
              source: 'https://www.netlifycms.org',
            },
          ],
        },
      },
      {
        title: 'NGINX',
        hex: '009639',
        source: 'https://www.nginx.com/press/',
        guidelines: 'https://www.nginx.com/press/',
      },
      {
        title: 'Amazon AWS',
        hex: '232F3E',
        source:
          'https://commons.wikimedia.org/wiki/File:Amazon_Web_Services_Logo.svg',
        aliases: {
          aka: ['AWS'],
        },
      },
      {
        title: 'Vercel',
        hex: '000000',
        source: 'https://vercel.com/design/brands',
        guidelines: 'https://vercel.com/design/brands',
      },
    ],
  },
  {
    title: 'Design',
    badges: [
      {
        title: 'Figma',
        hex: 'F24E1E',
        source: 'https://www.figma.com/using-the-figma-brand/',
        guidelines: 'https://www.figma.com/using-the-figma-brand/',
      },
      {
        title: 'Adobe Illustrator',
        hex: 'FF9A00',
        source: 'https://www.adobe.com/creativecloud.html',
        guidelines:
          'https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/branding_guidelines',
      },
      {
        title: 'Adobe Photoshop',
        hex: '31A8FF',
        source: 'https://www.adobe.com/creativecloud.html',
        guidelines:
          'https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/branding_guidelines',
      },
      {
        title: 'Photopea',
        hex: '18A497',
        source:
          'https://github.com/photopea/photopea/blob/d5c532e8ad8ece246e2ea8646aac7df768407c64/logo.svg',
      },
      {
        title: 'Photobucket',
        hex: '0672CB',
        source: 'https://photobucket.com',
      },
    ],
  },
  {
    title: 'Productivity',
    badges: [
      {
        title: 'Jira',
        hex: '0052CC',
        source: 'https://atlassian.design/resources/logo-library',
        guidelines: 'https://atlassian.design/foundations/logos/',
      },
      {
        title: 'Notion',
        hex: '000000',
        source: 'https://www.notion.so',
      },
      {
        title: 'Miro',
        hex: '050038',
        source: 'https://miro.com',
      },
      {
        title: 'Microsoft Visio',
        hex: '3955A3',
        source:
          'https://developer.microsoft.com/en-us/fluentui#/styles/web/colors/products',
        guidelines:
          'https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks',
        license: {
          type: 'custom',
          url: 'https://aka.ms/fluentui-assets-license',
        },
      },
      {
        title: 'Slides',
        hex: 'E4637C',
        source: 'https://slides.com/about',
      },
    ],
  },
  {
    title: 'Testing',
    badges: [
      {
        title: 'Cypress',
        hex: '17202C',
        source: 'https://cypress.io',
      },
      {
        title: 'Jest',
        hex: 'C21325',
        source: 'https://jestjs.io',
      },
      {
        title: 'Vitest',
        hex: '6E9F18',
        source: 'https://vitest.dev',
      },
      {
        title: 'Testing Library',
        hex: 'E33332',
        source: 'https://testing-library.com',
      },
      {
        title: 'Puppeteer',
        hex: '40B5A4',
        source: 'https://pptr.dev',
      },
    ],
  },
  {
    title: 'Operating systems',
    badges: [
      {
        title: 'Ubuntu',
        hex: 'E95420',
        source: 'https://design.ubuntu.com/resources',
        guidelines: 'https://design.ubuntu.com/brand',
      },
      {
        title: 'macOS',
        hex: '000000',
        source:
          'https://commons.wikimedia.org/wiki/File:MacOS_wordmark_(2017).svg',
      },
      {
        title: 'Windows',
        hex: '0078D4',
        source:
          'https://commons.wikimedia.org/wiki/File:Windows_logo_-_2021_(Black).svg',
        guidelines:
          'https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE1voQq',
      },
      {
        title: 'Red Hat',
        hex: 'EE0000',
        source:
          'https://www.redhat.com/en/about/brand/new-brand/details',
      },
      {
        title: 'Kali Linux',
        hex: '557C94',
        source: 'https://www.kali.org/docs/policy/trademark/',
        guidelines: 'https://www.kali.org/docs/policy/trademark/',
      },
    ],
  },
  {
    title: 'Version control',
    badges: [
      {
        title: 'Git',
        hex: 'F05032',
        source: 'https://git-scm.com/downloads/logos',
        license: {
          type: 'CC-BY-3.0',
        },
      },
      {
        title: 'Mercurial',
        hex: '999999',
        source: 'https://www.mercurial-scm.org/hg-logo/',
        guidelines: 'https://www.mercurial-scm.org/hg-logo/',
        license: {
          type: 'GPL-2.0-or-later',
        },
      },
      {
        title: 'GitHub',
        hex: '181717',
        source: 'https://github.com/logos',
        guidelines: 'https://github.com/logos',
      },
      {
        title: 'Bitbucket',
        hex: '0052CC',
        source: 'https://atlassian.design/resources/logo-library',
        guidelines: 'https://atlassian.design/foundations/logos',
      },
      {
        title: 'GitLab',
        hex: 'FC6D26',
        source: 'https://about.gitlab.com/press/press-kit/',
        guidelines:
          'https://about.gitlab.com/handbook/marketing/corporate-marketing/brand-activation/trademark-guidelines/',
      },
    ],
  },
  {
    title: 'Build tools',
    badges: [
      {
        title: 'Webpack',
        hex: '8DD6F9',
        source: 'https://webpack.js.org/branding',
        guidelines: 'https://webpack.js.org/branding',
        license: {
          type: 'custom',
          url: 'https://js.foundation/about/governance/trademark-policy',
        },
      },
      {
        title: 'Vite',
        hex: '646CFF',
        source: 'https://vitejs.dev',
      },
      {
        title: 'Turbo',
        hex: '5CD8E5',
        source: 'https://turbo.hotwired.dev',
      },
      {
        title: 'gulp',
        hex: 'CF4647',
        source:
          'https://github.com/gulpjs/artwork/blob/4e14158817ac88e9a5c02b3b307e6f630fe222fb/gulp-white-text.svg',
        guidelines: 'https://github.com/gulpjs/artwork',
        license: {
          type: 'CC0-1.0',
        },
      },
      {
        title: 'Grunt',
        hex: 'FAA918',
        source:
          'https://github.com/gruntjs/gruntjs.com/blob/70f43898d9ce8e6cc862ad72bf8a7aee5ca199a9/src/media/grunt-logo-no-wordmark.svg',
        guidelines:
          'https://github.com/gruntjs/grunt-docs/blob/main/Grunt-Brand-Guide.md',
      },
    ],
  },
  {
    title: 'API',
    badges: [
      {
        title: 'GraphQL',
        hex: 'E10098',
        source: 'https://graphql.org/brand',
        guidelines: 'https://graphql.org/brand',
      },
      {
        title: 'Apollo GraphQL',
        hex: '311C87',
        source: 'https://www.apollographql.com',
      },
      {
        title: 'Swagger',
        hex: '85EA2D',
        source:
          'https://swagger.io/swagger/media/assets/images/swagger_logo.svg',
      },
      {
        title: 'tRPC',
        hex: '2596BE',
        source:
          'https://github.com/trpc/trpc/blob/e0df4a2d5b498dd953a65901e04915c6e3f7ecc5/www/static/img/logo-no-text.svg',
      },
      {
        title: 'Hasura',
        hex: '1EB4D4',
        source:
          'https://github.com/hasura/graphql-engine/blob/5e2f5d470cdc2a7e59db7a3d5e94475a00bb2ac6/docs/static/img/logo.svg',
      },
    ],
  },
  {
    title: 'Headless CMS',
    badges: [
      {
        title: 'Strapi',
        hex: '4945FF',
        source:
          'https://handbook.strapi.io/strapi-brand-book-2022/strapi-logo',
        guidelines:
          'https://handbook.strapi.io/strapi-brand-book-2022',
      },
      {
        title: 'Ghost',
        hex: '15171A',
        source:
          'https://github.com/TryGhost/Admin/blob/e3e1fa3353767c3729b1658ad42cc35f883470c5/public/assets/icons/icon.svg',
        guidelines: 'https://ghost.org/docs/logos/',
      },
      {
        title: 'Directus',
        hex: '263238',
        source: 'https://directus.io',
      },
      {
        title: 'Sanity',
        hex: 'F03E2F',
        source:
          'https://github.com/sanity-io/logos/blob/6934d28ae0b5f63b0386810997b8be61ec7009b5/src/sanityMonogram.tsx',
        license: {
          type: 'MIT',
        },
      },
      {
        title: 'Keystone',
        hex: '166BFF',
        source: 'https://keystonejs.com',
      },
    ],
  },
  {
    title: 'CMS',
    badges: [
      {
        title: 'Drupal',
        hex: '0678BE',
        source: 'https://www.drupal.org/about/media-kit/logos',
      },
      {
        title: 'WordPress',
        hex: '21759B',
        source: 'https://wordpress.org/about/logos',
        guidelines:
          'https://wordpressfoundation.org/trademark-policy',
      },
      {
        title: 'Joomla',
        hex: '5091CD',
        source:
          'https://docs.joomla.org/Joomla:Brand_Identity_Elements/Official_Logo',
        guidelines:
          'https://docs.joomla.org/Joomla:Brand_Identity_Elements',
      },
      {
        title: 'Craft CMS',
        hex: 'E5422B',
        source: 'https://craftcms.com/brand-resources',
      },
      {
        title: 'October CMS',
        hex: 'DB6A26',
        source: 'https://octobercms.com',
      },
    ],
  },
  {
    title: 'Databases',
    badges: [
      {
        title: 'MongoDB',
        hex: '47A248',
        source: 'https://www.mongodb.com/pressroom',
      },
      {
        title: 'MySQL',
        hex: '4479A1',
        source: 'https://www.mysql.com/about/legal/logos.html',
        guidelines: 'https://www.mysql.com/about/legal/logos.html',
      },
      {
        title: 'PostgreSQL',
        hex: '4169E1',
        source: 'https://wiki.postgresql.org/wiki/Logo',
        guidelines:
          'https://www.postgresql.org/about/policies/trademarks/',
      },
      {
        title: 'SQLite',
        hex: '003B57',
        source:
          'https://github.com/sqlite/sqlite/blob/43e862723ec680542ca6f608f9963c0993dd7324/art/sqlite370.eps',
      },
      {
        title: 'Redis',
        hex: 'DC382D',
        source: 'https://www.redislabs.com/brand-guidelines/',
        guidelines: 'https://www.redislabs.com/brand-guidelines/',
      },
    ],
  },
  {
    title: 'State management',
    badges: [
      {
        title: 'Redux',
        hex: '764ABC',
        source:
          'https://github.com/reduxjs/redux/tree/8ad084251a5b3e4617157fc52795b6284e68bc1e/logo',
      },
      {
        title: 'Redux-Saga',
        hex: '999999',
        source:
          'https://github.com/redux-saga/redux-saga/blob/9d2164946f402e594a0dfe453c6d20fb6f14858f/logo/3840/Redux-Saga-Logo.png',
      },
      {
        title: 'MobX',
        hex: 'FF9955',
        source:
          'https://github.com/mobxjs/mobx/blob/248e25e37af31c2e71ff452bc662a85816fa40d8/docs/assets/mobservable.svg',
      },
      {
        title: 'ReactiveX',
        hex: 'B7178C',
        source:
          'https://github.com/ReactiveX/rxjs/blob/ee6ababb9fa75f068ac2122e956ff4e449604c59/resources/CI-CD/logo/svg/RxJs_Logo_Black.svg',
        aliases: {
          dup: [
            {
              title: 'RxJS',
              hex: 'D81B60',
            },
          ],
        },
      },
      {
        title: 'Recoil',
        hex: '3578E5',
        source: 'https://recoiljs.org',
      },
    ],
  },
  {
    title: 'Editors',
    badges: [
      {
        title: 'Visual Studio Code',
        hex: '007ACC',
        source:
          'https://commons.wikimedia.org/wiki/File:Visual_Studio_Code_1.35_icon.svg',
      },
      {
        title: 'WebStorm',
        hex: '000000',
        source: 'https://www.jetbrains.com/company/brand/logos',
        guidelines: 'https://www.jetbrains.com/company/brand',
      },
      {
        title: 'Sublime Text',
        hex: 'FF9800',
        source: 'https://www.sublimetext.com',
      },
      {
        title: 'Xcode',
        hex: '147EFB',
        source: 'https://developer.apple.com/develop',
      },
      {
        title: 'Atom',
        hex: '66595C',
        source:
          'https://commons.wikimedia.org/wiki/File:Atom_editor_logo.svg',
      },
    ],
  },
  // {
  //   title: 'Code Styling',
  //   badges: [
  //     {
  //       title: 'ESLint',
  //       hex: '4B32C3',
  //       source: 'https://eslint.org',
  //     },
  //     {
  //       title: 'stylelint',
  //       hex: '263238',
  //       source:
  //         'https://github.com/stylelint/stylelint/blob/1f7bbb2d189b3e27b42de25f2948e3e5eec1b759/identity/stylelint-icon-black.svg',
  //     },
  //     {
  //       title: 'Prettier',
  //       hex: 'F7B93E',
  //       source:
  //         'https://github.com/prettier/prettier-logo/blob/06997b307e0608ebee2044dafa0b9429d6b5a103/images/prettier-icon-clean-centred.svg',
  //     },
  //   ],
  // },
  {
    title: 'Authorization',
    badges: [
      {
        title: 'JSON Web Tokens',
        hex: '000000',
        source: 'https://jwt.io',
      },
      {
        title: 'Auth0',
        hex: 'EB5424',
        source: 'https://auth0.com',
      },
      {
        title: 'Authy',
        hex: 'EC1C24',
        source: 'https://authy.com',
      },
      {
        title: 'Firebase',
        hex: 'FFCA28',
        source: 'https://firebase.google.com/brand-guidelines/',
        guidelines: 'https://firebase.google.com/brand-guidelines/',
      },
      {
        title: 'WebAuthn',
        hex: '3423A6',
        source:
          'https://github.com/webauthn-open-source/webauthn-logos/tree/b21be672811eb4a5caadaba41044970cae299a55',
        guidelines:
          'https://github.com/webauthn-open-source/webauthn-logos',
      },
    ],
  },
  {
    title: 'Crypto',
    badges: [
      {
        title: 'Solidity',
        hex: '363636',
        source:
          'https://docs.soliditylang.org/en/v0.8.6/brand-guide.html',
        guidelines:
          'https://docs.soliditylang.org/en/v0.8.6/brand-guide.html',
        license: {
          type: 'CC-BY-4.0',
        },
      },
      {
        title: 'Tether',
        hex: '50AF95',
        aliases: {
          aka: ['USDt'],
        },
        source: 'https://tether.to/branding/',
        guidelines: 'https://tether.to/branding/',
      },
      {
        title: 'Ethereum',
        hex: '3C3C3D',
        source: 'https://ethereum.org/en/assets/',
      },
      {
        title: 'Bitcoin',
        hex: 'F7931A',
        source: 'https://bitcoin.org',
      },
      {
        title: 'XRP',
        hex: '25A768',
        source: 'https://xrpl.org',
      },
    ],
  },
];
