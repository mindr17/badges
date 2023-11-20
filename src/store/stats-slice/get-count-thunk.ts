import { createAsyncThunk } from '@reduxjs/toolkit';

import { config } from '@/config';

export const getCount = createAsyncThunk(
  'stats/getCount',
  async () => {
    const response = await fetch(
      `${config.apiRoutesUrl}/api?type=get_count`
      // `/api?type=get_count`
    );

    const countData = await response.json();
    const count = countData.countData.data.copied_count;

    return count;
  }
);
