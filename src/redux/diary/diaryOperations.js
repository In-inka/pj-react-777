import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { messageNotification } from '../../components/alertMessages/alertMessages';

const getDiary = createAsyncThunk('/diary', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.get(`/diary${credentials}`);
    return data;
  } catch (error) {
    messageNotification(error.response.status);
    return thunkAPI.rejectWithValue(error.message);
  }
});

const postDiaryProduct = createAsyncThunk(
  '/diary/addProduct',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/diary/addproduct', credentials);
      return data;
    } catch (error) {
    messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const deleteDiaryProduct = createAsyncThunk(
  '/diary/deleteProduct',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.delete('/diary/deleteproduct', {
        data: credentials,
      });
      return data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const postDiaryExercise = createAsyncThunk(
  '/diary/addExercise',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/diary/addexercise', credentials);
      return data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const deleteDiaryExercise = createAsyncThunk(
  '/diary/deleteExercise',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.delete('/diary/deleteexercise', {
        data: credentials,
      });
      return data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const diaryOperations = {
  getDiary,
  postDiaryProduct,
  deleteDiaryProduct,
  postDiaryExercise,
  deleteDiaryExercise,
};

export default diaryOperations;
