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
    const [search, setSearch] = useState('');
    // const [filteredProducts, setFilteredProducts] = useState([]);
    
    const filteredProducts = products.filter(
        (product) =>
            search === '' || product.name.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        console.log('Products loading....');
        axios
            .get('http://localhost:3001/api/v1/products?limit=15')
            .then(response => {
                const receivedProducts = response.data.data.products;
                setProducts(receivedProducts);
                console.log(receivedProducts);
            });
    }, []);

    const handleDelete = (product) => {
        setProducts(products => products.filter(p => p._id !== product._id));
    }

    const token = localStorage.getItem('token');
    const MyHeader = token === null ? Header : PersonalizedHeader;
    return (
        <div>
            <MyHeader onSearch={setSearch} />
            <NavBar />
            <div className="storepage-aligner">
                <Hero_Banner />
                {filteredProducts.length === 0 ? (
                    <p>Your search didn't match any products</p>
                ) : (
                    <Product_area products={filteredProducts} onDelete={handleDelete} />
                )}
            </div>
            <Footer />
        </div>
    );
}

export default StorePage;
