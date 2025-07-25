import { Link } from "react-router";

import Filters from "../components/Filters";
import Sort from "../components/Sort";
import EmployeeTable from "../components/EmployeeTable";

const departments = [
  "Engineering",
  "HR",
  "Marketing",
  "Sales",
  "Finance",
  "All",
];

const EmployeePage = () => {
  return (
    <main>
      <div className="w-[90%] sm:w-[85%] max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-base-content text-2xl font-bold ">Employee</h1>

          <Link to="/employees/new">
            <button className="btn btn-primary btn-sm sm:btn-md  px-4 sm:px-6 ">
              <span className="text-lg font-bold">+</span>
              <span className="hidden sm:inline ml-1">New</span>
            </button>
          </Link>
        </div>

        <div className="flex gap-4 max-w-[50rem] mt-6 flex-wrap">
          <Filters defaultOption="DEPARTMENT">
            {departments.map((dep) => (
              <option>{dep}</option>
            ))}
          </Filters>
        </div>
        <Sort />
        <EmployeeTable />
      </div>
    </main>
  );
};

export default EmployeePage;
