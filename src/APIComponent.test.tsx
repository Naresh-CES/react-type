import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { APIComponent } from './Component/APIComponent';

test('Gets the data', () => {
  render(<APIComponent />);
  const divElement = screen.getByRole('CountInfo');
  const buttonElement = screen.getByText('Add item');
  fireEvent.click(buttonElement);
  expect(divElement).toHaveTextContent('1');
});
