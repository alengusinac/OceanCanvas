export interface IUserResponse {
  status: number;
  success: boolean;
  message: string;
  token: string;
}
export interface IUser {
  _id: string;
  email: string;
  admin: boolean;
  name: string;
}

export interface IValidateUserResponse {
  token: string;
  status: number;
}
