import { validateUser } from '@/services/userService';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { IUser } from '@/models/IUser';

interface ContextType {
  user: { email: string; admin: boolean };
  checkUser: () => void;
  logout: () => void;
}

export const UserContext = createContext<ContextType | undefined>(undefined);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setuser] = useState({ email: '', admin: false });

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const token = Cookies.get('token');
    if (token) {
      const response = await validateUser(token);
      if (response.status === 200) {
        const decoded = jwtDecode(token) as IUser;
        setuser({ email: decoded.email, admin: decoded.admin });
      } else {
        setuser({ email: '', admin: false });
      }
    } else {
      setuser({ email: '', admin: false });
    }
  };

  const logout = () => {
    Cookies.remove('token');
    checkUser();
  };

  const value = { user, checkUser, logout };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
