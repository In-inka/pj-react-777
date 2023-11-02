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
    modalIsOpen: false,
    successModalOpen: false,
    categories: [],
    list: [],
    isLoading: false,
    page: 1,
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
    reset: (state) => {
      state.list = [];
    },
    modalIsOpnen: (state) => {
      state.modalIsOpen = true;
    },
    modalIsClose: (state) => {
      state.modalIsOpen = false;
    },
    successModalIsOpnen: (state) => {
      state.successModalOpen = true;
    },
    successModalIsClose: (state) => {
      state.successModalOpen = false;
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
export const resetListReducer = productSlice.actions.reset;
const openModal = productSlice.actions.modalIsOpnen;
const closeModal = productSlice.actions.modalIsClose;

const successOpenModal = productSlice.actions.successModalIsOpnen;
const successcloseModal = productSlice.actions.successModalIsClose;

export const successModalReducer = {
  successOpenModal,
  successcloseModal,
};

export const modalReducer = {
  openModal,
  closeModal,
}