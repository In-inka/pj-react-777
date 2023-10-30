import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { messageNotification } from '../../components/alertMessages/alertMessages';

const getExercises = createAsyncThunk('/exercises', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/exercises');
    return data;
  } catch (error) {
    messageNotification(error.response.status);
    return thunkAPI.rejectWithValue(error.message);
  }
});

const getExercisesByBodyParts = createAsyncThunk(
  '/exercises/bodyParts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/exercises/bodyparts');
      return data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
    
    const getExercisesByEquipment = createAsyncThunk(
      '/exercises/equipment',
      async (_, thunkAPI) => {
        try {
          const { data } = await axios.get('/exercises/equipment');
          return data;
        } catch (error) {
          messageNotification(error.response.status);
          return thunkAPI.rejectWithValue(error.message);
        }
      },
    );
    
    
    const getExercisesByMuscles = createAsyncThunk(
      '/exercises/muscles',
      async (_, thunkAPI) => {
        try {
          const { data } = await axios.get('/exercises/muscles');
          return data;
        } catch (error) {
          messageNotification(error.response.status);
          return thunkAPI.rejectWithValue(error.message);
        }
      },
    );
    
const exercisesOperations = {
  getExercises,
  getExercisesByBodyParts,
  getExercisesByEquipment,
  getExercisesByMuscles,
};

export default exercisesOperations;