import { GraphQLClient } from 'graphql-request';

import { config } from '@/src/config';

export const localesMap = new Map<string, string>([
  ['ru', 'ru-RU'],
  ['en', 'en-US'],
]);

export const client = new GraphQLClient(
  `${config.fetchUrl}/graphql`,
  {
    headers: {
      Authorization: config.apiToken
        ? `Bearer ${config.apiToken}`
        : '',
    },
  }
);

export const publicClient = new GraphQLClient(
  `${config.fetchUrl}/graphql`,
  {
    headers: {
      Authorization: config.searchToken
        ? `Bearer ${config.searchToken}`
        : '',
    },
  }
);
