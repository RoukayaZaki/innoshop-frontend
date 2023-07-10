import React, { useState, useEffect } from 'react';
import PurchaseCard from './PurchaseCard';
import Total from './Total';
import './../../assets/css/checkoutpart.css';

const CheckoutPart = ({ items, filtered }) => {
  const [updatedItems, setUpdatedItems] = useState([]);

  useEffect(() => {
    setUpdatedItems(items);
  }, [items]);

  const handleQuantityChange = (itemId, newQuantity) => {
    setUpdatedItems((prevItems) => {
      let updatedItemList = prevItems.map((item) => {
        if (item._id === itemId) {
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      });
      if(newQuantity == 0) {
        updatedItemList = updatedItemList.filter((item) => itemId != item._id);
      }
      localStorage.setItem('items', JSON.stringify(updatedItemList));
      return updatedItemList;
    });
  };

  const calculateTotal = () => {
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
      <Total total={calculateTotal()} />
    </div>
  );
};

export default CheckoutPart;
