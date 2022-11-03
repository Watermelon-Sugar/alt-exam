import React from "react";
const TestError = () => {
  const items = {
    fruit: "apple",
    berry: "strawberry",
  };
  return (
    <div>
      <h1>Test Error</h1>

      <h1>{items.fruit}</h1>
      <h2> {{}}</h2>
    </div>
  );
};

export default TestError;
