// src/models/product.ts
export type ProductType = 'Vegan' | 'Vegetarian' | 'Non-Vegetarian';
export type Category = 'Beverages' | 'Sweet' | 'Desserts' | 'Snacks';

export interface Product {
  name: string;
  price: number;
  pro_type: ProductType;
  category: Category;
}

export type CupSize = 'Small' | 'Medium' | 'Large';

export interface Order {
  product: Product;
  quantity: number;
  cupSize?: CupSize;
}
