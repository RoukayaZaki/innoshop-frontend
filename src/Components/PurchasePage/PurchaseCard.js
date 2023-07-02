import React, { useState } from 'react';
import './../../assets/css/purchasecard.css';

const PurchaseCard = ({ item, onQuantityChange }) => {
    const [itemQuantity, setItemQuantity] = useState(item.quantity);

  const decreaseQuantity = () => {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
      onQuantityChange(item.id, itemQuantity - 1); // Notify parent component
    }
  };

  const increaseQuantity = () => {
    setItemQuantity(itemQuantity + 1);
    onQuantityChange(item.id, itemQuantity + 1); // Notify parent component
  };
    const total = item.price * itemQuantity;

    if (itemQuantity === 0) {
        return null; // Return null to remove the card from the UI
    }

    return (
        <div className="item-card">
            {/* <img src={`https://innoshop-backend.onrender.com/${item.id}.jpg`} alt={item.name} className='item-image' /> */}
            <div className="price-section">
                <h3>
                    {item.name}
                </h3>
                <p>Price: {item.price}</p>
                {/* <p>Total: {total}</p> */}
            </div>
            <div className="quantity-section">
                <button onClick={decreaseQuantity} className="quantity-btn">
                    -
                </button>
                <span>{itemQuantity}</span>
                <button onClick={increaseQuantity} className="quantity-btn">
                    +
                </button>
            </div>

        </div>
    );
};

export default PurchaseCard;
