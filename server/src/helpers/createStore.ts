import {
  configureStore,
  ThunkAction,
  Action,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { fetchUsers } from '../client/state/users/users.thunk';
import { AnyAction } from 'redux';

const createStore = () => {
  const store = configureStore({
    reducer: {},
    preloadedState: {
      users: {
        usersList: [],
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
