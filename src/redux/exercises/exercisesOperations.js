import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getExercises = createAsyncThunk('/exercises', async () => {
  try {
    const { data } = await axios.get('/exercises');
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const getExercisesByBodyParts = createAsyncThunk('/exercises/bodyParts', async () => {
  try {
    const { data } = await axios.get('/exercises/bodyparts');
    return data;
  } catch (error) {
    console.log(error.message);
  }
});
    
    const getExercisesByEquipment = createAsyncThunk('/exercises/equipment', async () => {
      try {
        const { data } = await axios.get('/exercises/equipment');
        return data;
      } catch (error) {
    console.log(error.message);
      }
    });
    
    
    const getExercisesByMuscles = createAsyncThunk(
      '/exercises/muscles',
      async () => {
        try {
          const { data } = await axios.get('/exercises/muscles');
          return data;
        } catch (error) {
    console.log(error.message);
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