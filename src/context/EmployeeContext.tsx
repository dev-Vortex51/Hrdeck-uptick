import { createContext, useContext, useState } from "react";
import type { Employee } from "../types";

type SortOption = "name" | "date";
type FilterOption =
  | "Engineering"
  | "Marketing"
  | "Sales"
  | "HR"
  | "All"
  | "Finance";

interface EmployeeContextProps {
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  sortBy: SortOption;
  setSortBy: React.Dispatch<React.SetStateAction<SortOption>>;
  filterBy: FilterOption;
  setFilterBy: React.Dispatch<React.SetStateAction<FilterOption>>;
  sortEmployees: (list: Employee[], sortBy: SortOption) => Employee[];
  filterEmployees: (list: Employee[], filterBy: FilterOption) => Employee[];
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmployeeContext = createContext<EmployeeContextProps | null>(null);

export const EmployeeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("name");
  const [filterBy, setFilterBy] = useState<FilterOption>("All");

  const sortEmployees = (list: Employee[], sort: SortOption) => {
    return [...list].sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "date")
        return new Date(a.hireDate).getTime() - new Date(b.hireDate).getTime();
      return 0;
    });
  };

  const filterEmployees = (list: Employee[], filter: FilterOption) => {
    switch (filter) {
      case "Engineering":
      case "Marketing":
      case "Sales":
      case "HR":
      case "Finance":
        return list.filter((e) => e.department === filter);

      default:
        return list;
    }
  };

  

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        setEmployees,
        sortBy,
        setSortBy,
        filterBy,
        setFilterBy,
        sortEmployees,
        filterEmployees,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error(
      "useEmployeeContext must be used within an EmployeeProvider"
    );
  }
  return context;
};
