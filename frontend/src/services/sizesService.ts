import { ISize, ISizeResponse } from '@/models/IProduct';
import { get, post } from './baseService';

const BASE_URL = 'http://localhost:3000/sizes';

export const getSizes = async () => {
  try {
    const response = await get<ISizeResponse>(`${BASE_URL}/`);
    return response.data;
  } catch (error) {
    console.log('Error while fetching sizes', error);
  }
};

export const addSize = async (values: ISize) => {
  try {
    const response = await post<ISizeResponse>(`${BASE_URL}/add`, values);
    return response;
  } catch (error) {
    console.log('Error while adding size', error);
  }
};
