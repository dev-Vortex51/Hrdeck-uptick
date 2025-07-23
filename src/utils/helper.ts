import type { Employee } from "../types";

export const getTotalEmployees = (
  employees: Employee[] | null | undefined
): number => {
  return employees?.length || 0;
};

export const getTotalDepartments = (
  employees: Employee[] | null | undefined
): number => {
  return employees ? new Set(employees.map((emp) => emp.department)).size : 0;
};

export const getActiveEmployees = (
  employees: Employee[] | null | undefined
): number => {
  return employees?.filter((emp) => emp.status === "active").length || 0;
};

export const getEmployeesOnProbation = (
  employees: Employee[] | null | undefined
): number => {
  return employees?.filter((emp) => emp.status === "probation").length || 0;
};

export const getTerminatedEmployees = (
  employees: Employee[] | null | undefined
): number => {
  return employees?.filter((emp) => emp.status === "terminated").length || 0;
};

export const getByDepartment = (
  employees: Employee[] | null | undefined
): Record<string, number> => {
  return employees
    ? employees.reduce<Record<string, number>>((acc, emp) => {
        acc[emp.department] = (acc[emp.department] || 0) + 1;
        return acc;
      }, {})
    : {};
};

export const getByStatus = (
  employees: Employee[] | null | undefined
): Record<string, number> => {
  return employees
    ? employees.reduce<Record<string, number>>((acc, emp) => {
        acc[emp.status] = (acc[emp.status] || 0) + 1;
        return acc;
      }, {})
    : {};
};
