import { createAsyncThunk } from '@reduxjs/toolkit';

export const getStats = createAsyncThunk(
  'products/getStats',
  async (params) => {
    // const options = {
    //   body: {
    //     badges_stats
    //   } as ChangeRequestBody,
    //   url: `${config.fetchUrl}/items/users/${user.id}`,
    //   method: 'PATCH' as RequestMethod,
    // },

    const response = await fetch(
      'https://api.mafia.game/badges_stats?access_token=_3qcIwb2IBVeJ9_GEz12SgfWehuHHoIq'
    );

    const count = await response.json();
    console.log('count: ', count);

    return count;
  }
);
