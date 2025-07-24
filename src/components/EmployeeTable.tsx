import { useState } from "react";
import { Pen, Trash } from "lucide-react";
import { useEmployeeData } from "../hooks/useEmployeeData";

interface TableRowProps {
  number: number;
  name: string;
  email: string;
  department: string;
  role: string;
  status: string;
}

const ITEMS_PER_PAGE = 5;

const EmployeeTable = () => {
  const { employees, loading } = useEmployeeData();
  const [currentPage, setCurrentPage] = useState(1);

  const totalEmployees = employees.length;
  const totalPages = Math.ceil(totalEmployees / ITEMS_PER_PAGE);

  const currentEmployees = employees.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="shadow bg-base-200 border border-base-300 rounded-lg p-4 mt-6">
      <div className="w-full overflow-x-auto">
        <div className="min-w-[1000px]">
          <TableHead />
          {loading ? (
            <div className="flex items-center justify-center py-4">
              <p>Loading...</p>
            </div>
          ) : currentEmployees.length === 0 ? (
            <div className="py-6 px-4 text-center text-gray-500">
              No employees to display.
            </div>
          ) : (
            currentEmployees.map((employee, index) => (
              <TableRow
                key={employee.id}
                number={(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                name={employee.name}
                email={employee.email}
                department={employee.department}
                role={employee.role}
                status={employee.status}
              />
            ))
          )}
          {!loading && totalEmployees > 0 && (
            <TableFooter
              currentPage={currentPage}
              totalPages={totalPages}
              onPrev={handlePrev}
              onNext={handleNext}
              total={totalEmployees}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;

const TableHead = () => {
  return (
    <div className="grid grid-cols-6 items-center py-4 px-6 gap-x-4 uppercase tracking-wide font-semibold text-sm bg-base-200 border-b border-base-300">
      <p>S/N</p>
      <p>Name</p>
      <p>Department</p>
      <p>Role</p>
      <p>Status</p>
      <p className="text-right">Action</p>
    </div>
  );
};

const TableRow = ({
  number,
  name,
  department,
  role,
  status,
}: TableRowProps) => {
  return (
    <div className="grid grid-cols-6 items-center py-4 px-6 gap-x-4 text-sm border-b border-base-300">
      <p>{number}</p>
      <p className="truncate">{name}</p>
      <p className="truncate">{department}</p>
      <p className="truncate">{role}</p>
      <p>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            status === "active"
              ? "bg-success/20 text-success"
              : status === "probation"
              ? "bg-warning/20 text-warning"
              : "bg-error/20 text-error"
          }`}
        >
          {status}
        </span>
      </p>
      <div className="flex justify-end space-x-2">
        <button className="btn btn-sm bg-success/20 rounded-full">
          <Pen className="size-4 text-success" />
        </button>
        <button className="btn btn-sm bg-error/20 rounded-full">
          <Trash className="size-4 text-error" />
        </button>
      </div>
    </div>
  );
};

const TableFooter = ({
  currentPage,
  totalPages,
  onPrev,
  onNext,
  total,
}: {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  total: number;
}) => {
  const start = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const end = Math.min(currentPage * ITEMS_PER_PAGE, total);

  return (
    <div className="flex items-center justify-between py-4 px-6 bg-base-200 border-t border-base-300">
      <p className="text-sm text-gray-500">
        Showing {start}-{end} of {total} employees
      </p>
      <div className="flex space-x-2">
        <button
          className="btn btn-sm bg-primary text-white"
          onClick={onPrev}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="btn btn-sm bg-primary text-white"
          onClick={onNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};
