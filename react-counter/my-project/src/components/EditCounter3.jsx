import { useContext } from "react"
import { counterContextObj } from "../context/ContextProvider"
function EditCounter3() {
  const {counter,incrementCounter,decrementCounter}=useContext(counterContextObj)
  return (
    <div className="bg-amber-50 p-10 text-center">
      <h1>EditCounter3</h1>
      <h1 className="text-2xl">counter:{counter}</h1>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  )
}

export default EditCounter3