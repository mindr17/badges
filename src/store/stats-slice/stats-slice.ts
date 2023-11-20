import { createSlice } from '@reduxjs/toolkit';

import { getCount } from './get-count-thunk';

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
      .addCase(getCount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCount.fulfilled, (state, action) => {
        state.count = action.payload;
        state.isLoading = false;
      })
      .addCase(addCount.fulfilled, (state, action) => {
        state.count = action.payload;
        state.isLoading = false;
      });
  },
});

export default statsSlice.reducer;
