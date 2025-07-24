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

const getCountByStatus = (
  employees: Employee[] | null | undefined,
  status: string
): number => {
  return getByStatus(employees)[status] || 0;
};

export const getActiveEmployees = (
  employees: Employee[] | null | undefined
): number => getCountByStatus(employees, "active");

export const getEmployeesOnProbation = (
  employees: Employee[] | null | undefined
): number => getCountByStatus(employees, "probation");

export const getTerminatedEmployees = (
  employees: Employee[] | null | undefined
): number => getCountByStatus(employees, "terminated");
