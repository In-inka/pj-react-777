import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import diaryOperations from './diaryOperations';
import {
  handleFulfilled,
  handleFulfilledAddExercise,
  handleFulfilledAddProduct,
  handleFulfilledDeleteExercise,
  handleFulfilledDeleteProduct,
  handlePending,
  handleRejected,
} from '../../components/services/services';

const initialState = {
  data: {
    eatenProducts:[],
    doneExercises:[],
    consumedCalories:0,
    burnedCalories:0,
    sportTime:0,
  },
  isLoading: false,
  error:"",
};

const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
};

export const diarySlice = createSlice({
  name: 'diary',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(diaryOperations.getDiary[STATUS.FULFILLED], handleFulfilled)
      .addCase(
        diaryOperations.postDiaryProduct[STATUS.FULFILLED],
        handleFulfilledAddProduct,
      )
      .addCase(
        diaryOperations.deleteDiaryProduct[STATUS.FULFILLED],
        handleFulfilledDeleteProduct,
      )
      .addCase(
        diaryOperations.postDiaryExercise[STATUS.FULFILLED],
        handleFulfilledAddExercise,
      )
      .addCase(
        diaryOperations.deleteDiaryExercise[STATUS.FULFILLED],
        handleFulfilledDeleteExercise,
      )
      .addMatcher(
        isAnyOf(
          diaryOperations.getDiary[STATUS.PENDING],
          diaryOperations.postDiaryProduct[STATUS.PENDING],
          diaryOperations.deleteDiaryProduct[STATUS.PENDING],
          diaryOperations.postDiaryExercise[STATUS.PENDING],
          diaryOperations.deleteDiaryExercise[STATUS.PENDING],
        ),
        handlePending,
      )
      .addMatcher(
        isAnyOf(
          diaryOperations.getDiary[STATUS.REJECTED],
          diaryOperations.postDiaryProduct[STATUS.REJECTED],
          diaryOperations.deleteDiaryProduct[STATUS.REJECTED],
          diaryOperations.postDiaryExercise[STATUS.REJECTED],
          diaryOperations.deleteDiaryExercise[STATUS.REJECTED],
        ),
        handleRejected,
      );
  },
});

export const diarySliceReducer = diarySlice.reducer;
