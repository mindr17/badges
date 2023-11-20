import { createAsyncThunk } from '@reduxjs/toolkit';

export const setCount = createAsyncThunk(
  'stats/setCount',
  async (countToAdd) => {
    // const options = {
    //   body: {
    //     badges_stats
    //   } as ChangeRequestBody,
    //   url: `${config.fetchUrl}/items/users/${user.id}`,
    //   method: 'PATCH' as RequestMethod,
    // },
    const response = await fetch(
      // `https://getbadges.vercel.app/api?type=set_count&count=${countToAdd}`
      `http://localhost:3000/api?type=set_count&count=${countToAdd}`
    );
    response;
    console.log('response: ', response);

    const countData = await response.json();
    const count = countData.countData.data.copied_count;

    return count;
  }
);
