import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ButtonWrapper } from './Component/Button';

test('renders a role', () => {
  const onclick = jest.fn();
  render(<ButtonWrapper title='Add item' onClick={onclick} />);
  const buttonElement = screen.getByText('Add item');
  fireEvent.click(buttonElement);
  expect(onclick).toHaveBeenCalledTimes(1);
});
