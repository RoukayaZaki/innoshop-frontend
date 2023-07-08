import logo from './../../assets/innou-logo 1.png';
import "./../../assets/css/header.css"
import { Link } from 'react-router-dom';
import cart from './../../assets/shopping-cart.png'
import React, { useState } from 'react';

const PersonalizedHeader = ({ onSearch }) => {
    const handleSignOut = () => {
        localStorage.clear();
    };

    const [keyword, setKeyword] = useState('');

    const handleInputChange = (event) => {
        setKeyword(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(keyword);
    };

    return (
        <div className="header-cover">
            <div className="main-bar">
                <div className="start-section">
                    <img src={logo} alt="Logo" />
                    <form className="header" onSubmit={handleSearch}>
                        <button type="submit">Search</button>
                        <input value={keyword} onChange={handleInputChange} type="search" placeholder="Search..." />
                    </form>
                </div>
                <div className="end-section">
                    <Link to="/checkout" className="cart-icon">
                        <img src={cart} alt="Cart" />
                    </Link>
                    <Link to="/signin" className="sign-in-button" onClick={handleSignOut}>Sign Out</Link>
                </div>
            </div>
        </div>
    );
};

export default PersonalizedHeader;
