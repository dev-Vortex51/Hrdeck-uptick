import { Navigate } from "react-router";
import { useEmployeeContext } from "../context/EmployeeContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useEmployeeContext();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
