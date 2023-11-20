import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { addCount } from './add-count-thunk';
import { getCount } from './get-count-thunk';

interface State {
  previousCount: number;
  count: number;
  isLoading: boolean;
}

const initialState: State = {
  previousCount: 0,
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
        state.previousCount = state.count;
        state.count = action.payload;
        state.isLoading = false;
      });
  },
});

export const getStats = (store: RootState) => store.stats;

export default statsSlice.reducer;
