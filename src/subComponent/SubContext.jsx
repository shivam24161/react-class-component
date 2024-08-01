import React, { createContext, useState } from 'react'
export const MySubContext=createContext(null)
const SubContext = ({children}) => {
    console.log(children)
  const [subValue,setSubValue]=useState(100)
  return (
    <MySubContext.Provider value={{subValue,setSubValue}}>
        {children}
    </MySubContext.Provider>
  )
}

export default SubContext