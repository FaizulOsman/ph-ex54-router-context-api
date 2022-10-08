import React, { useContext } from "react";
import { MoneyContext, HouseContext } from "./GrandParents";

const Sister = () => {
  const totalHouse = useContext(HouseContext);
  const totalMoney = useContext(MoneyContext);
  return (
    <div
      style={{
        border: "2px solid gray",
      }}
    >
      <h3>Sister</h3>
      <p>
        <small>House: {totalHouse}</small>
      </p>
      <p>
        <small>Money: {totalMoney}</small>
      </p>
    </div>
  );
};

export default Sister;
