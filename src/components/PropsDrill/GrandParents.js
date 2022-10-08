import React, { createContext, useState } from "react";
import Father from "./Father";
import Uncle from "./Uncle";

const grandPaStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "12px",
  border: "2px solid gray",
  padding: "15px",
  width: "90%",
  margin: "30px auto",
};

export const HouseContext = createContext();
export const MoneyContext = createContext();

const GrandParents = () => {
  const [house, setHouse] = useState(1);
  const [money, setMoney] = useState(100);

  return (
    <div style={grandPaStyle}>
      <HouseContext.Provider value={[house, setHouse]}>
        <MoneyContext.Provider value={[money, setMoney]}>
          <Father></Father>
          <Uncle></Uncle>
        </MoneyContext.Provider>
      </HouseContext.Provider>
    </div>
  );
};

export default GrandParents;
