import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BadgeType } from '@/types/types';

import { RootState } from '../store';

type stateType = {
  selected: BadgeType[];
};

const initialState: stateType = {
  selected: [],
};

export const selectedSlice = createSlice({
  name: 'selected',

  initialState,
  reducers: {
    initSelected: (state, action: PayloadAction<BadgeType[]>) => {
      state.selected = action.payload;
    },
    addToSelected: (state, action: PayloadAction<BadgeType>) => {
      const selected = [...state.selected, action.payload];

      state.selected = selected;
    },
    deleteFromSelected: (state, action: PayloadAction<BadgeType>) => {
      const selected = state.selected.filter(
        (badge) =>
          JSON.stringify(badge) !== JSON.stringify(action.payload)
      );

      state.selected = selected;
    },
    clearSelected: (state) => {
      state.selected = [];
    },
  },
});

export const {
  addToSelected,
  deleteFromSelected,
  initSelected,
  clearSelected,
} = selectedSlice.actions;

export const getSelected = (store: RootState) => store.selected;

export default selectedSlice.reducer;
