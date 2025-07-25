export type ContractType = "permanent" | "contract" | "intern" | "";
export type EmployeeStatus = "active" | "probation" | "recent" | "";
export type UserRole = "admin" | "viewer";


export type FormData = {
  name: string;
  email: string;
  phone: string;
  emergencyContact: string;
  hireDate: string;
  department: string;
  role: string;
  supervisor?: string | undefined;
  contractType: ContractType;
  profilePhoto: string | File | null;
};

export type EmployeeFormProps = {
  initialValues?: Employee; 
  onSubmit: (data: Employee) => void;
  mode?: "create" | "edit";
};

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
  profilePhoto: string | null | File ;
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
