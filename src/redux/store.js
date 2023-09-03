import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { authReducer } from './auth/authSlice';
import { dashboardReducer } from './dashboards/dashboardsSlice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist/es/constants';
// import { themeReducer } from './theme/theme-reducer';

const isDevelopment = process.env.NODE_ENV === 'development';

// Persisting token field from auth slice to local storage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'theme'],
};

// Persisting theme slice to local storage
// const themePersistConfig = {
//   key: 'theme',
//   storage,
// };



const rootReducer = {
  auth: persistReducer(authPersistConfig, authReducer),
  // theme: persistReducer(themePersistConfig, themeReducer),
  dashboards: dashboardReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: isDevelopment,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
