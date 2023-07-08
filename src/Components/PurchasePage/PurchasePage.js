import Header from "../Header/Header";
import NavBar from "./../NavBar/NavBar";
import Footer from "../Footer/Footer";
import CheckoutPart from "./CheckoutPart";
import PersonalizedHeader from "../Header/PersonalizedHeader";
import { useState, useEffect } from "react";
const PurchasePage = () => {
    const [items, setItems] = useState([]);
    

    useEffect(() => {
        // Retrieve items from local storage
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSearch = (keyword) => {
        console.log(keyword);
        const filtered = items.filter(
            (product) =>
                product.name.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div>
            <PersonalizedHeader onSearch={handleSearch}/>
            <NavBar />
            <CheckoutPart items={items} filtered={filteredProducts} />
            <Footer />
        </div>
    );
}

export default PurchasePage;
