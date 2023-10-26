import { configureStore } from '@reduxjs/toolkit';
 import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import authSlice from './auth/auth-slice';
import storage from 'redux-persist/lib/storage';
import { userMetricsReducer } from './userMetrics/userMetricsSlice';
import { exercisesSliceReducer } from './exercises/exercisesSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    metrics: userMetricsReducer,
    exercises: exercisesSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
