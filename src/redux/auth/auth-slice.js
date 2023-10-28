import { handleFulfilledCurrentUser, handleFulfilledLogin, handleFulfilledLogout, handleFulfilledMetricData, handleFulfilledRegister, handlePending, handlePendingCurrentUser, handleRejected, handleRejectedCurrentUser } from '../../components/services/services';
import authOperations from './operations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';


const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
};

const initialState = {
  user: {
    name: null,
    email: null,
    avatarUrl: null,
    bodyParams: {
      height: null,
      currentWeight: null,
      desiredWeight: null,
      birthday: null,
      blood: null,
      sex: null,
      levelActivity: null,
    },
  },
  isLoggedIn: false,
  isLoading: false,
  isFetchingCurrentUser: false,
  error: '',
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.fulfilled, handleFulfilledRegister)
      .addCase(authOperations.logIn.fulfilled, handleFulfilledLogin)
      .addCase(authOperations.logOut.fulfilled, handleFulfilledLogout)
      .addCase(
        authOperations.updateUserMetricsData.fulfilled,
        handleFulfilledMetricData,
      )
      .addCase(
        authOperations.fetchCurrentUser.fulfilled,
        handleFulfilledCurrentUser,
      )
      .addCase(
        authOperations.fetchCurrentUser.pending,
        handlePendingCurrentUser,
      )
      .addCase(
        authOperations.fetchCurrentUser.rejected,
        handleRejectedCurrentUser,
      )
      .addMatcher(
        isAnyOf(
          authOperations.register[STATUS.PENDING],
          authOperations.logIn[STATUS.PENDING],
          authOperations.logOut[STATUS.PENDING],
          authOperations.updateUserMetricsData[STATUS.PENDING],
        ),
        handlePending,
      )
      .addMatcher(
        isAnyOf(
          authOperations.register[STATUS.REJECTED],
          authOperations.logIn[STATUS.REJECTED],
          authOperations.logOut[STATUS.REJECTED],
          authOperations.updateUserMetricsData[STATUS.REJECTED],
        ),
        handleRejected,
      );;
  }
});

export default authSlice.reducer;
