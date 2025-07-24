import { BrowserRouter, Navigate, Route, Routes } from "react-router";
// import { generateMockEmployees } from "./utils/mockdata";
import { lazy, Suspense } from "react";

import "./index.css";
// import { useEmployeeData } from "./hooks/useEmployeeData";

const DashboardLayout = lazy(() => import("./layouts/DashboardLayout"));
const NotFound = lazy(() => import("./pages/NotFound"));
const EmployeePage = lazy(() => import("./pages/EmployeePage"));
const CreateEmployee = lazy(() => import("./pages/CreateEmployee"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./pages/Login"));

const App = () => {
  // const { employees, loading } = useEmployeeData();
  // console.log("Employee Data:", employees);
  // console.log("Loading State:", loading);
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <span className="loading loading-dots loading-sm"></span>
          </div>
        }
      >
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route index element={<Navigate to={"/dashboard"} />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="employees" element={<EmployeePage />} />
            <Route path="employees/new" element={<CreateEmployee />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
