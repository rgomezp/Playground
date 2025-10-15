import type { Category } from "./Category";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: Category;
  image: string;
  rating: number;
  description: string;
}
