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
      recommended: '',
    },
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(productListThunk.pending, pending)
      .addCase(productListThunk.fulfilled, ListFulfilled)
      .addCase(productListThunk.rejected, rejected),
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
