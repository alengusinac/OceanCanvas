export interface IProduct {
  _id?: string;
  title: string;
  description: string;
  imageUrl: string;
  categories: string[];
  sizes: ISizeWithPrize[];
}

interface ISizeWithPrize {
  _id: string;
  size: string;
  price: number;
}

export interface IProductCartItem {
  _id: string;
  title: string;
  imageUrl: string;
  size: string;
  price: number;
}

export interface IProductAdd {
  title: string;
  description: string;
  priceMultiplier: number;
  image: string;
  categories: string[];
}

export interface IProductDeleteResponse {
  message: string;
}

export interface IProductsResponse {
  status: number;
  success: boolean;
  message: string;
  data: { total: number; products: IProduct[] };
}
export interface IProductResponse {
  status: number;
  success: boolean;
  message: string;
  data: IProduct;
}

export interface ISize {
  _id?: string;
  width: number;
  height: number;
  price: number;
}

export interface ISizeResponse {
  status: number;
  success: boolean;
  message: string;
  data: ISize[];
}

export interface ICategory {
  _id?: string;
  category: string;
}

export interface ICategoryResponse {
  status: number;
  success: boolean;
  message: string;
  data: ICategory[];
}
