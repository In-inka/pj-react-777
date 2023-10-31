import { createSlice } from '@reduxjs/toolkit';
import { handleFulfilled, handlePending, handleRejected } from '../../components/services/services';
import getStatistics from './statisticsOperations';

const initialState = {
  data: {
    totalUsersExercises: '',
    exercisesQuantity: '',
    usersQuantity: '',
    totalExercisesTime: '',
    totalBurnedCalories: '',
  },
};

const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
};

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getStatistics[STATUS.FULFILLED], handleFulfilled)
      .addCase(
        getStatistics[STATUS.PENDING],
        handlePending,
      )
      .addCase(
        getStatistics[STATUS.REJECTED],
        handleRejected,
      );
  },
});

export const statisticsSliceReducer = statisticsSlice.reducer;