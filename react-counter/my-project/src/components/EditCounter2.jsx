import { useContext } from "react"
import { counterContextObj } from "../context/ContextProvider"
function EditCounter2() {
  const {counter,incrementCounter,decrementCounter}=useContext(counterContextObj)
  return (
    <div className="bg-amber-50 p-10 text-center">
      <h1>EditCounter2</h1>
      <h1 className="text-2xl">counter:{counter}</h1>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  )
}

export default EditCounter2