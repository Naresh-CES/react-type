import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Counter } from './Component/Counter';

test('renders a role', () => {
  render(<Counter />);
  const divElement = screen.getByRole('CountInfo');
  const buttonElement = screen.getByText('Add item');
  fireEvent.click(buttonElement);
  expect(divElement).toHaveTextContent('1');
});
