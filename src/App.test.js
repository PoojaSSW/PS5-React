import { render, screen } from '@testing-library/react';
import PS5App from './PS5App';

test('renders learn react link', () => {
  render(<PS5App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
