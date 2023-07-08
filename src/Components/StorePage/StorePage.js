import "./../../assets/css/storepage.css"

import Header from "../Header/Header";
import Hero_Banner from "./Hero-Banner";
import NavBar from "./../NavBar/NavBar";
import Product_area from "./Product-area";
import Footer from "../Footer/Footer";
import PersonalizedHeader from "../Header/PersonalizedHeader";
import { useEffect, useState } from "react";
import axios from 'axios';

const StorePage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSearch = (keyword) => {
        console.log(keyword);
        const filtered = products.filter(
            (product) =>
                product.name.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    useEffect(() => {
        console.log('Products loading....');
        axios
            .get('http://localhost:3001/api/v1/products?limit=15')
            .then(response => {
                const receivedProducts = response.data.data.products;
                setProducts(receivedProducts);
            });
    }, []);

    const token = localStorage.getItem('token');
    if (token === null) {
        return (
            <div>
                <Header onSearch={handleSearch} />
                <NavBar />
                <div className="storepage-aligner">
                    <Hero_Banner />
                    {filteredProducts.length === 0 ? (
                        <Product_area products={products} />
                    ) : (
                        <Product_area products={filteredProducts} />
                    )}
                </div>
                <Footer />
            </div>
        );
    } else {
        return (
            <div>
                <PersonalizedHeader onSearch={handleSearch} />
                <NavBar />
                <div className="storepage-aligner">
                    <Hero_Banner />
                    {filteredProducts.length === 0 ? (
                        <Product_area products={products} />
                    ) : (
                        <Product_area products={filteredProducts} />
                    )}
                </div>
                <Footer />
            </div>
        );
    }
}

export default StorePage;
