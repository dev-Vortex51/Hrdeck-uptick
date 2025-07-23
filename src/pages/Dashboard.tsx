import DashboardStats from "../components/DashboardStats";
import DepartmentChart from "../components/DepartmentChart";
import StatusChart from "../components/StatusChart";

const Dashboard = () => {
  return (
    <main>
      <div className="w-[90%] sm:w-[85%] max-w-[1280px] mx-auto">
        <h1 className="text-base-content text-2xl font-bold mb-5">Dashboard</h1>

        {/* Stats summary */}
        <DashboardStats />

        {/* Charts */}
        <div className="flex flex-wrap gap-5 mt-6">
          <div className="flex-1 min-w-[300px]">
            <DepartmentChart />
          </div>
          <div className="flex-1 min-w-[300px]">
            <StatusChart />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
