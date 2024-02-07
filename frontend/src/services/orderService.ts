import { get, post } from './baseService';
import { IOrder, IOrderResponse } from '@/models/IOrder';

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/orders`;

export const getOrders = async () => {
  try {
    const response = await get<IOrderResponse>(`${BASE_URL}`);
    return response;
  } catch (error) {
    console.log('OrderService: Error while fetching orders', error);
  }
};

export const getUserOrders = async () => {
  try {
    const response = await get<IOrderResponse>(`${BASE_URL}/user`);
    return response;
  } catch (error) {
    console.log('OrderService: Error while fetching user orders', error);
  }
};

export const postOrder = async (order: IOrder) => {
  try {
    const response = await post<IOrderResponse>(`${BASE_URL}/add`, order);
    return response;
  } catch (error) {
    console.log('OrderService: Error while posting order', error);
  }
};
