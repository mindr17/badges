import { createSlice } from '@reduxjs/toolkit';

import { getStats } from './stats-thunk';

interface State {
  count: number;
  isLoading: boolean;
}

const initialState: State = {
  count: 0,
  isLoading: false,
};

export const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStats.fulfilled, (state, action) => {
        state.count = action.payload;
        state.isLoading = false;
      });
  },
});

export default statsSlice.reducer;
