import { createSlice } from '@reduxjs/toolkit';
import { productListThunk } from './operationsProducts';

export const productsReducer = productSlice.reducer;
export const filterReducer = productSlice.actions.setFilter;
