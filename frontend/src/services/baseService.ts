import axios from 'axios';
import Cookies from 'js-cookie';

const service = axios.create({
  timeout: 20000,
});

axios.defaults.withCredentials = true;

service.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = Cookies.get('token');
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export const get = async <T>(url: string): Promise<T> => {
  const response = await service.get<T>(url);
  return response.data;
};

export const post = async <T>(url: string, obj: object): Promise<T> => {
  const response = await service.post<T>(url, obj);
  return response.data;
};

export const put = async <T>(url: string, obj: object): Promise<T> => {
  const response = await service.put<T>(url, obj);
  return response.data;
};
