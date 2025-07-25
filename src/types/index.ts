export type ContractType = "permanent" | "contract" | "intern" | "";
export type EmployeeStatus = "active" | "probation" | "terminated" | "";
export type UserRole = "admin" | "viewer";

export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  emergencyContact: string;
  hireDate: string;
  department: string;
  role: string;
  supervisor?: string;
  status: EmployeeStatus;
  contractType: ContractType;
  profilePhoto?: string | null | File; 
}

export interface User {
  id: string;
  username: string;
  password: string;
  role: UserRole;
}

export type SortKey = "name" | "hireDate";
export type SortOrder = "asc" | "desc";

export interface SearchOption {
  query: string;
}

export interface DashboardStats {
  totalEmployees: number;
  byDepartment: Record<string, number>;
  byStatus: Record<EmployeeStatus, number>;
  probationList: Employee[];
  recentHires: Employee[];
}

export type ExportFormat = "csv" | "json";

export interface EmployeeFormData {
  name: string;
  email: string;
  phone: string;
  emergencyContact: string;
  hireDate: string;
  department: string;
  role: string;
  supervisor?: string;
  status: EmployeeStatus;
  contractType: ContractType;
  profilePhoto?: File | string;
}
export interface LoginCredentials {
  username: string;
  password: string;
}
