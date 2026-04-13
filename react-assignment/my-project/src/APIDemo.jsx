import { useState,useEffect } from "react"
function APIDemo(){
    console.log("Api demo rendered")
    let [users,setUsers]=useState([])
    let[loading,setLoading]=useState(false);

    let[error, setError]=useState(null)
    
    useEffect(()=>{
        async function getData() {
            setLoading(true)
            try{
                let res=await fetch("https://jsonplaceholder.typicode.com/posts")
                let usersList=await res.json();
                setUsers(usersList)
            }
            catch(err){
                console.log("err is", err)
                setError
            }finally{
                setLoading(false)
            }
        }
        getData();

},[])
if(loading){
    return <p className="text-center text-5xl">loading.......</p>
}
if (error != null){
    return <p className="text-center text-5xl text-red-400">failed to fetch</p>
}

  return(
    <div className="text-center mt-10">
        <h1 className="text-6xl text-amber-600">Users list</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {users.map((userObj)=>(
                <div key={userObj.id}>
                    <p>{userObj.title}</p>
                    <p>{userObj.body}</p>
                    </div>
            ))}
        </div>
    </div>
  )
}
export default APIDemo