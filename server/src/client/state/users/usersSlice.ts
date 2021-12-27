import { createSlice, SerializedError, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from './users.thunk';

export interface UserState {
  users: any[] | null;
  loading: boolean;
  currentRequestId: string | undefined;
  error: SerializedError | null | string;
}

const initialState: UserState = {
  users: null,
  loading: false,
  currentRequestId: undefined,
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        if (state.loading === false) {
          state.users = null;
          state.loading = true;
          state.error = null;
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading === true && state.currentRequestId === requestId) {
          state.users = action.payload;
          state.loading = false;
          state.currentRequestId = undefined;
        }
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading === true && state.currentRequestId === requestId) {
          state.users = null;
          state.loading = false;
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      });
  },
});

export const userActions = usersSlice.actions;

export default usersSlice.reducer;
