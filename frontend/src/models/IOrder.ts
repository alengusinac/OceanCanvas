import { IAddress } from './IAddress';

export interface IOrder {
  _id: string;
  orderNumber?: string;
  address: IAddress;
  payment: {
    cardNumber: string;
    expirationDate: string;
    ccv: string;
  };
  user?: string;
  products: {
    amount: number;
    size: string;
    product: string;
  }[];
  createdAt?: string;
}

export interface IOrderResponse {
  status: number;
  success: boolean;
  message: string;
  data: IOrder[];
}
