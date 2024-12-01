import { render, screen } from '@testing-library/react';
import About from './About';

describe('<About />', () => {
  test('renders About Us text', () => {
    render(<About />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });
});
