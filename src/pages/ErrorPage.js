import React from "react";

import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <h2>404 Page</h2>
      <p>Sorry, this page cannot be found</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default ErrorPage;
