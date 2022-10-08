import React, { useContext } from "react";
import { MoneyContext, HouseContext } from "./GrandParents";

const Cousin = () => {
  const [house, setHouse] = useContext(HouseContext);
  const [money, setMoney] = useContext(MoneyContext);
  const ring = useContext(HouseContext);
  const totalMoney = useContext(MoneyContext);
  return (
    <div
      style={{
        border: "2px solid gray",
        paddingBottom: "10px",
      }}
    >
      <h3>Cousin</h3>
      <p>
        <small>House: {ring}</small>
      </p>
      <p>
        <small>Money: {totalMoney}</small>
      </p>
      <button onClick={() => setHouse(house - 1)}>House Decrease</button>
      <button onClick={() => setMoney(money - 100)}>Money Decrease</button>
    </div>
  );
};

export default Cousin;
