import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemove }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please buy something</p>;
  } else {
    message = <p>Thanks for buying</p>;
  }

  return (
    <div className="cart">
      <h3>Cart</h3>
      <h4>Total Cart: {cart.length}</h4>
      {cart.map((tshirt) => (
        <div key={tshirt._id}>
          <div className="cart-product">
            <p>{tshirt.name}</p>
            <button onClick={() => handleRemove(tshirt._id)}>X</button>
          </div>
        </div>
      ))}
      {/* Condition */}
      {message}
      {cart.length === 0 ? <p>Please buy!</p> : <p>Thanks for buying!!!</p>}
      {cart.length === 3 && <p>You're going to get a surprice!</p>}
      {cart.length === 0 || <p>Thanks for buying!</p>}
    </div>
  );
};

export default Cart;
