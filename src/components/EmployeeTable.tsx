import { useState } from "react";

import { useEmployeeData } from "../hooks/useEmployeeData";
import { useEmployeeContext } from "../context/EmployeeContext";


import TableFooter from "./TableFooter";
import TableRow from "./TableRow";
import TableHead from "./TableHead";

import { ITEMS_PER_PAGE } from "../constants/data";




const EmployeeTable = () => {
  const { sortEmployees, filterEmployees, sortBy, filterBy } =
    useEmployeeContext();
  const { employees, loading } = useEmployeeData();
  const [currentPage, setCurrentPage] = useState(1);

  const sorted = sortEmployees(employees, sortBy);
  const filtered = filterEmployees(sorted, filterBy);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  return (
    <div className="shadow bg-base-200 border border-base-300 rounded-lg p-4 mt-6">
      <div className="w-full overflow-x-auto">
        <div className="min-w-[1000px]">
          <TableHead />
          {loading ? (
            <div className="py-4 text-center text-gray-500">Loading...</div>
          ) : paginated.length === 0 ? (
            <div className="py-6 text-center text-gray-500">
              No employees to display.
            </div>
          ) : (
            paginated.map((e, i) => (
              <TableRow
                key={e.id}
                number={(currentPage - 1) * ITEMS_PER_PAGE + i + 1}
                name={e.name}
                department={e.department}
                role={e.role}
                status={e.status}
                index={e.id}
              />
            ))
          )}
          {!loading && filtered.length > 0 && (
            <TableFooter
              currentPage={currentPage}
              totalPages={totalPages}
              onPrev={handlePrev}
              onNext={handleNext}
              total={filtered.length}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;





