import React from 'react';
import { render, screen} from '@testing-library/react';
import Header from '../components/Header';
import { HEADER_TITLE } from '../utils/constants';

it('renders header', () => {
  render(<Header title={HEADER_TITLE} />);
  const linkElement = screen.getByText(HEADER_TITLE);
  expect(linkElement).toBeInTheDocument();
});