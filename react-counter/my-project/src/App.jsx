import EditCounter1 from "./components/EditCounter1"
import EditCounter2 from "./components/EditCounter2"
import EditCounter3 from "./components/EditCounter3"
import EditCounter4 from "./components/EditCounter4"
function App() {
  return (
    <div>
      <h1 className="text-center">App</h1>
      <div className=" grid grid-rows-2 sm:grid-cols-1 lg:grid-cols-2 mx-20 p-20 gap-5 ">
        
          <EditCounter1/>
        <EditCounter2/>
        <EditCounter3/>
        <EditCounter4/>
        
      </div>
   
    </div>
  )
}

export default App