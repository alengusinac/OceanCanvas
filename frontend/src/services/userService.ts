import { IUserResponse, IValidateUserResponse } from '@/models/IUser';
import { post } from './baseService';

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/users`;

export const registerUser = async (values: object) => {
  try {
    const response = await post<IUserResponse>(`${BASE_URL}/register`, values);
    return response;
  } catch (error) {
    console.log('RegisterError: ', error);
  }
};

export const loginUser = async (values: object) => {
  try {
    const response = await post<IUserResponse>(`${BASE_URL}/login`, values);
    return response;
  } catch (error) {
    console.log('LoginError: ', error);
  }
};

export const validateUser = async (token: string) => {
  try {
    const response = await post<IValidateUserResponse>(`${BASE_URL}/validate`, {
      token,
    });
    return response;
  } catch (error) {
    console.log('ValidateError: ', error);
  }
};

export const changeUserPassword = async (value: string) => {
  try {
    const response = await post<IUserResponse>(`${BASE_URL}/change-password`, {
      newPassword: value,
    });
    return response;
  } catch (error) {
    console.log('ChangePasswordError: ', error);
  }
};
