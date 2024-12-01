import { render, screen } from '@testing-library/react';
import UserDashboard from './UserDashboard';
import { UserContext } from '@/context/UserContext';
import { User } from '@/components/auth/types';

describe('<UserDashboard />', () => {
  test('renders User Dashboard with username', () => {
    const mockUser: User = {
      _id: '1',
      username: 'JohnDoezzzz',
      email: 'john.doe@example.com',
      password: 'securepassword123',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    };

    render(
      <UserContext.Provider
        value={{
          user: mockUser,
          saveUserToContext: jest.fn(),
          clearUserFromContext: jest.fn(),
        }}
      >
        <UserDashboard />
      </UserContext.Provider>,
    );

    // Verifying the "User Dashboard" and username
    expect(screen.getByText('User Dashboard')).toBeInTheDocument();
    expect(screen.getByText('JohnDoezzzz')).toBeInTheDocument();
  });

  test('renders User Dashboard without username if user is an empty object', () => {
    render(
      <UserContext.Provider
        value={{
          user: {
            _id: '',
            username: '',
            email: '',
            password: '',
            createdAt: '',
            updatedAt: '',
          }, // Partial object with required fields, but empty
          saveUserToContext: jest.fn(),
          clearUserFromContext: jest.fn(),
        }}
      >
        <UserDashboard />
      </UserContext.Provider>,
    );

    // Verifying the "User Dashboard" and absence of username
    expect(screen.getByText('User Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Username:')).toBeInTheDocument(); // No username part
  });

  test('renders User Dashboard with no username if user is null', () => {
    render(
      <UserContext.Provider
        value={{
          user: null, // Simulating no user at all
          saveUserToContext: jest.fn(),
          clearUserFromContext: jest.fn(),
        }}
      >
        <UserDashboard />
      </UserContext.Provider>,
    );

    // Verifying the "User Dashboard" and absence of username
    expect(screen.getByText('User Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Username:')).toBeInTheDocument(); // No username part
  });

  test('renders User Dashboard with no username if user is null', () => {
    render(
      <UserContext.Provider
        value={{
          user: null, // Simulating no user at all
          saveUserToContext: jest.fn(),
          clearUserFromContext: jest.fn(),
        }}
      >
        <UserDashboard />
      </UserContext.Provider>,
    );

    // Verifying the "User Dashboard" and absence of username
    expect(screen.getByText('User Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Username:')).toBeInTheDocument(); // No username part
  });
});
