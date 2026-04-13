import { useState } from 'react'
import UserForm from './UserFrom';

import './App.css'
  //state
  function App(){
    const [count,setCount]=useState(0)
  

  console.log("rendered");
  //return react element
  return (
    <div>
      <UserForm></UserForm>
    </div>
  );
}



export default App
