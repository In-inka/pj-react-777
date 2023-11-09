import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { messageNotification } from '../../components/alertMessages/alertMessages';

export const getProductsList = createAsyncThunk(
  '/products',
  async (credentials, thunkAPI) => {
    const { limit = 50, page = 1, filterParams } = credentials;
    const { search = '', category = '', recommended = '' } = filterParams;
    try {
      const res = await axios.get(
        `/products?page=${page}&limit=${limit}&search=${search}&category=${category}&recommended=${recommended}`,
      );
      return res.data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
