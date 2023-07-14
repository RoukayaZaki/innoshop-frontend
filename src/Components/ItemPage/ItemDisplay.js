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
            console.log(itemWithQuantity);
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
                    <img key={item.varieties[0].images[0]} src={`https://innoshop-backend.onrender.com/${item.varieties[0].images[0]}.jpg`} alt={`Gallery ${item.varieties[0].images[0]}`} />
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
                        <button onClick={handleDecreaseQuantity} className="quantity-btn">&ndash;</button>
                        <span>{quantity}</span>
                        <button onClick={handleIncreaseQuantity} className="quantity-btn">+</button>
                    </div>
                ) : (
                    <button onClick={handlePurchase}>Purchase</button>
                )}
                {item.varieties[0].size !== null && (
                    <div className="size-checklist">
                        <h3>Size</h3>
                        {item.varieties.map((variety, index) => (
                            <label
                                key={index}
                                className={variety.amount === 0 ? 'faded' : ''}
                            >
                                <input
                                    type="radio"
                                    name="size"
                                    id={index}
                                    value={variety.size}
                                    checked={variety.amount > 0}
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
};

export default ItemDisplay;
