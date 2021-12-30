import React, { FC } from 'react';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import { useRoutes } from 'react-router-dom';
import Header from './components/Header';

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

const App: FC = () => {
  const element = useRoutes(RoutesArray);

  return (
    <div>
      <Header />

      {element}
    </div>
  );
};

export default App;
