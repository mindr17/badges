import { writerClient } from './clientGq';
import { gql } from 'graphql-request';

const query = gql`
  query CountryPageQuery {
    country2s {
      living_cost_avg
    }
  }
`;

export const writeData = async (data) => {
  try {
    // if (!locale) throw new Error('locale is undefined!');

    const variables = {
      locale: 'en-EN',
    };

    return {
      data: await readerClient.request(query, variables).catch((e) => console.error(e)),
    };
  } catch (e) {
    console.error(e);
  }
};
