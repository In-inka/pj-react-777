const getExercisesData = (state) => state.exercises.data;
const getFilterBody = (state) => state.exercises.filter.body;
const getFilterEquioment = (state) => state.exercises.filter.equipment;
const getFilterMuscles = (state) => state.exercises.filter.muscles;
const getIsLoading = (state) => state.exercises.isLoading;
const getIsError = (state) => state.exercises.error;

const exercisesSelectors = {
  getExercisesData,
  getIsLoading,
  getIsError,
  getFilterBody,
  getFilterEquioment,
  getFilterMuscles,
};

export default exercisesSelectors;
