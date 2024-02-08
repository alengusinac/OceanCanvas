import { post } from './baseService';

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/newsletter`;

export const subscribeNewsletter = async (email: string) => {
  try {
    const response = await post(`${BASE_URL}/send`, { email });
    return response;
  } catch (error: any) {
    return error.response.data;
  }
};
