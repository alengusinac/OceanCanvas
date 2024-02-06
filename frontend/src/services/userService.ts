import {
  IGetUserResponse,
  IUserLoginForm,
  IUserResponse,
  IValidateUserResponse,
} from '@/models/IUser';
import { get, post } from './baseService';

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/users`;

export const getUsers = async () => {
  try {
    const response = await get<IGetUserResponse>(`${BASE_URL}/`);
    return response;
  } catch (error: any) {
    console.log('UserService: GetUsersError: ', error);
    return error.response;
  }
};

export const registerUser = async (values: object) => {
  try {
    const response = await post<IUserResponse>(`${BASE_URL}/register`, values);
    return response;
  } catch (error: any) {
    console.log('UserService: RegisterError: ', error);
    return error.response;
  }
};

export const loginUser = async (values: IUserLoginForm) => {
  try {
    const response = await post<IUserResponse>(`${BASE_URL}/login`, values);
    return response;
  } catch (error: any) {
    console.log('UserService: LoginError: ', error);
    return error.response;
  }
};

export const validateUser = async (token: string) => {
  try {
    const response = await post<IValidateUserResponse>(`${BASE_URL}/validate`, {
      token,
    });
    return response;
  } catch (error: any) {
    console.log('UserService: ValidateError: ', error);
    return error.response;
  }
};

export const changeUserPassword = async (value: string) => {
  try {
    const response = await post<IUserResponse>(`${BASE_URL}/change-password`, {
      newPassword: value,
    });
    return response;
  } catch (error: any) {
    console.log('UserService: ChangePasswordError: ', error);
    return error.response;
  }
};
