import React, { useContext } from "react";
import { MyContext } from "./NewContext";

const Child = () => {
  const { count, setCount } = useContext(MyContext);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Click</button>
    </div>
  );
};

export default Child;
