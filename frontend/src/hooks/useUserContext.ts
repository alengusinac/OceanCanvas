import { UserContext } from '@/contexts/userContext';
import { useContext } from 'react';

export const useUserContext = () => {
  const contextValue = useContext(UserContext);

  if (!contextValue) {
    throw new Error('useUserContext must be used within a UserProvider');
  }

  return contextValue;
};
