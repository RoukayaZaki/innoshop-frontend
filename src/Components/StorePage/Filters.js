import React, { useState } from 'react';
import "./../../assets/css/filters.css";

const Filters = ({ onSort }) => {
  const [sortOption, setSortOption] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
    onSort(event.target.value, minPrice, maxPrice);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
    onSort(sortOption, event.target.value, maxPrice);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
    onSort(sortOption, minPrice, event.target.value);
  };

  return (
    <div className="sidebar">
      <h2>Filters</h2>

      <h3>Date</h3>
      <ul>
        <li>
          <label>
            <input
              type="radio"
              name="datefilter"
              value="Newest First"
              checked={sortOption === 'Newest First'}
              onChange={handleSortOptionChange}
            />{' '}
            Newest First
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="datefilter"
              value="Newest Last"
              checked={sortOption === 'Newest Last'}
              onChange={handleSortOptionChange}
            />{' '}
            Newest Last
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="datefilter"
              value="Cheapest First"
              checked={sortOption === 'Cheapest First'}
              onChange={handleSortOptionChange}
            />{' '}
            Cheapest First
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="datefilter"
              value="Cheapest Last"
              checked={sortOption === 'Cheapest Last'}
              onChange={handleSortOptionChange}
            />{' '}
            Cheapest Last
          </label>
        </li>
      </ul>

      <h3>Price Range</h3>
      <div className="price-range">
        <select name="min-price" value={minPrice} onChange={handleMinPriceChange}>
          <option value="0">Min</option>
          <option value="500">500 R</option>
          <option value="1000">1000 R</option>
          <option value="2000">2000 R</option>
        </select>
        <select name="max-price" value={maxPrice} onChange={handleMaxPriceChange}>
          <option value="100000000">Max</option>
          <option value="500">500 R</option>
          <option value="1000">1000 R</option>
          <option value="2000">2000 R</option>
        </select>
      </div>
      <br />
    </div>
  );
};

export default Filters;
