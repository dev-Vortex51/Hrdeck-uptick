import EmployeeForm from "../components/EmployeeForm";

const CreateEmployee = () => {
  return (
    <main>
      <div className="w-[90%] sm:w-[85%] max-w-[1280px] mx-auto">
        <h1 className="text-base-content text-2xl font-bold ">
          Create Employee
        </h1>
        <EmployeeForm />
      </div>
    </main>
  );
};

export default CreateEmployee;
