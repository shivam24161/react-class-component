import React, { useContext } from "react";
import { MySubContext } from "./SubContext";

const SubComp1 = () => {
  const { subValue, setSubValue } = useContext(MySubContext);
  return (
    <div>
      <table>
       <tbody>
       <tr>
          <td>Sub-component 1</td>
          <td>{subValue}</td>
          <td>
            <button onClick={() => setSubValue((subValue) => subValue + 1)}>
              Click
            </button>
          </td>
        </tr>
       </tbody>
      </table>
    </div>
  );
};

export default SubComp1;
