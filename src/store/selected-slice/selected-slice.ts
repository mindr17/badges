import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BadgeType } from '@/types/types';

import { RootState } from '../store';

type stateType = {
  selected: BadgeType[];
};

const initialState: stateType = {
  selected: [],
};

export const favoritesSlice = createSlice({
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
      const favorites = state.selected.filter(
        (favorite) => favorite !== action.payload
      );

      state.selected = favorites;
    },
  },
});

export const { addToSelected, deleteFromSelected, initSelected } =
  favoritesSlice.actions;

export const getSelected = (store: RootState) => store.selected;

export default favoritesSlice.reducer;
