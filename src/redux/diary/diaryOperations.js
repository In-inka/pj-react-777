import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getDiary = createAsyncThunk('/diary', async (credentials) => {
  try {
    const { data } = await axios.get(`/diary${credentials}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const postDiaryProduct = createAsyncThunk(
  '/diary/addProduct',
  async (credentials) => {
    try {
      const { data } = await axios.post('/diary/addproduct', credentials);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  },
);

const deleteDiaryProduct = createAsyncThunk(
  '/diary/deleteProduct',
  async (credentials) => {
    try {
      const { data } = await axios.delete('/diary/deleteproduct', credentials);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  },
);

const postDiaryExercise = createAsyncThunk(
  '/diary/addExercise',
  async (credentials) => {
    try {
      const { data } = await axios.post('/diary/addexercise', credentials);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  },
);

const deleteDiaryExercise = createAsyncThunk(
  '/diary/deleteExercise',
  async (credentials) => {
    try {
      const { data } = await axios.delete('/diary/deleteexercise', credentials);
      return data;
    } catch (error) {
      console.log(error.message);
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
