import { configureStore } from '@reduxjs/toolkit';
import filterToggleReducer from './features/Filters/filterToggle';

export const store = configureStore({
  reducer: {
    filterToggle: filterToggleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
