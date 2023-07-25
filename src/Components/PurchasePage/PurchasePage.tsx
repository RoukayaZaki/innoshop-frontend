import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import CheckoutPart from "./Checkout";
import PersonalizedHeader from "../Header/PersonalizedHeader";
import { useState, useEffect } from "react";
import React from "react";
function PurchasePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (keyword: string) => {
    console.log(keyword);
    const filtered = items.filter((product: any) =>
      product.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <PersonalizedHeader onSearch={handleSearch} />
      <NavBar />
      <CheckoutPart items={items} filtered={filteredProducts} />
      <Footer />
    </div>
  );
}

export default PurchasePage;
