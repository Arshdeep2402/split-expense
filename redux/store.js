import { configureStore } from '@reduxjs/toolkit';
import user from './slices/user.js';

export const store = configureStore({
  reducer: {
    user
  },
})