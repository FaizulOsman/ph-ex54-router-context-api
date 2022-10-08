import React from "react";
import { Link } from "react-router-dom";

const ErrorDetails = () => {
  return (
    <div>
      <h2>This page is not found!!!</h2>
      <h3>
        Go back to <Link to="/">Home</Link> page.
      </h3>
    </div>
  );
};

export default ErrorDetails;
