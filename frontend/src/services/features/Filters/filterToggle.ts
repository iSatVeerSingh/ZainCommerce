import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FilterToogle } from './types';

const initialState: FilterToogle = {
  isOpen: false,
  view: 'grid',
};

export const filterToggleSlice = createSlice({
  name: 'filterToggle',
  initialState,
  reducers: {
    toogle: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    changeView: (state) => {
      state.view = state.view === 'grid' ? 'list' : 'grid';
    },
  },
});

export const { toogle, changeView } = filterToggleSlice.actions;

const filterToggleReducer = filterToggleSlice.reducer;

export default filterToggleReducer;
