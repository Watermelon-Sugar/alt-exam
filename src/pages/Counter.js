import React from "react";
import { Helmet } from "react-helmet-async";
import NavLinks from "../components/NavLinks";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { state, increment, decrement, reset, setValue } = useCounter();
  return (
    <div className="count">
      <Helmet>
        <title>Counter</title>
        <meta name="description" content="Counter Page" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
        <NavLinks />
        <h1>Counter with useReducer</h1>
        <div>
          <label htmlFor="setValue">Set Value:</label>
          <input
            type="number"
            aria-label="Set Value"
            value={state.value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
        <div className="counter_main">
          <button
            className="decrement"
            onClick={() => {
              decrement();
            }}
          >
            -
          </button>
          <div className="counter"> {state.count} </div>
          <button
            className="increment"
            onClick={() => {
              increment();
            }}
          >
            +
          </button>
        </div>

        <div className="btn">
          <button
            className="reset"
            onClick={() => {
              reset();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
