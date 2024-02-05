import { post } from './baseService';
import { IOrder, IOrderResponse } from '@/models/IOrder';

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/orders`;

export const postOrder = async (order: IOrder) => {
  try {
    const response = await post<IOrderResponse>(`${BASE_URL}/add`, order);
    return response;
  } catch (error) {
    console.log('OrderService: Error while posting order', error);
  }
};
