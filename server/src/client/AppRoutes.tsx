import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UsersList from './components/UsersList';

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/users" element={<UsersList />} />
    </Routes>
  );
};

export default AppRoutes;
