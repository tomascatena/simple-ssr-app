import {
  configureStore,
  ThunkAction,
  Action,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { fetchUsers } from '../client/state/users/users.thunk';
import { AnyAction } from 'redux';
import usersSlice from '../client/state/users/usersSlice';

const createStore = () => {
  const store = configureStore({
    reducer: {
      users: usersSlice
    },
    preloadedState: {
      users: {
        usersList: null,
        error: null,
        loading: false,
        currentRequestId: undefined
      }
    },
    devTools: process.env.NODE_ENV !== 'production',
  });

  type AppDispatch = typeof store.dispatch;
  type RootState = ReturnType<typeof store.getState>;
  type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >;

  return store;
};

export default createStore;
