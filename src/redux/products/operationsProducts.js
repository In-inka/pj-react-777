import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProductsList = createAsyncThunk(
  '/products',
  async (filter, thunkAPI) => {
    try {
      const res = await axios.get(`/products`, {
        params: {
          ...filter
        }
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);