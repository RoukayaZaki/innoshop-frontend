import React, { useState } from 'react';
import PurchaseCard from './PurchaseCard';
import Total from './Total';
import './../../assets/css/checkoutpart.css';

const CheckoutPart = ({ items }) => {
    const [updatedItems, setUpdatedItems] = useState(items);

    const handleQuantityChange = (itemId, newQuantity) => {
        const updatedItem = updatedItems.find((item) => item.id === itemId);
        updatedItem.quantity = newQuantity;

        const updatedItemList = [...updatedItems];
        setUpdatedItems(updatedItemList);
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
                {updatedItems.map((item) => (
                    <PurchaseCard
                        item={item}
                        key={item.id}
                        onQuantityChange={handleQuantityChange}
                    />
                ))}
            </div>
            <Total total={calculateTotal()} />
        </div>
    );
};

export default CheckoutPart;
