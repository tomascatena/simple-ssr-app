// Startup point fo the client side application

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './AppRoutes';
import { BrowserRouter, Outlet } from 'react-router-dom';
import { configureStore, ThunkAction, Action, Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import usersReducer from './state/users/usersSlice';

declare global {
  interface Window {
    __PRELOADED_STATE__: ReturnType<Store['getState']>;
  }
}

// Create Redux store with state injected by the server
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  preloadedState: window.__PRELOADED_STATE__,
  devTools: process.env.NODE_ENV !== 'production',
});

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

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

      <Outlet />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
);
