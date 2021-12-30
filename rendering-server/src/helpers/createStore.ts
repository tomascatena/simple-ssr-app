import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import axios from 'axios';
import usersSlice from '../client/state/users/usersSlice';
import { Request } from 'express';

const createStore = (req: Request) => {
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' },
  });

  const store = configureStore({
    reducer: {
      users: usersSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware({
      thunk: { extraArgument: axiosInstance },
    }),
  });

  return store;
};

export default createStore;
