import {
  IProduct,
  IProductAdd,
  IProductDelete,
  IProductsResponse,
} from '@/models/IProduct';
import { get, post, put } from './baseService';

const BASE_URL = 'http://localhost:3000/products';

export const getProducts = async () => {
  try {
    const response = await get<IProductsResponse>(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    console.log('Error while fetching products', error);
  }
};

export const addProduct = async (product: IProductAdd) => {
  try {
    const response = await post<IProduct>(`${BASE_URL}/add`, product);
    return response;
  } catch (error) {
    console.log('Error while adding product', error);
  }
};

export const deleteProduct = async (productId: string) => {
  try {
    const response = await put<IProductDelete>(`${BASE_URL}/delete`, {
      productId,
    });
    console.log('response', response);

    return response;
  } catch (error) {
    console.log('Error while deleting product', error);
  }
};
