import EmployeeForm from "../components/EmployeeForm";
import { useEmployeeContext } from "../context/EmployeeContext";
import type { Employee } from "../types";

const CreateEmployee = () => {

const {setEmployees} = useEmployeeContext()

  function onSubmit(data : Employee){
    setEmployees((prev) => [...prev, data]);
  }
  return (
    <main>
      <div className="w-[90%] sm:w-[85%] max-w-[1280px] mx-auto">
        <h1 className="text-base-content text-2xl font-bold ">
          Create Employee
        </h1>
        <EmployeeForm mode="create" onSubmit={onSubmit} />
      </div>
    </main>
  );
};

export default CreateEmployee;
