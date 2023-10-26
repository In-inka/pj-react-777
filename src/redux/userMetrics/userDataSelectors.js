const getMetricsData = (state) => state.metrics.data;
const getIsLoading = (state) => state.metrics.isLoading;
const getIsError = (state) => state.metrics.console.error();;

const userDataSelectors = {
  getMetricsData,
  getIsLoading,
  getIsError,
};

export default userDataSelectors;