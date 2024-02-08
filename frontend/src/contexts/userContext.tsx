import { loginUser, validateUser } from '@/services/userService';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { IUser, IUserLoginForm, IUserResponse } from '@/models/IUser';

interface ContextType {
  user: IUser | null;
  checkUser: () => void;
  login: (values: IUserLoginForm) => Promise<unknown>;
  logout: () => void;
}

export const UserContext = createContext<ContextType | undefined>(undefined);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const token = Cookies.get('token');
    if (token) {
      try {
        const response = await validateUser(token);
        if (response?.status === 200) {
          const decoded = jwtDecode(token) as IUser;
          setUser({
            email: decoded.email,
            admin: decoded.admin,
            name: decoded.name,
            address: decoded.address,
            _id: decoded._id,
          });
        } else {
          setUser(null);
          Cookies.remove('token');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setUser(null);
    }
  };

  const login = async (values: IUserLoginForm) => {
    try {
      const response: IUserResponse = await loginUser(values);

      if (response?.status === 200) {
        Cookies.set('token', response.token, { expires: 1 });
        const decoded = jwtDecode(response.token) as IUser;
        setUser({
          email: decoded.email,
          admin: decoded.admin,
          name: decoded.name,
          address: decoded.address,
          _id: decoded._id,
        });
      }
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const logout = () => {
    Cookies.remove('token');
    checkUser();
  };

  const value = { user, login, checkUser, logout };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
