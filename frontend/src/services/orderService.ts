import { IAddress } from '@/models/IAddress';
import { post } from './baseService';

export interface IOrder {
  address: IAddress;
  payment: {
    cardNumber: String;
    expirationDate: String;
    ccv: String;
  };
  user?: String;
  products: {
    amount: Number;
    size: String;
    product: String;
  }[];
}

interface IOrderResponse {
  status: number;
  success: boolean;
  message: string;
  data: IOrder;
}

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/orders`;

export const postOrder = async (order: IOrder) => {
  try {
    const response = await post<IOrderResponse>(`${BASE_URL}/add`, order);
    return response;
  } catch (error) {
    console.log('OrderService: Error while posting order', error);
  }
};
