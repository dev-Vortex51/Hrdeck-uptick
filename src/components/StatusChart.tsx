import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { getByStatus } from "../utils/helper";
import { useEmployeeData } from "../hooks/useEmployeeData";

const COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444", "#6366f1"];

const StatusChart = () => {
  const { employees, loading } = useEmployeeData();

  const rawData = getByStatus(employees);

  const chartData = Object.entries(rawData).map(([status, value]) => ({
    name: status,
    value,
  }));

  return (
    <div className=" shadow bg-base-200 border border-base-300 rounded-lg p-4">
      {loading ? (
        <div className="flex justify-center items-center h-[300px]">
          <span className="loading loading-dots loading-sm" />
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              paddingAngle={5}
              innerRadius={50}
              outerRadius={80}
              dataKey="value"
              label
            >
              {chartData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default StatusChart;
