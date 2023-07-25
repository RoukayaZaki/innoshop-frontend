import React, { useState } from "react";
import Filters from "./Filter";
import Products from "./Products";
import "./../../assets/css/product-area.css";
import { Product } from "./Product";

const ProductArea = ({
  products,
  onDelete,
}: {
  products: Product[];
  onDelete: (product: Product) => void;
}) => {
  const [selectedFilters, setSelectedFilters] = useState({
    sortOption: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleSort = (
    sortOption: string,
    minPrice: string,
    maxPrice: string
  ) => {
    // Apply sorting logic based on the selected filters
    let sorted = [...products];
    if (sortOption === "Newest First") {
      sorted.sort(
        (a, b) =>
          new Date(b.addition_time ?? 0).getDate() -
          new Date(a.addition_time ?? 0).getDate()
      );
    } else if (sortOption === "Newest Last") {
      sorted.sort(
        (a, b) =>
          new Date(a.addition_time ?? 0).getDate() -
          new Date(b.addition_time ?? 0).getDate()
      );
    } else if (sortOption === "") {
      sorted = products;
    } else if (sortOption === "Cheapest First") {
      sorted.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortOption === "Cheapest Last") {
      sorted.sort((a, b) => Number(b.price) - Number(a.price));
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

    return sorted;
  };

  const sortedProducts = handleSort(
    selectedFilters.sortOption,
    selectedFilters.minPrice,
    selectedFilters.maxPrice
  );

  return (
    <div className="product-container" style={{ margin: "30px 0px" }}>
      <div className="row">
        <div className="col-3">
          <Filters
            onSort={(sortOption: any, minPrice: any, maxPrice: any) =>
              setSelectedFilters({ sortOption, minPrice, maxPrice })
            }
          />
        </div>
        <div className="col-9">
          <h3>All Items</h3>
          <Products products={sortedProducts} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default ProductArea;
