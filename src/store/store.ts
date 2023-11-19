import { configureStore } from '@reduxjs/toolkit';

import selectedSlice from './selected-slice/selected-slice';

const store = configureStore({
  reducer: { selected: selectedSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
