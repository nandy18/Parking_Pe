import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Parking Pe');
  expect(linkElement).toBeInTheDocument();
  const linkElement1 = screen.getByText('VIP Parking');
  expect(linkElement1).toBeInTheDocument();
  const linkElement2= screen.getByText('Reserve Parking');
  expect(linkElement2).toBeInTheDocument();
  const linkElement3 = screen.getByText('Normal Parking');
  expect(linkElement3).toBeInTheDocument();
});
