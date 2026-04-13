import { useForm } from "react-hook-form"
function formdemo() {
  const{register,handleSubmit,formState:{errors}}=  useForm()
  const onFormsubmit=(obj)=>{
    console.log(obj);
  }
    return(
        <div>
            <h1 className="text-center text-5xl">form demo</h1>
            <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormsubmit)}>
                <div className="mb-3">
                    <label htmlFor="username">username</label>
                    <input type="text" 
                    {...register("username",
                        {
                            required:"username required",
                            validate:(v)=>v.trim().length!=0 || 'white space is not valid',
                            minLength:4
                        }
                    )}
                    id="username"
                    className="border w-full p-3"
                    />
                    {
                        errors.username?.type==="required"&& <p className="text-red-600">{errors.username.message}</p>
                    }
                     {
                        errors.username?.type==="validated"&& <p className="text-red-600">{errors.username.message}</p>
                    }
                    {errors.username?.type==="minLength"&& <p className="text-red-800">min 4</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email">email</label>
                    <input type="text" 
                    {...register("email")}
                    id=""
                    className="border w-full p-3"/>
                  </div>
                  <button type="submit" className=" bg-amber-300">submit</button>
            </form>
        </div>

    )
    
}
export default formdemo