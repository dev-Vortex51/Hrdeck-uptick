import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { useEmployeeData } from "../hooks/useEmployeeData";
import {
  getTotalEmployees,
  getActiveEmployees,
  getTotalDepartments,
  getEmployeesOnProbation,
} from "../utils/helper"; // Adjust the import path as needed

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
        value={`${activeEmployees}${""}/${""}${onProbation}${""}/${""}${
          totalEmployees - activeEmployees - onProbation
        }`}
        loading={loading}
        growth={"+5"}
      />
    </div>
  );
};

type StatCardProps = {
  title: string;
  value: number | string;
  loading: boolean;
  growth?: string;
};

const StatCard = ({ title, value, loading, growth }: StatCardProps) => {
  return (
    <div className="stats shadow bg-base-200 border border-base-300 rounded-lg p-4">
      <div className="stat">
        <div className="stat-title">{title}</div>
        <div className="stat-value">
          {loading ? (
            <span className="loading loading-dots loading-sm"></span>
          ) : (
            value
          )}
        </div>
        {growth !== undefined && (
          <div
            className={`stat-desc flex items-center gap-3 ${
              growth.startsWith("-") ? "text-error " : "text-success"
            } `}
          >
            <div
              className={`inline-flex items-center gap-1 size-6 rounded-full p-1  ${
                growth.startsWith("-") ? "bg-error/20" : "bg-success/20"
              }`}
            >
              {growth.startsWith("-") ? <ArrowDownLeft /> : <ArrowUpRight />}
            </div>
            {growth}%
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardStats;
