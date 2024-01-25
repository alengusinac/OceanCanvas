import { IUserResponse, IValidateUserResponse } from '@/models/IUser';
import { post } from './baseService';

const BASE_URL = 'http://localhost:3000/users';

export const registerUser = async (values: object) => {
  const response = await post<IUserResponse>(`${BASE_URL}/register`, values);
  return response;
};

export const loginUser = async (values: object) => {
  const response = await post<IUserResponse>(`${BASE_URL}/login`, values);
  return response;
};

export const validateUser = (token: string) => {
  const response = post<IValidateUserResponse>(`${BASE_URL}/validate`, {
    token,
  });
  return response;
};

export const changeUserPassword = (value: string) => {
  const response = post<IUserResponse>(`${BASE_URL}/change-password`, {
    newPassword: value,
  });
  return response;
};
