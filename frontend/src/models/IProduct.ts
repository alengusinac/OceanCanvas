export interface IProduct {
  _id?: string;
  title: string;
  description: string;
  priceMultiplier: number;
  imageUrl: string;
  categories: string[];
}

export interface IProductDelete {
  message: string;
}

export interface IProductsResponse {
  status: number;
  success: boolean;
  message: string;
  data: IProduct[];
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
