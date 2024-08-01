import React from "react";
import Parent from "./Parent";
import NewContext from "./NewContext";
import Child from "./Child";

const MainParent = () => {
  return (
    <NewContext>
      <Parent />
      <Child />
    </NewContext>
  );
};

export default MainParent;
