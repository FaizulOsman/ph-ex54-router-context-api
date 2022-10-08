import React from "react";
import "./TShirt.css";

const TShirt = ({ tshirt, handleAddToCart }) => {
  const { _id, name, picture, price } = tshirt;

  return (
    <div className="t-shirt">
      <img src={picture} alt="img" />
      <h2>{name}</h2>
      <h4>Price: {price}</h4>
      <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
    </div>
  );
};

export default TShirt;
