import type { CodegenConfig } from '@graphql-codegen/cli';

import { myConfig } from './src/config';

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [`${myConfig.fetchUrl}/graphql`]: {
      headers: {
        Authorization: `Bearer Px52qffm9qbMY4WsyjZIvp3mS55Fg61d`,
      },
    },
  },
  documents: 'src/graphql/private/operations/**/*.graphql',
  generates: {
    'schema.json': {
      plugins: ['introspection'],
    },
    './src/graphql/private/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
