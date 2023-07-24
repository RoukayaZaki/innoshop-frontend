import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import { Trash } from "react-bootstrap-icons";
import Alerting from "../Verdict/Alert";
import "./../../assets/css/product-card.css";
import React from "react";
import { Product } from "./Product";

async function deleteItem(id: string) {
  return fetch(`http://localhost:3001/api/v1/products/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

const ProductComponent = ({
  product,
  onDelete,
}: {
  product: Product;
  onDelete: (p: Product) => void;
}) => {
  const imgStr = `http://localhost:3001/${product.varieties[0].images[0]}`;

  const [isAdmin, setIsAdmin] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  const handleDelete = async () => {
    try {
      await deleteItem(product._id.toString());
      onDelete(product);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-xl">
      <Card style={{ width: "22rem", height: "33rem", margin: "0.5rem 0" }}>
        <Card.Img variant="top" crossOrigin="anonymous" src={imgStr} />
        <Card.Body className="bottom-of-card">
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Price: {product.price}</Card.Text>
          <div className="view-item">
            <Link to={"/product/" + product._id.toString()}>
              <Button id="button-btn" variant="primary">
                View it!
              </Button>
            </Link>
            {isAdmin && (
              <Trash
                onClick={() => setShowAlert(true)}
                color="darkred"
                size={30}
              />
            )}
            {showAlert && (
              <Alerting
                message="Are you sure you want to delete this item?"
                onAcceptance={handleDelete}
                onClose={() => setShowAlert(false)}
              />
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

const Products = ({
  products,
  onDelete,
}: {
  products: Product[];
  onDelete: (product: Product) => void;
}) => {
  return (
    <div className="container">
      <div className="row justify-content-start">
        {products.map((product) => (
          <ProductComponent
            key={product._id}
            product={product}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
