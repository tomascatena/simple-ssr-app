import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../client';
import { User } from './usersSlice';

export const fetchUsers = createAsyncThunk<User[], void, { state: RootState; }>(
  'users/fetchUsers',
  async (_, { getState, requestId }) => {
    const { loading, currentRequestId } = getState().users;

    if (!loading || requestId !== currentRequestId) {
      return;
    }

    const { data } = await axios.get(`http://react-ssr-api.herokuapp.com/users`);

    return data;
  },
);
