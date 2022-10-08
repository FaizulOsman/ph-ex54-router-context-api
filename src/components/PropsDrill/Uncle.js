import React from "react";
import Cousin from "./Cousin";

const Uncle = () => {
  return (
    <div>
      <h3>Uncle</h3>
      <div
        style={{
          display: "grid",
          gridGap: "12px",
          gridTemplateColumns: "repeat(2, 1fr)",
          border: "2px solid gray",
          padding: "12px",
        }}
      >
        <Cousin></Cousin>
        <Cousin></Cousin>
        <Cousin></Cousin>
        <Cousin></Cousin>
      </div>
    </div>
  );
};

export default Uncle;
