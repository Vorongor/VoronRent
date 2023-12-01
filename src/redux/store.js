import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { carReduser } from './slice';

const persistConfig = {
  key: 'car',
  storage,
  blacklist: ['startTime', 'finishTime'],
};

const carPersistedReducer = persistReducer(persistConfig, carReduser);

export const store = configureStore({
  reducer: {
    car: carPersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
