import type { CodegenConfig } from '@graphql-codegen/cli';
import { myConfig } from './src/config';

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [`${myConfig.fetchUrl}/graphql`]: {
      headers: {
        Authorization: `Bearer ${myConfig.readerToken}`,
      },
    },
  },
  documents: 'src/**/*.graphql',
  generates: {
    'introspection.json': {
      plugins: ['introspection'],
      // config: {
      //   minify: true
      // },
    },
    './src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
