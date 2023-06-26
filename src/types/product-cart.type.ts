import { Product } from './products.type';

export interface ProductCart extends Product {
  totalPrice: number;
  count: number;
}
