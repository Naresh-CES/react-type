import React from 'react';
import { render, screen } from '@testing-library/react';
import { Person } from './Component/Person';

test('renders a role', () => {
  render(<Person name='naresh' />);
  const divElement = screen.getByRole('button');
  expect(divElement).toHaveTextContent('Name is naresh');
});
