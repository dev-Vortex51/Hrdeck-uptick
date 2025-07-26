import { Pen, Trash } from "lucide-react";
import Swal from "sweetalert2";
import { useEmployeeContext } from "../context/EmployeeContext";
import { useNavigate } from "react-router";

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
    const navigate = useNavigate();
    const getStatusStyle = (status: string) => {
      switch (status) {
        case "active":
          return "bg-success/20 text-success";
        case "probation":
          return "bg-warning/20 text-warning";
        case "recent":
          return "bg-blue-500/20 text-blue-500";
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
          <button className="btn btn-sm bg-success/20 rounded-full" onClick={() => navigate(`/employees/edit/${index}`)}>
            <Pen className="size-4 text-success" />
          </button>
          <button
            className="btn btn-sm bg-error/20 rounded-full"
            onClick={() =>handleDelete(index)}
          >
            <Trash className="size-4 text-error" />
          </button>
        </div>
      </div>
    );
  };

  export default TableRow