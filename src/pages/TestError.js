import React from "react";
import { Link } from "react-router-dom";
const TestError = () => {
  const items = {
    fruit: "apple",
    berry: "strawberry",
  };
  return (
    <div>
      <h1>Test Error</h1>

      <h1>{items.fruit}</h1>
      <h2> {items}</h2>
      <Link to="/" className="links">
        Home
      </Link>
    </div>
  );
};

export default TestError;
