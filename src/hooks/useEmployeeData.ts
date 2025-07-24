import { useEffect, useState } from "react";
import { generateMockEmployees } from "../utils/mockdata";

import { type Employee } from "../types";

export const useEmployeeData = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const mockData = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(generateMockEmployees());
          }, 1000);
        });

        setEmployees(mockData as Employee[]);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch employees:", error);
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return { employees, loading, setEmployees };
};
