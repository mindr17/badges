import { createAsyncThunk } from '@reduxjs/toolkit';

import { config } from '@/config';

export const addCount = createAsyncThunk(
  'stats/addCount',
  async (countToAdd: number) => {
    const response = await fetch(
      `${config.apiRoutesUrl}/api?type=add_count&count=${countToAdd}`
    );

    const countData = await response.json();
    const count = countData.countData.data.copied_count;

    return count;
  }
);
