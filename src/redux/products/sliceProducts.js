import { createSlice } from '@reduxjs/toolkit';
import { getProductsList } from './operationsProducts';
import {
  handleFulfilledProductList,
  handlePending,
  handleRejected,
} from '../../components/services/services';

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
    page: 1,
    isLoading: false,
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    nextPage: (state, { payload }) => {
      state.page = payload;
    },
    reset: (state) => {
      state.list = [];
      state.page = 1;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getProductsList[STATUS.PENDING], handlePending)
      .addCase(getProductsList[STATUS.FULFILLED], handleFulfilledProductList)
      .addCase(getProductsList[STATUS.REJECTED], handleRejected),
});

export const productsReducer = productSlice.reducer;
export const resetListReducer = productSlice.actions.reset;
export const nextPageReducer = productSlice.actions.nextPage;
const openModal = productSlice.actions.modalIsOpnen;
const closeModal = productSlice.actions.modalIsClose;

export const modalReducer = {
  openModal,
  closeModal,
};
