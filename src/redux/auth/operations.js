import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { messageNotification } from '../../components/alertMessages/alertMessages';

axios.defaults.baseURL = 'https://power-pulse-rh13.onrender.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const register = createAsyncThunk(
  '/users/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/register', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const logIn = createAsyncThunk(
  '/users/logIn',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const config = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};

const updateUserAvatar = createAsyncThunk(
  '/users/changeData',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.patch(
        '/users/changedata',
        credentials,
        config,
      );
      return data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const logOut = createAsyncThunk(
  '/users/logOut',
  async (credentials, thunkAPI) => {
    try {
      await axios.post('/users/logout', credentials);
      token.unset();
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users');
      return data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const updateUserMetricsData = createAsyncThunk(
  '/userMetric',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.patch('/users/dailymetrics', credentials);
      return data;
    } catch (error) {
      messageNotification(error.response.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  updateUserMetricsData,
  updateUserAvatar,
};

export default operations;
