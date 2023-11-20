import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BadgeType } from '@/types/types';

import { RootState } from '../store';

type stateType = {
  selected: BadgeType[];
};

const initialState: stateType = {
  // selected: getFromLocalStorage('badgesState') || [],
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
      // setToLocalStorage('badgesState', selected);
    },
    deleteFromSelected: (state, action: PayloadAction<BadgeType>) => {
      const selected = state.selected.filter(
        (badge) =>
          JSON.stringify(badge) !== JSON.stringify(action.payload)
      );

      state.selected = selected;
      // setToLocalStorage('badgesState', selected);
    },
    clearSelected: (state) => {
      state.selected = [];
      // setToLocalStorage('badgesState', selected);
    },
  },
});

export const {
  addToSelected,
  deleteFromSelected,
  initSelected,
  clearSelected,
} = selectedSlice.actions;

export const getSelected = (store: RootState) =>
  store.selected.present;

export default selectedSlice.reducer;
