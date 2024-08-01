import React from 'react'
import SubComp1 from './subComponent/SubComp1'
import SubComp2 from './subComponent/SubComp2'
import SubContext from './subComponent/SubContext'
import MainParent from './newContext/MainParent'
import ClassComponent from './classComponent/ClassComponent'
import './App.css';
const App = () => {
  return (
    // <div>
    //   <div>
    //   <Component1/>
    //   <Component2/>
    //   </div>
    //   <hr/>
    //   <div>
    //    <SubContext>
    //    <SubComp1/>
    //     <SubComp2/>
    //    </SubContext>
    //   </div>
    // </div>
    // <Practise/>
    // <TableAnt/>
    <>
    {/* <MainParent/> */}
    <div className='main'>
    <ClassComponent/>
    </div>
    </>
  )
}

export default App