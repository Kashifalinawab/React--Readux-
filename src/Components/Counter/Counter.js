import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "Increment" })}>Plus</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Sub</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
}

export default Counter;
