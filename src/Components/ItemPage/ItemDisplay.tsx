import React, { useEffect, useState } from "react";
import "./../../assets/css/item.css";
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

interface Props {
  prop: { data: { product: Item } };
}
function ItemDisplay({ prop }: Props) {
  const a = prop.data;
  const item = a.product;
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  const handlePurchase = () => {
    const existingItems = localStorage.getItem("items");
    let items: Item[] = [];

    if (existingItems) {
      items = JSON.parse(existingItems);
    }

    let existingItemIndex = -1;
    if (item.varieties[0].size !== null) {
      existingItemIndex = items.findIndex(
        (existingItem) =>
          existingItem._id === item._id && existingItem.size === selectedSize
      );
    } else {
      existingItemIndex = items.findIndex(
        (existingItem) => existingItem._id === item._id
      );
    }

    if (existingItemIndex !== -1) {
      items[existingItemIndex].quantity += 1;
      console.log("Quantity increased by 1!");
    } else {
      const itemWithQuantity = {
        ...item,
        quantity: 1,
        size: selectedSize,
      };

      items.push(itemWithQuantity);
      console.log("Item added to the list with quantity 1!");
      console.log(itemWithQuantity);
    }

    localStorage.setItem("items", JSON.stringify(items));
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);

      const existingItems = localStorage.getItem("items");
      let items = [];

      if (existingItems) {
        items = JSON.parse(existingItems);
      }
      let existingItemIndex = -1;
      if (item.varieties[0].size !== null) {
        existingItemIndex = items.findIndex(
          (existingItem: Item) =>
            existingItem._id === item._id && existingItem.size === selectedSize
        );
      } else {
        existingItemIndex = items.findIndex(
          (existingItem: Item) => existingItem._id === item._id
        );
      }

      if (existingItemIndex !== -1) {
        items[existingItemIndex].quantity -= 1;
        setQuantity(items[existingItemIndex].quantity);
        console.log("Quantity decreased by 1!");
      }

      // Store the updated list in local storage
      localStorage.setItem("items", JSON.stringify(items));
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);

    const items = JSON.parse(localStorage.getItem("items") ?? "[]");

    let existingItemIndex = -1;
    if (item.varieties[0].size !== null) {
      existingItemIndex = items.findIndex(
        (existingItem: { _id: any; size: string }) =>
          existingItem._id === item._id && existingItem.size === selectedSize
      );
    } else {
      existingItemIndex = items.findIndex(
        (existingItem: { _id: any }) => existingItem._id === item._id
      );
    }

    if (existingItemIndex !== -1) {
      items[existingItemIndex].quantity += 1;
      setQuantity(items[existingItemIndex].quantity);
      console.log("Quantity increased by 1!");
    }

    localStorage.setItem("items", JSON.stringify(items));
  };
  const handleSizeChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedSize(event.target.value);

    const items = JSON.parse(localStorage.getItem("items") ?? "[]");

    let existingItem: { quantity: any };
    if (item.varieties[0].size !== null) {
      existingItem = items.find(
        (existingItem: { _id: any; size: any }) =>
          existingItem._id === item._id &&
          existingItem.size === event.target.value
      );
    } else {
      existingItem = items.find(
        (existingItem: { _id: any }) => existingItem._id === item._id
      );
    }
    setQuantity(existingItem?.quantity ?? 0);
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items") ?? "[]");

    let existingItemIndex = -1;
    if (item.varieties[0].size !== null) {
      existingItemIndex = items.findIndex(
        (existingItem: { _id: any; size: string }) =>
          existingItem._id === item._id && existingItem.size === selectedSize
      );
    } else {
      existingItemIndex = items.findIndex(
        (existingItem: { _id: any }) => existingItem._id === item._id
      );
    }

    if (existingItemIndex !== -1) {
      setQuantity(items[existingItemIndex].quantity);
    }
  }, [item._id, item.varieties, selectedSize]);

  return (
    <div className="item-container">
      <div className="item-image">
        <img
          src={`http://localhost:3001/${item.varieties[0].images[0]}`}
          crossOrigin="anonymous"
          alt={item.title}
          className="main-image"
        />
        <div className="image-gallery">
          <img
            key={item.varieties[0].images[0]}
            crossOrigin="anonymous"
            src={`http://localhost:3001/${item.varieties[0].images[0]}`}
            alt={`Gallery ${item.photoID}`}
          />
          {/* {item.varieties.map((variety, index) => (
                        // variety.images.map((photo, index) => (
                        // ))
                    ))} */}
        </div>
      </div>
      <div className="item-details">
        <h2>{item.name}</h2>
        <p>{item.price}.00 R</p>
        {quantity > 0 ? (
          <div className="quantity-control">
            <button onClick={handleDecreaseQuantity} className="quantity-btn">
              &ndash;
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncreaseQuantity} className="quantity-btn">
              +
            </button>
          </div>
        ) : (
          <button onClick={handlePurchase}>Purchase</button>
        )}
        {item.varieties[0].size !== null && (
          <div className="size-checklist">
            <h3>Size</h3>
            {item.varieties.map((variety: Variety, index: number) => (
              <label
                key={index}
                className={variety.amount === 0 ? "faded" : ""}
              >
                <input
                  type="radio"
                  name="size"
                  id={index.toString()}
                  value={variety.size ?? ""}
                  checked={variety.size === selectedSize}
                  onChange={handleSizeChange}
                  disabled={variety.amount === 0}
                />
                <span className="size-label">{variety.size}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemDisplay;
