import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getByDepartment } from "../utils/helper";
import { useEmployeeData } from "../hooks/useEmployeeData";

const DepartmentChart = () => {
  const { employees, loading } = useEmployeeData();

  const rawData = getByDepartment(employees);

  const chartData = Object.entries(rawData)
    .map(([department, employees]) => ({
      department,
      employees,
    }))
    .sort((a, b) => b.employees - a.employees);

  return (
    <div className=" shadow bg-base-200 border border-base-300 rounded-lg p-4 ">
      {loading ? (
        <div className="flex items-center justify-center h-[300px]">
          <span className="loading loading-dots loading-sm"></span>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="department" />
            <YAxis
              label={{
                value: "Employees",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip formatter={(value) => [`${value} employees`, "Count"]} />
            <Bar dataKey="employees" fill="#4f46e5" animationDuration={800} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default DepartmentChart;
