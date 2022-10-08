import React from "react";
import Brother from "./Brother";
import Myself from "./Myself";
import Sister from "./Sister";

const Father = () => {
  return (
    <div>
      <h3>Father</h3>
      <div
        style={{
          display: "grid",
          gridGap: "12px",
          gridTemplateColumns: "repeat(2, 1fr)",
          border: "2px solid gray",
          padding: "12px",
        }}
      >
        <Myself></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </div>
    </div>
  );
};

export default Father;
