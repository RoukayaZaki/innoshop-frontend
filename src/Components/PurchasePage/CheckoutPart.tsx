import React, { useState, useEffect } from 'react';
import PurchaseCard from './PurchaseCard';
import Total from './Total';
import './../../assets/css/checkoutpart.css';
import { Item } from './interface';


// interface ItemVariety { 
//   images: string[];
//   size: string | null;
// }

// interface Item {
//   _id: string;
//   name: string;
//   size: string;
//   quantity: number;
//   price: number;
//   varieties: ItemVariety[]
// }

interface CheckoutPartProps {
  items: Item[];
  filtered: Item[];
}


const CheckoutPart: React.FC<CheckoutPartProps> = ({ items, filtered }) => {
  const [updatedItems, setUpdatedItems] = useState<Item[]>([]);

  useEffect(() => {
    setUpdatedItems(items);
  }, [items]);

  const handleQuantityChange = (itemId: string, itemSize: string | null, newQuantity: number): void => {
    setUpdatedItems((prevItems) => {
      let updatedItemList = prevItems.map((item) => {
        if (item._id === itemId && item.size === itemSize) {
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      });

      if (newQuantity === 0) {
        updatedItemList = updatedItemList.filter((item) => !(itemId === item._id && item.size === itemSize));
      }

      localStorage.setItem('items', JSON.stringify(updatedItemList));
      return updatedItemList;
    });
  };

  const calculateTotal = (): number => {
    let total = 0;
    updatedItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div className="checkout-page">
      <div className="items-section">
        {filtered.length === 0 ? (
          items.map((item) => (
            <PurchaseCard
              item={item}
              key={item._id}
              onQuantityChange={handleQuantityChange}
            />
          ))
        ) : (
          filtered.map((item) => (
            <PurchaseCard
              item={item}
              key={item._id}
              onQuantityChange={handleQuantityChange}
            />
          ))
        )}
      </div>
      <Total checkout={items} total={calculateTotal()} />
    </div>
  );
};

export default CheckoutPart;
