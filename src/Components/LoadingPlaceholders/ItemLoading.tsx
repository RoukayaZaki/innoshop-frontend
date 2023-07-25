import Placeholder from "react-bootstrap/Placeholder";
import Card from "react-bootstrap/Card";
import React from "react";

function ItemLoading() {
  return (
    <div className="item-container">
      <div className="item-image">
        <Card.Img
          variant="top"
          src="https://placehold.co/600x400?text=..."
          className="main-image"
        />
        <div className="image-gallery">
          <Card.Img variant="top" src="https://placehold.co/600x400?text=..." />
        </div>
      </div>
      <div className="item-details">
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={9} />
        </Placeholder>
        <Placeholder as={Card.Subtitle} className="my-3" animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder.Button variant="dark" xs={2} />
      </div>
    </div>
  );
}

export default ItemLoading;
