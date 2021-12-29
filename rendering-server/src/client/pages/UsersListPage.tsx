import React, { useEffect, FC } from 'react';
import { useAppDispatch, useTypedSelector } from '../hooks';
import { fetchUsers } from '../state/users/users.thunk';
import createStore from '../../helpers/createStore';

interface Props { }

const UsersListPage: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { usersList } = useTypedSelector((state) => state.users);

  useEffect(() => {
    if (!usersList) {
      dispatch(fetchUsers());
    }
  }, []);

  return (
    <div>
      <h1>Here's a big list of users</h1>

      {usersList &&
        <ul>
          {usersList.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      }
    </div>
  );
};

const loadData = (store: ReturnType<typeof createStore>) => {
  return store.dispatch(fetchUsers());
};

export default {
  element: <UsersListPage />,
  loadData
};

