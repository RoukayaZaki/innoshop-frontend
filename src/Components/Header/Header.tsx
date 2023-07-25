import logo from "./../../assets/innou-logo 1.png";
import "./../../assets/css/header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

interface Props {
  onSearch?: any;
}

export default function Header(onSearch?: any) {
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
          <img src={logo} alt="Logo" />
        </div>
        <div className="end-section">
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
          <Link to="/signin" className="sign-in-button">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

function onSearch(keyword: string) {
  throw new Error("Function not implemented.");
}
