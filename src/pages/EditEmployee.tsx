import { useParams } from "react-router";
import EmployeeForm from "../components/EmployeeForm";
import { useEmployeeContext } from "../context/EmployeeContext";
import type { Employee } from "../types";

const EditEmployee = () => {
    const { employees, setEmployees } = useEmployeeContext()
    const { id } = useParams()
    const initialValues = employees.find(emp => emp.id === id)


    function onSubmit(data: Employee) {
        setEmployees(prev => prev.map(emp => emp.id === id ? { ...emp, ...data } : emp));

    }
    return (
        <main>
            <div className="w-[90%] sm:w-[85%] max-w-[1280px] mx-auto">
                <h1 className="text-base-content text-2xl font-bold ">
                    Edit Employee #{id?.slice(0, 5)}
                </h1>
                <EmployeeForm initialValues={initialValues} mode="edit" onSubmit={onSubmit} />
            </div>
        </main>
    );
};

export default EditEmployee;
