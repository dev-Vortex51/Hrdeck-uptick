import { useState } from "react";
import { Pen, Trash } from "lucide-react";
import { useEmployeeData } from "../hooks/useEmployeeData";
import { useEmployeeContext } from "../context/EmployeeContext";
import Swal from "sweetalert2";

const ITEMS_PER_PAGE = 5;

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

const TableHead = () => (
  <div className="grid grid-cols-6 items-center py-4 px-6 gap-x-4 uppercase tracking-wide font-semibold text-sm bg-base-200 border-b border-base-300">
    <p>S/N</p>
    <p>Name</p>
    <p>Department</p>
    <p>Role</p>
    <p>Status</p>
    <p className="text-right">Action</p>
  </div>
);

interface TableRowProps {
  number: number;
  name: string;
  department: string;
  role: string;
  status: string;
  index: string;
}

const TableRow = ({
  number,
  name,
  department,
  role,
  status,
  index,
}: TableRowProps) => {
  const { setEmployees } = useEmployeeContext();
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "active":
        return "bg-success/20 text-success";
      case "probation":
        return "bg-warning/20 text-warning";
      case "terminated":
        return "bg-error/20 text-error";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  async function handleDelete(id: string) {
    await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        setEmployees((prev) => prev.filter((employee) => employee.id !== id));
        Swal.fire({
          title: "Deleted!",
          text: "Employee deleted successfully.",
          icon: "success",
        });
      }
    });
    // Implement delete functionality here
  }

  return (
    <div className="grid grid-cols-6 items-center py-4 px-6 gap-x-4 text-sm border-b border-base-300">
      <p>{number}</p>
      <p className="truncate">{name}</p>
      <p className="truncate">{department}</p>
      <p className="truncate">{role}</p>
      <p>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusStyle(
            status
          )}`}
        >
          {status}
        </span>
      </p>
      <div className="flex justify-end space-x-2">
        <button className="btn btn-sm bg-success/20 rounded-full">
          <Pen className="size-4 text-success" />
        </button>
        <button
          className="btn btn-sm bg-error/20 rounded-full"
          onClick={() => handleDelete(index)}
        >
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
