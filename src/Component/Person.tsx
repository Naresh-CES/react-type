import React from 'react';

export const Person = ({ name }: { name: string }) => {
  return <div role='button'>Name is {name}</div>;
};
