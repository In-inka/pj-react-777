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
import { exercisesSliceReducer } from './exercises/exercisesSlice';
import { productsReducer } from './products/sliceProducts';
import { diarySliceReducer } from './diary/diarySlice';
import msgpack from 'msgpack-lite';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { statisticsSliceReducer } from './statistics/statisticsSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const productsPersistConfig = {
  key: 'products',
  storage,
  whitelist: ['list'],
  transforms: [
    {
      in: (state) => {
        return msgpack.encode(state);
      },
      out: (state) => {
        return msgpack.decode(state);
      },
    },
  ],
  stateReconciler: autoMergeLevel2,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    exercises: exercisesSliceReducer,
    products: persistReducer(productsPersistConfig, productsReducer),
    diary: diarySliceReducer,
    statistics: statisticsSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
