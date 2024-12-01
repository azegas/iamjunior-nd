import React, { createContext, useContext, useState } from 'react';
import { User } from '@/components/auth/types';

type UserContextProps = {
  user: User | null;
  saveUserToContext: (userData: User) => void;
  clearUserFromContext: () => void;
};

export const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const saveUserToContext = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const clearUserFromContext = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, saveUserToContext, clearUserFromContext }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
