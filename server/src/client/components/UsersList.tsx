import React, { useEffect, FC, useState } from 'react';
import { useAppDispatch, useTypedSelector } from '../hooks';
import { fetchUsers } from '../state/users/users.thunk';
import createStore from '../../helpers/createStore';

interface Props { }

const UsersList: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { usersList } = useTypedSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h1>Here's a big list of users</h1>

      <ul>
        {usersList?.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default UsersList;

export const loadData = (store: ReturnType<typeof createStore>) => {
  return store.dispatch(fetchUsers());
};
