import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../client';

export const fetchUsers = createAsyncThunk<any, void, { state: RootState; }>(
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
