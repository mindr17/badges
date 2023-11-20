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
    title: 'Operting systems',
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
];
