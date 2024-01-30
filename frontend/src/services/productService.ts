import {
  IProduct,
  IProductAdd,
  IProductDeleteResponse,
  IProductResponse,
  IProductsResponse,
} from '@/models/IProduct';
import { get, post, put } from './baseService';
import { IProductFiltersSort } from '@/models/IFilters';

const BASE_URL = 'http://localhost:3000/products';

export const getProducts = async (
  filters?: IProductFiltersSort,
  offset?: number
) => {
  try {
    const url = new URL(BASE_URL);

    if (filters) {
      filters.productsPerPage &&
        url.searchParams.append('limit', filters.productsPerPage.toString());

      offset && url.searchParams.append('offset', offset.toString());

      filters.category && url.searchParams.append('category', filters.category);

      filters.sort && url.searchParams.append('sort', filters.sort);
    }

    const response = await get<IProductsResponse>(url.href);
    return response.data;
  } catch (error) {
    console.log('Error while fetching products', error);
  }
};

export const getProduct = async (productId: string) => {
  try {
    const response = await get<IProductResponse>(`${BASE_URL}/${productId}`);
    return response.data;
  } catch (error) {
    console.log('Error while fetching product', error);
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
    const response = await put<IProductDeleteResponse>(`${BASE_URL}/delete`, {
      productId,
    });
    console.log('response', response);

    return response;
  } catch (error) {
    console.log('Error while deleting product', error);
  }
};
