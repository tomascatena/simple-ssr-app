import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Header: FC<Props> = () => {
  return (
    <div>
      <Link to='/'>React SSR</Link>

      <Link to='/users'>Users List</Link>
    </div>
  );
};

export default Header;
