import React, { FC } from 'react';

interface Props { }

const Home: FC = () => {
  return (
    <div>
      <div>I'm the best Home Component!</div>
      <button onClick={() => console.log('Hola!!')}>Press me!</button>
    </div>
  );
};

export default Home;
