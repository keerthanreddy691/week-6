import { useLocation } from "react-router-dom";

function DeleteEmp() {
  const { state } = useLocation();

  console.log(state); // selected employee object

  return (
    <div>
      <h1>Delete Employee</h1>
      <p>{state.name}</p>
    </div>
  );
}

export default DeleteEmp;
