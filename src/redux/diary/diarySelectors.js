const getDiary = (state) => state.diary.data;
const getIsLoading = (state) => state.diary.isLoading;
const getIsError = (state) => state.diary.error;

const diarySelectors = {
  getDiary,
  getIsLoading,
  getIsError,
};

export default diarySelectors;
