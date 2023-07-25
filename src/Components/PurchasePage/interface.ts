interface ItemVariety { 
    images: string[];
    size: string | null;
  }
  
  export interface Item {
    _id: string;
    name: string;
    size: string;
    quantity: number;
    price: number;
    varieties: ItemVariety[]
  }