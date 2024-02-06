export interface IUser {
  _id: string;
  email: string;
  admin: boolean;
  name: string;
  createdAt?: string;
}

export interface IUserResponse {
  status: number;
  success: boolean;
  message: string;
  token: string;
  data: { message: string };
}

export interface IUserLoginForm {
  email: string;
  password: string;
}

export interface IValidateUserResponse {
  token: string;
  status: number;
}

export interface IGetUserResponse {
  status: number;
  success: boolean;
  message: string;
  data: IUser[];
}
