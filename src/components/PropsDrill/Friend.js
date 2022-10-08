import React, { useContext } from "react";
import { HouseContext } from "./GrandParents";

const Friend = () => {
  const ring = useContext(HouseContext);
  return (
    <div
      style={{
        border: "2px solid gray",
      }}
    >
      <h3>Friend</h3>
      <small>House: {ring}</small>
    </div>
  );
};

export default Friend;
