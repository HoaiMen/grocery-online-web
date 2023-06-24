import { AxiosResponse } from 'axios';
import { Product } from '../types/products.type';
import http from '../utils/http';

export const getProducts = (
  page: string | number
): Promise<AxiosResponse<Product[], any>> => {
  return http.get('http://localhost:3000/data', {
    params: {
      page: page,
    },
  });
};

export const getProduct = (
  id: string | number
): Promise<AxiosResponse<Product, any>> => {
  return http.get(`http://localhost:3000/data/${id}`);
};
