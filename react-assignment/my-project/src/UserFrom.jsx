import { useForm } from "react-hook-form";
import { useState } from "react";

function UserForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [users, setUsers] = useState([]);

  const onFormsubmit = (obj) => {
    console.log(obj);
    setUsers([...users, obj]);
  };

    return(
        <div>
            <h1 className="text-center text-5xl">User form</h1>
            <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormsubmit)}>
                <div className="mb-3">
                    <label htmlFor="firstname">username</label>
                    <input type="text" 
                    {...register("firstname",
                        {
                            required:"firstname required",
                            validate:(v)=>v.trim().length!=0 || 'white space is not valid',
                            minLength:4
                        }
                    )}
                    id="firstname"
                    className="border w-full p-3"
                    />
                    {
                        errors.firstname?.type==="required"&& <p className="text-red-600">{errors.firstname.message}</p>
                    }
                     {
                        errors.firstname?.type==="validate"&& <p className="text-red-600">{errors.firstname.message}</p>
                    }
                    {errors.firstname?.type==="minLength"&& <p className="text-red-800">min 4</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email">email</label>
                    <input type="text" 
                    {...register("email")}
                    id=""
                    className="border w-full p-3"/>
                  </div>
                {/* DOB */}
        <div className="mb-3">
          <label>DOB</label>
          <input
            type="date"
            {...register("DOB", { required: "DOB required" })}
            className="border w-full p-3"
          />
          {errors.DOB && (
            <p className="text-red-600">{errors.DOB.message}</p>
          )}
        </div>

        <button type="submit" className="bg-amber-300 px-4 py-2">
          Add User
        </button>
      </form>

      {/* ✅ USER TABLE */}
      <div className="max-w-md mx-auto mt-10">
        <h2 className="text-xl mb-3">User List</h2>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-4">Name</th>
              <th className="border p-4">Email</th>
              <th className="border p-4">DOB</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr key={index}>
                <td className="border p-4">{u.firstname}</td>
                <td className="border p-4">{u.email}</td>
                <td className="border p-4">{u.DOB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

//add a table where we get list of users (firstname,email,DoB)
export default UserForm

