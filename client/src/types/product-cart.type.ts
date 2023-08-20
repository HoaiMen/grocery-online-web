import { DetailProduct } from './products.type';

export interface ProductCart extends DetailProduct {
  totalPrice: number;
  count: number;
}
