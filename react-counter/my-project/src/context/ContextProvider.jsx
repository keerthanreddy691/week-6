import { createContext,useState } from "react"
//create context provider object
export const counterContextObj=createContext()
function ContextProvider({children}) {
    const [counter,setCounter]=useState(10)
    const incrementCounter=()=>{
        setCounter(counter+1)
    }
    const decrementCounter=()=>{
        setCounter(counter-1)
    }
    
      return (
  <counterContextObj.Provider value={{counter,incrementCounter,decrementCounter}}>
{children}
  </counterContextObj.Provider>
  )

}
export default ContextProvider