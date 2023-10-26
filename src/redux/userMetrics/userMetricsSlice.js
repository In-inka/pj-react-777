import { createSlice } from "@reduxjs/toolkit";
import updateUserMetricsData from "./userMetricsOperations";

const initialState = {
  data: {
    height: null,
    currentWeight: null,
    desiredWeight: null,
    birthday: null,
    blood: null,
    sex: null,
    levelActivity: null,
  },
  isLoading: false,
  error: '',
};

const userMetricsDataSlice = createSlice({
  name: 'metrics',
  initialState,
  extraReducers: {
    [updateUserMetricsData.fulfilled](state, { payload }) {
      state.data = payload.data.bodyParams;
      state.isLoading = false;
    },
    [updateUserMetricsData.pending](state) {
      state.isLoading = true;
    },
    [updateUserMetricsData.rejected](state, { payload }) {
        state.isLoading = false;
        state.error = payload;
    },
  },
});

export const userMetricsReducer =  userMetricsDataSlice.reducer;
