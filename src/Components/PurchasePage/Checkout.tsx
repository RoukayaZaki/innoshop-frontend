import React, { useState, useEffect } from "react";
import PurchaseCard from "./PurchaseCard";
import Total from "./Total";
import "./../../assets/css/checkoutpart.css";

const CheckoutPart = ({ items, filtered }: any) => {
  const [updatedItems, setUpdatedItems] = useState([]);

  useEffect(() => {
    setUpdatedItems(items);
  }, [items]);

  const handleQuantityChange = (
    itemId: any,
    itemSize: any,
    newQuantity: number
  ) => {
    setUpdatedItems((prevItems: any) => {
      let updatedItemList = prevItems.map((item: any) => {
        if (item._id === itemId && item.size === itemSize) {
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      });
      if (newQuantity === 0) {
        updatedItemList = updatedItemList.filter(
          (item: any) => itemId !== item._id || item.size !== itemSize
        );
      }
      localStorage.setItem("items", JSON.stringify(updatedItemList));
      return updatedItemList;
    });
  };

  const calculateTotal = () => {
    let total = 0;
    updatedItems.forEach((item: any) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div className="checkout-page">
      <div className="items-section">
        {filtered.length === 0
          ? items.map((item: any) => (
              <PurchaseCard
                item={item}
                key={item._id}
                onQuantityChange={handleQuantityChange}
              />
            ))
          : filtered.map((item: any) => (
              <PurchaseCard
                item={item}
                key={item._id}
                onQuantityChange={handleQuantityChange}
              />
            ))}
      </div>
      <Total checkout={items} total={calculateTotal()} />
    </div>
  );
};

export default CheckoutPart;
