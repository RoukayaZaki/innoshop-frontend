import React, { useState, useEffect } from 'react';
import PurchaseCard from './PurchaseCard';
import Total from './Total';
import './../../assets/css/checkoutpart.css';

const CheckoutPart = ({ items }) => {
    console.log("!!!!!HERE!!!!!")
    const [updatedItems, setUpdatedItems] = useState([]);

    useEffect(() => {
      setUpdatedItems(items);
    }, [items]);
    console.log(items)
    
    const handleQuantityChange = (itemId, newQuantity) => {
        setUpdatedItems((prevItems) => {
          const updatedItemList = prevItems.map((item) => {
            if (item._id === itemId) {
              return {
                ...item,
                quantity: newQuantity,
              };
            }
            return item;
          });
          return updatedItemList;
        });
    };
    console.log(items);
    console.log(updatedItems);
      
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
                {items.map((item) => (
                    
                    <PurchaseCard
                        item={item}
                        key={item._id}
                        onQuantityChange={handleQuantityChange}
                    />
                ))}
            </div>
            <Total total={calculateTotal()} />
        </div>
    );
};

export default CheckoutPart;
