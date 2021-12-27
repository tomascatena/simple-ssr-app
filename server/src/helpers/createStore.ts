import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

const createStore = () => {
  const store = configureStore({
    reducer: {},
    devTools: process.env.NODE_ENV !== 'production',
  });

  return store;
};

export default createStore;