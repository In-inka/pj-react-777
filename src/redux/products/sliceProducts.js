import { createSlice } from '@reduxjs/toolkit';
import { getProductsList } from './operationsProducts';
import { handleFulfilledProductList, handlePending, handleRejected } from '../../components/services/services';

const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
};

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
      .addCase(getProductsList[STATUS.PENDING], handlePending)
      .addCase(getProductsList[STATUS.FULFILLED], handleFulfilledProductList)
      .addCase(getProductsList[STATUS.REJECTED], handleRejected),
});


export const productsReducer = productSlice.reducer;
export const filterReducer = productSlice.actions.setFilter;
