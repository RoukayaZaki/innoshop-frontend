import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './../../assets/css/purchasecard.css';

const PurchaseCard = ({ item, onDelete }) => {
  const [itemQuantity, setItemQuantity] = useState(item.quantity);

  const decreaseQuantity = () => {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  const increaseQuantity = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const total = item.price * itemQuantity;

  if (itemQuantity === 0) {
    return null; // Return null to remove the card from the UI
  }

  return (
    <Card className="item-card">
      {item.name}
      <div className="quantity-section">
        <Button onClick={decreaseQuantity} className="quantity-btn">
          -
        </Button>
        <span>{itemQuantity}</span>
        <Button onClick={increaseQuantity} className="quantity-btn">
          +
        </Button>
      </div>
      <div className="price-section">
        <span>Price: {item.price}</span>
        <span>Total: {total}</span>
      </div>
      
    </Card>
  );
};

export default PurchaseCard;
