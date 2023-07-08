import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import './../../assets/css/item.css';

const ItemDisplay = ({ prop }) => {
    const a = prop.data;
    const item = a.product;
    const [quantity, setQuantity] = useState(0);

    const handlePurchase = () => {
        const existingItems = localStorage.getItem('items');
        let items = [];

        if (existingItems) {
            items = JSON.parse(existingItems);
        }

        const existingItemIndex = items.findIndex((existingItem) => existingItem._id === item._id);

        if (existingItemIndex !== -1) {
            items[existingItemIndex].quantity += 1;
            console.log('Quantity increased by 1!');
        } else {
            const itemWithQuantity = {
                ...item,
                quantity: 1,
            };

            items.push(itemWithQuantity);
            console.log('Item added to the list with quantity 1!');
        }

        localStorage.setItem('items', JSON.stringify(items));
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity((prevQuantity) => prevQuantity - 1);

            const existingItems = localStorage.getItem('items');
            let items = [];

            if (existingItems) {
                items = JSON.parse(existingItems);
            }

            const existingItemIndex = items.findIndex((existingItem) => existingItem._id === item._id);

            if (existingItemIndex !== -1) {
                items[existingItemIndex].quantity -= 1;
                setQuantity(items[existingItemIndex].quantity);
                console.log('Quantity decreased by 1!');
            }

            // Store the updated list in local storage
            localStorage.setItem('items', JSON.stringify(items));
        }
    };

    const handleIncreaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);

        const existingItems = localStorage.getItem('items');
        let items = [];

        if (existingItems) {
            items = JSON.parse(existingItems);
        }

        const existingItemIndex = items.findIndex((existingItem) => existingItem._id === item._id);

        if (existingItemIndex !== -1) {
            items[existingItemIndex].quantity += 1;
                setQuantity(items[existingItemIndex].quantity);
            console.log('Quantity increased by 1!');
        }

        localStorage.setItem('items', JSON.stringify(items));
    };

    useEffect(() => {
        const existingItems = localStorage.getItem('items');
        let items = [];

        if (existingItems) {
            items = JSON.parse(existingItems);
        }

        const existingItemIndex = items.findIndex((existingItem) => existingItem._id === item._id);

        if (existingItemIndex !== -1) {
            setQuantity(items[existingItemIndex].quantity);
        }

    })


    return (
        <div className="item-container">
            <div className="item-image">
                <img src={`https://innoshop-backend.onrender.com/${item.varieties[0].images[0]}.jpg`} alt={item.title} className="main-image" />
                <div className="image-gallery">
                    {item.varieties[0].images.map((photo, index) => (
                        <img key={index} src={`https://innoshop-backend.onrender.com/${photo}.jpg`} alt={`Gallery ${index}`} />
                    ))}
                </div>
            </div>
            <div className="item-details">
                <h2>{item.name}</h2>
                <p>{item.price}.00 R</p>
                {quantity > 0 ? (
                    <div className="quantity-control">
                        <button onClick={handleDecreaseQuantity} className="quantity-btn">&ndash;</button>
                        <span>{quantity}</span>
                        <button onClick={handleIncreaseQuantity} className="quantity-btn">+</button>
                    </div>
                ) : (
                    <button onClick={handlePurchase}>Purchase</button>
                )}
                {/* <div className="size-checklist">
          <h3>Size</h3>
          {sizes.map((size, index) => (
            <label key={index}>
              <input type="checkbox" name="size" value={size} />
              {size}
            </label>
          ))}
        </div> */}
            </div>
        </div>
    );
};

export default ItemDisplay;
