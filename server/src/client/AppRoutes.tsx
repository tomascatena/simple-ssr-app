import React, { FC } from 'react';
import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';
import { useRoutes } from 'react-router-dom';

export const RoutesArray = [
  {
    path: '/',
    exact: true,
    element: <Home />
  },
  {
    path: '/users',
    element: <UsersList />,
    loadData
  },
];

const AppRoutes: FC = () => {
  const element = useRoutes(RoutesArray);

  return element;
};

export default AppRoutes;
