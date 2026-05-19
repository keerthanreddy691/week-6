import { useLocation, useNavigate } from "react-router-dom";

function DeleteEmp() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const deleteEmployee = async () => {
    const res = await fetch(
      `https://emp-backend-zdvn.onrender.com/emp-api/employees/${state._id}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();
    alert(data.message);

    navigate("/");
  };

  return (
    <div className="text-center">
      <h1>Delete Employee</h1>

      <p>{state.name}</p>

      <button
        onClick={deleteEmployee}
        className="bg-red-600 text-white p-2 rounded"
      >
        Confirm Delete
      </button>
    </div>
  );
}

export default DeleteEmp;
