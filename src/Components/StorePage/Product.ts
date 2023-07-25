export interface Variety {
  size?: any;
  id: number;
  amount: number;
  images: number[];
  purchases: number;
  color: null;
}

export interface Product {
  _id: number;
  name: string;
  price: string;
  varieties: Variety[];
  addition_time?: number;
}
