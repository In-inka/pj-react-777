import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import exercisesOperations from './exercisesOperations';
import { handleFulfilled, handlePending, handleRejected } from '../../components/services/services';

const initialState = {
    data: [],
    isLoading: false,
    error:"",
};

const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
};

export const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          exercisesOperations.getExercises[STATUS.PENDING],
          exercisesOperations.getExercisesByBodyParts[STATUS.PENDING],
          exercisesOperations.getExercisesByEquipment[STATUS.PENDING],
          exercisesOperations.getExercisesByMuscles[STATUS.PENDING],
        ),
        handlePending,
      )
      .addMatcher(
        isAnyOf(
          exercisesOperations.getExercises[STATUS.REJECTED],
          exercisesOperations.getExercisesByBodyParts[STATUS.REJECTED],
          exercisesOperations.getExercisesByEquipment[STATUS.REJECTED],
          exercisesOperations.getExercisesByMuscles[STATUS.REJECTED],
        ),
        handleRejected,
      )
      .addMatcher(
        isAnyOf(
          exercisesOperations.getExercises[STATUS.FULFILLED],
          exercisesOperations.getExercisesByBodyParts[STATUS.FULFILLED],
          exercisesOperations.getExercisesByEquipment[STATUS.FULFILLED],
          exercisesOperations.getExercisesByMuscles[STATUS.FULFILLED],
        ),
        handleFulfilled,
      );
  },
});

export const exercisesSliceReducer = exercisesSlice.reducer;