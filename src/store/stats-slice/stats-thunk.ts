import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCount = createAsyncThunk(
  'stats/getCount',
  async (params) => {
    // const options = {
    //   body: {
    //     badges_stats
    //   } as ChangeRequestBody,
    //   url: `${config.fetchUrl}/items/users/${user.id}`,
    //   method: 'PATCH' as RequestMethod,
    // },

    const response = await fetch('https://getbadges.vercel.app/api');

    const count = await response.json();
    console.log('count: ', count);

    return count;
  }
);
