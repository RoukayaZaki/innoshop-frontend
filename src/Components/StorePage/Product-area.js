import React, { useState } from 'react';
import Filters from './Filters';
import Products from './Products';
import './../../assets/css/product-area.css';

const Product_area = ({ products }) => {
  const [sortedProducts, setSortedProducts] = useState(products);
  const [selectedFilters, setSelectedFilters] = useState({
    sortOption: '',
    minPrice: '',
    maxPrice: ''
  });

  const handleSort = (sortOption, minPrice, maxPrice) => {
    // Apply sorting logic based on the selected filters
    let sorted = [...products];
    if (sortOption === 'Newest First') {
      sorted.sort((a, b) => new Date(b.addition_time) - new Date(a.addition_time));
    } else if (sortOption === 'Newest Last') {
      sorted.sort((a, b) => new Date(a.addition_time) - new Date(b.addition_time));
    } else if (sortOption === '') {
      sorted = products;
    } else if (sortOption === 'Cheapest First') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'Cheapest Last') {
      sorted.sort((a, b) => b.price - a.price);
    }

    // Apply price range filtering
    sorted = sorted.filter((product) => {
      if (minPrice && maxPrice) {
        return product.price >= minPrice && product.price <= maxPrice;
      } else if (minPrice) {
        return product.price >= minPrice;
      } else if (maxPrice) {
        return product.price <= maxPrice;
      }
      return true;
    });

    setSortedProducts(sorted);
    setSelectedFilters({ sortOption, minPrice, maxPrice });
  };

  return (
    <div className="product-container" style={{ margin: '30px 0px' }}>
      <div className="row">
        <div className="col-3">
          <Filters onSort={handleSort} />
        </div>
        <div className="col-9">
          <h3>All Items</h3>
          {selectedFilters.sortOption === '' &&
            selectedFilters.minPrice === '' &&
            selectedFilters.maxPrice === '' ? (
            <Products products={products} />
          ) : (
            <Products products={sortedProducts} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product_area;
