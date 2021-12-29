import React, { FC } from 'react';

interface Props { }

const HomePage: FC = () => {
  return (
    <div>
      <div>I'm the best Home Component!</div>
      <button onClick={() => console.log('Hola!!')}>Press me!</button>
    </div>
  );
};

export default { element: <HomePage /> };
