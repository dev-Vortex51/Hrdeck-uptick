
import { useEmployeeData } from "../hooks/useEmployeeData";
import {
  getTotalEmployees,
  getActiveEmployees,
  getTotalDepartments,
  getEmployeesOnProbation,
} from "../utils/helper";
import StatCard from "./StatCard";

const DashboardStats = () => {
  const { employees, loading } = useEmployeeData();

  const totalEmployees = getTotalEmployees(employees);
  const activeEmployees = getActiveEmployees(employees);
  const onProbation = getEmployeesOnProbation(employees);
  const totalDepartments = getTotalDepartments(employees);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatCard
        title="Total Employees"
        value={totalEmployees}
        loading={loading}
        growth={"+10"}
      />

      <StatCard
        title="By Departments"
        value={totalDepartments}
        loading={loading}
        growth={"-3"}
      />

      <StatCard
        title="Active / On Probation / Recently Hired"
        value={`${activeEmployees}/${onProbation}/${""}${
          totalEmployees - activeEmployees - onProbation
        }`}
        loading={loading}
        growth={"+5"}
      />
    </div>
  );
};



export default DashboardStats;
