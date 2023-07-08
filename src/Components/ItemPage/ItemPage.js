import React, { useState, useEffect } from 'react';
import Header from "../Header/Header";
import NavBar from "./../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ItemDisplay from "./ItemDisplay";
import { useParams } from 'react-router-dom';
import PersonalizedHeader from '../Header/PersonalizedHeader';

const ItemPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://innoshop-backend.onrender.com/api/v1/products/${id}`);
                const jsonData = await response.json();
                setItem(jsonData);
                console.log("Here");
                console.log(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);
    console.log(item);
    const token = localStorage.getItem('token');
    if (token === null) {
        return (
            <div>
                <Header />
                <NavBar />
                {item ? (
                    <ItemDisplay prop={item} />
                ) : (
                    <p>Loading item...</p>
                )}
                <Footer />
            </div>
        );
    }
    else {
        return (
            <div>
                <PersonalizedHeader />
                <NavBar />
                {item ? (
                    <ItemDisplay prop={item} />
                ) : (
                    <p>Loading item...</p>
                )}
                <Footer />
            </div>
        );
    }

}

export default ItemPage;
