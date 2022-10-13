import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './api/products/productsApi';
import filterToggleReducer from './features/Filters/filterToggle';

export const store = configureStore({
  reducer: {
    filterToggle: filterToggleReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
