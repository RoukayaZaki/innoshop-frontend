import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/innou-logo 1.png';
import "./../../assets/css/header.css"

const Header = () => {
  return (
    <div className="header-cover">
      <div className="main-bar">
        <div className="start-section">
          <img src={logo} alt="Logo" />
        </div>
        <div className="end-section">
          <form className="header">
            <button type="submitsearch">Search</button>
            <input type="search" placeholder="Search..." />
          </form>
          <Link to="/signin" className="sign-in-button">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
