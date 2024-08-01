import React from "react";
import { useState } from "react";
import { createContext } from "react";
export const MyContext = createContext(null);

const NewContext = (props) => {
  const [a, b,...rest] = [1, 2, 3, 4];
  console.log(a,b,rest, "abcd");
  // console.log(useState(), "abcd");
  const [count, setCount] = useState(0);
  return (
    <MyContext.Provider value={{ count, setCount }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default NewContext;
