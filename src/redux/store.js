import { configureStore } from '@reduxjs/toolkit';
/* import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'; */
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {},
});

export const persistor = persistStore(store);
