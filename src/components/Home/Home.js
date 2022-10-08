import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
    const exists = cart.find((shirt) => shirt._id === tshirt._id);
    if (exists) {
      alert("Already added this product.");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  const handleRemove = (id) => {
    const exist = cart.filter((tshirt) => tshirt._id !== id);
    setCart(exist);
  };

  return (
    <div className="home-container">
      <div className="t-shirt-container">
        {tshirts.map((tshirt) => (
          <TShirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemove={handleRemove}></Cart>
      </div>
    </div>
  );
};

export default Home;
