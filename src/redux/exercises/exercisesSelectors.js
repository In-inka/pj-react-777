const getExercisesData = (state) => state.exercises.data;
const getIsLoading = (state) => state.exercises.isLoading;
const getIsError = (state) => state.exercises.error;

const exercisesSelectors = {
  getExercisesData,
  getIsLoading,
  getIsError,
};

export default exercisesSelectors;
