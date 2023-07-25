import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ItemDisplay from "./ItemDisplay";
import { useParams } from "react-router-dom";
import PersonalizedHeader from "../Header/PersonalizedHeader";
import ItemLoading from "../LoadingPlaceholders/ItemLoading";

const ItemPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/v1/products/${id}`
        );
        const jsonData = await response.json();
        setItem(jsonData);
        console.log("Here");
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  console.log(item);
  const token = localStorage.getItem("token");
  const MyHeader = token === null ? Header : PersonalizedHeader;
  return (
    <div>
      <MyHeader />
      <NavBar />
      {item ? <ItemDisplay prop={item} /> : <ItemLoading />}
      <Footer />
    </div>
  );
};

export default ItemPage;
