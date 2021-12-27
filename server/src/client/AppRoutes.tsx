import React, { FC } from 'react';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import { useRoutes } from 'react-router-dom';

export const RoutesArray = [
  {
    ...HomePage,
    path: '/',
    exact: true,
  },
  {
    ...UsersListPage,
    path: '/users',

  },
];

const AppRoutes: FC = () => {
  const element = useRoutes(RoutesArray);

  return element;
};

export default AppRoutes;
