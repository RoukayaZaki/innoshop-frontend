import logo from "./../../assets/innou-logo 1.png";
import "./../../assets/css/header.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Cart, Person } from "react-bootstrap-icons";

function PersonalizedHeader({ onSearch }: any) {
  const handleSignOut = () => {
    localStorage.clear();
  };

  const [keyword, setKeyword] = useState("");

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setKeyword(event.target.value);
  };

  const handleSearch = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onSearch(keyword);
  };

  return (
    <div className="header-cover">
      <div className="main-bar">
        <div className="start-section">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <form className="header" onSubmit={handleSearch}>
            <button type="submit" className="submit-search">
              Search
            </button>
            <input
              value={keyword}
              onChange={handleInputChange}
              type="search"
              placeholder="Search..."
            />
          </form>
        </div>
        <div className="end-section">
          <Link to="/checkout" className="cart-icon">
            <Cart size={36} color="#003459" />
          </Link>
          <Link to="/profile" className="cart-icon">
            <Person size={39} color="#003459" />
          </Link>
          <Link to="/signin" className="sign-in-button" onClick={handleSignOut}>
            Sign Out
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PersonalizedHeader;
function onSearch(keyword: string) {
  throw new Error("Function not implemented.");
}
