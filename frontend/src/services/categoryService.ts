import { ICategory, ICategoryResponse } from '@/models/IProduct';
import { get, post } from './baseService';

const BASE_URL = 'http://localhost:3000/categories';

export const getCategories = async () => {
  try {
    const response = await get<ICategoryResponse>(`${BASE_URL}/`);
    return response.data;
  } catch (error) {
    console.log('Error while fetching categories', error);
  }
};

export const addCategory = async (values: ICategory) => {
  try {
    const response = await post<ICategoryResponse>(`${BASE_URL}/add`, values);
    return response;
  } catch (error) {
    console.log('Error while adding category', error);
  }
};
