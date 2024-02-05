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
