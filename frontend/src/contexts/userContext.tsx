import { loginUser, validateUser } from '@/services/userService';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { IUser } from '@/models/IUser';

interface ContextType {
  user: { email: string; admin: boolean };
  checkUser: () => void;
  login: (values: object) => void;
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
      try {
        const response = await validateUser(token);
        if (response.status === 200) {
          const decoded = jwtDecode(token) as IUser;
          setuser({ email: decoded.email, admin: decoded.admin });
        } else {
          setuser({ email: '', admin: false });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setuser({ email: '', admin: false });
    }
  };

  const login = async (values: object) => {
    try {
      const response = await loginUser(values);
      if (response.status === 200) {
        Cookies.set('token', response.token, { expires: 1 });
        const decoded = jwtDecode(response.token) as IUser;
        setuser({ email: decoded.email, admin: decoded.admin });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    Cookies.remove('token');
    checkUser();
  };

  const value = { user, checkUser, login, logout };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
