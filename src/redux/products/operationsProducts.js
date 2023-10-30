import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { messageNotification } from '../../components/alertMessages/alertMessages';

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
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);