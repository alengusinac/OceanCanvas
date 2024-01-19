export interface IItem {
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface ICartItem extends IItem {
  amount: number;
  size: string;
}
