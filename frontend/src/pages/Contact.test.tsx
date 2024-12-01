import { render, screen } from '@testing-library/react';
import Contact from './Contact';
import { UserContext } from '../context/UserContext';
import { User } from '@/components/auth/types';

describe('<Contact />', () => {
  test('renders Contact Us text with username', () => {
    // Create a mock user that matches the User type
    const mockUser: User = {
      _id: '1',
      username: 'JohnDoe',
      email: 'john.doe@example.com',
      password: 'securepassword123',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    };

    render(
      <UserContext.Provider
        value={{ user: mockUser, saveUserToContext: jest.fn(), clearUserFromContext: jest.fn() }}
      >
        <Contact />
      </UserContext.Provider>,
    );

    expect(screen.getByText('Contact Us, JohnDoe')).toBeInTheDocument();
  });

  test('renders Contact Us text without username if user is null', () => {
    render(
      <UserContext.Provider
        value={{ user: null, saveUserToContext: jest.fn(), clearUserFromContext: jest.fn() }}
      >
        <Contact />
      </UserContext.Provider>,
    );

    expect(screen.getByText('Contact Us,')).toBeInTheDocument();
  });
});
