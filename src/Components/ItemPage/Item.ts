import { Variety } from "../StorePage/Product";

export interface Item {
    title: string | undefined;
    _id: string;
    size: string;
    quantity: number;
    name: string;
    price: string;
    type: string;
    photoID: string;
    varieties: Variety[];
  }