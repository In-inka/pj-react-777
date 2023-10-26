import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const updateUserMetricsData = createAsyncThunk(
  '/userMetric',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.patch('/users/dailyMetrics', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export default updateUserMetricsData;