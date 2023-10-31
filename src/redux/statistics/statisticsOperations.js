import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { messageNotification } from '../../components/alertMessages/alertMessages';

const getStatistics = createAsyncThunk('/statistics', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/statistics');
    return data;
  } catch (error) {
    messageNotification(error.response.status);
    return thunkAPI.rejectWithValue(error.message);
  }
});


export default getStatistics;
