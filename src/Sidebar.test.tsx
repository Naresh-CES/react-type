import React from 'react';
import { render, screen } from '@testing-library/react';
import { Sidebar } from './Component/Sidebar';

test('renders a sidebar', () => {
  const list = [
    {
      name: 'test',
      href: '/path',
    },
  ];

  render(<Sidebar items={list} />);
  const navElement = screen.getAllByRole('navigation');
  expect(navElement[0]).toHaveTextContent(list[0].name);
  expect(navElement[0]).toHaveAttribute('href', list[0].href);
});
