
export interface Variety {
  size: string | null;
  id: number;
  amount: number;
  images: number[];
  purchases: number;
  color: null;
}

export interface Product {
  _id: string;
  name: string;
  price: string;
  varieties: Variety[];
  addition_time?: number;
}

