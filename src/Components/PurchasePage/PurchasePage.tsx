import React from "react";
import Header from "../Header/Header";
import NavBar from "./../NavBar/NavBar";
import Footer from "../Footer/Footer";
import CheckoutPart from "./CheckoutPart";
import PersonalizedHeader from "../Header/PersonalizedHeader";
import { useState, useEffect } from "react";
import { Item } from "./interface";


interface Product {
    name: string;
    // Add other properties of the product if necessary
}

const PurchasePage: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    const [filteredProducts, setFilteredProducts] = useState<Item[]>([]);

    const handleSearch = (keyword: string) => {
        console.log(keyword);
        const filtered = items.filter(
            (product) =>
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
