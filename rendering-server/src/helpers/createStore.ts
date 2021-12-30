import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import axios from 'axios';
import usersSlice from '../client/state/users/usersSlice';
import { Request } from 'express';
import authReducer from '../client/state/auth/authSlice';

const createStore = (req: Request) => {
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' },
  });

  const store = configureStore({
    reducer: {
      users: usersSlice,
      auth: authReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: { extraArgument: axiosInstance },
      }),
  });

  return store;
};

export default createStore;
