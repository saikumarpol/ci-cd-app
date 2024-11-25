import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Student Management header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Student Management/i);
  expect(headerElement).toBeInTheDocument();
});
