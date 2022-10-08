import React from "react";

const Brother = () => {
  return (
    <div
      style={{
        display: "grid",
        gridGap: "12px",
        gridTemplateColumns: "repeat(2, 1fr)",
        border: "2px solid gray",
      }}
    >
      <h3>Brother</h3>
    </div>
  );
};

export default Brother;
