
export const handleFulfilled = (state, {payload}) => {
  state.data = payload;
    state.isLoading = false;
};

export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
