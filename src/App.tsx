import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import { lazy, Suspense } from "react";

import "./index.css";

const DashboardLayout = lazy(() => import("./layouts/DashboardLayout"));

const ProtectedRoute = lazy(() => import("./components/ProtectedRoute"));
const NotFound = lazy(() => import("./pages/NotFound"));
const EmployeePage = lazy(() => import("./pages/EmployeePage"));
const CreateEmployee = lazy(() => import("./pages/CreateEmployee"));
const EditEmployee = lazy(() => import("./pages/EditEmployee"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./pages/Login"));

const App = () => {
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
          <Route
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to={"/dashboard"} />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="employees" element={<EmployeePage />} />
            <Route path="employees/new" element={<CreateEmployee />} />
            <Route path="employees/edit/:id" element={<EditEmployee />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
