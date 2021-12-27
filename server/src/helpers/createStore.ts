import {
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import usersSlice from '../client/state/users/usersSlice';

const createStore = () => {
  const store = configureStore({
    reducer: {
      users: usersSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
  });

  return store;
};

export default createStore;
