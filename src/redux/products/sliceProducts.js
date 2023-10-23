import { createSlice } from '@reduxjs/toolkit';
import { productListThunk } from './operationsProducts';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    categories: [],
    list: [],
    isLoading: false,
    filter: {
      search: '',
      category: '',
      recomended: '',
    },
  },
});

function ListFulfilled(state, { payload }) {
  state.list = payload;
  state.isLoading = false;
}

function pending(state) {
  state.isLoading = true;
}

function rejected(state) {
  state.isLoading = false;
}

export const productsReducer = productSlice.reducer;
export const filterReducer = productSlice.actions.setFilter;
