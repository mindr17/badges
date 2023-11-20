import { configureStore } from '@reduxjs/toolkit';
import undoable from 'redux-undo';

import selectedSlice from './selected-slice/selected-slice';
import statsSlice from './stats-slice/stats-slice';

const store = configureStore({
  reducer: {
    selected: undoable(selectedSlice, {
      limit: 100,
    }),
    stats: statsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
