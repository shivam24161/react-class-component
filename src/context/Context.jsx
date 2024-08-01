import React, { createContext, useState } from 'react'
export const MyContext=createContext(null);
const Context = (props) => {
  const [value,setValue]=useState(0)
  return (
    <MyContext.Provider value={{value,setValue}}>
        {props.children}
    </MyContext.Provider>
  )
}

export default Context