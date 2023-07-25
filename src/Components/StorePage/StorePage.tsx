import "./../../assets/css/storepage.css";
import Header from "../Header/Header";
import HeroBanner from "./HeroBanner";
import NavBar from "../NavBar/NavBar";
import ProductArea from "./ProductArea";
import Footer from "../Footer/Footer";
import PersonalizedHeader from "../Header/PersonalizedHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Product } from "./Product";

const StorePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  // const [filteredProducts, setFilteredProducts] = useState([]);

  const filteredProducts = products.filter(
    (product) =>
      search === "" || product.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    console.log("Products loading....");
    axios
      .get("http://localhost:3001/api/v1/products?limit=12")
      .then((response) => {
        const receivedProducts = response.data.data.products;
        setProducts(receivedProducts);
        console.log(receivedProducts);
      });
  }, []);

  const handleDelete = (product: Product) => {
    setProducts((products) => products.filter((p) => p._id !== product._id));
  };

  const token = localStorage.getItem("token");
  const MyHeader = token === null ? Header : PersonalizedHeader;
  return (
    <div>
      <MyHeader onSearch={setSearch} />
      <NavBar />
      <div className="storepage-aligner">
        <HeroBanner />
        {filteredProducts.length === 0 ? (
          <p>Your search didn't match any products</p>
        ) : (
          <ProductArea products={filteredProducts} onDelete={handleDelete} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default StorePage;
