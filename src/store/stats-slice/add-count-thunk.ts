import { createAsyncThunk } from '@reduxjs/toolkit';

export const addCount = createAsyncThunk(
  'stats/addCount',
  async (countToAdd: number) => {
    const response = await fetch(
      // `https://getbadges.vercel.app/api?type=set_count&count=${countToAdd}`
      `/api?type=add_count&count=${countToAdd}`
    );
    console.log('response: ', response);

    const countData = await response.json();
    const count = countData.countData.data.copied_count;

    return count;
  }
);
