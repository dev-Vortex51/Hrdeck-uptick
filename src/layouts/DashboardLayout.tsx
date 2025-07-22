import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      <div>
        {/* This is where the nested routes will be rendered */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
