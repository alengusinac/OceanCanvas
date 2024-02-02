import { IProductCartItem } from './IProduct';

export interface IItem {
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface ICartItem {
  amount: number;
  product: IProductCartItem;
}
