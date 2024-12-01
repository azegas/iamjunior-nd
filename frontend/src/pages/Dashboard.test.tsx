import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  test('renders Dashboard text', () => {
    render(<Dashboard />);
    expect(screen.getByText('Username:')).toBeInTheDocument();
  });
});
