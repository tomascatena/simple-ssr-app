import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../hooks';

interface Props {}

const Header: FC<Props> = () => {
  const auth = useTypedSelector((state) => state.auth);

  console.log(auth);

  return (
    <div>
      <Link to='/'>React SSR</Link>

      <Link to='/users'>Users List</Link>
    </div>
  );
};

export default Header;
