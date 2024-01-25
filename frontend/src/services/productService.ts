import { IProduct } from '@/models/IProduct';
import { post } from './baseService';

const BASE_URL = 'http://localhost:3000/products';

export const addProduct = async (product: IProduct) => {
  try {
    const response = await post<IProduct>(`${BASE_URL}/add`, product);
    return response;
  } catch (error) {
    console.log('Error while adding product', error);
  }
};
