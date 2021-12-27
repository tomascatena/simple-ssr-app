// Startup point fo the client side application

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import usersReducer, { usersActions } from './state/users/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
);
