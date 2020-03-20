import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  
  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
