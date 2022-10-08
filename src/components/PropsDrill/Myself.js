import React, { useContext } from "react";
import Friend from "./Friend";
import { MoneyContext, HouseContext } from "./GrandParents";

const Myself = () => {
  const [house, setHouse] = useContext(HouseContext);
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div
      style={{
        border: "2px solid gray",
        padding: "10px",
        paddingBottom: "10px",
      }}
    >
      <h3>Myself</h3>
      <button onClick={() => setHouse(house + 1)}>House Increase</button>
      <button onClick={() => setMoney(money + 100)}>Money Increase</button>
      <Friend></Friend>
    </div>
  );
};

export default Myself;
