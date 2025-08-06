import { useEffect, useState } from "react";
import { generateMockEmployees } from "../utils/mockdata";

import { type Employee } from "../types";
import { useEmployeeContext } from "../context/EmployeeContext";

export const useEmployeeData = () => {
  const { employees, setEmployees } = useEmployeeContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (employees.length > 0) {
      setLoading(false);
      return;
    }

    const fetchEmployees = async () => {
      try {
        const mockData = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(generateMockEmployees());
          }, 1000);
        });

        setEmployees(mockData as Employee[]);
      } catch (error) {
        console.error("Failed to fetch employees:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return { employees, loading, setEmployees };
};
