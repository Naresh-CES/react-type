/* eslint-disable jsx-a11y/aria-role */
import React, { useState } from 'react';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add item</button>
      <div role='CountInfo'>{count} </div> 
    </div>
  );
};
