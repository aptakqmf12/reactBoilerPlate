import React from "react";
import { useCounter } from "hooks";

const Counter = () => {
  const { count, setCountUp } = useCounter();
  return (
    <div>
      {count} <button onClick={() => setCountUp(2)}>up</button>
    </div>
  );
};

export default Counter;
