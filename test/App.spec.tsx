import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../src/components/App';

test('renders learn react link', () => {
  render(<App />);
  const headline = screen.getByRole("header");
  expect(headline).toBeInTheDocument();
});
