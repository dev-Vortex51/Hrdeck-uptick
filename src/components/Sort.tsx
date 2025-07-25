import { useEmployeeContext } from "../context/EmployeeContext";
type SortOption = "name" | "date";

const Sort = () => {
  const { sortBy, setSortBy } = useEmployeeContext();

  const handleSortBy = (value: SortOption) => {
    setSortBy(value);
  };
  return (
    <div className="flex items-center gap-4 mt-6 ">
      <div
        className={` cursor-pointer text-base-content  p-3 rounded-md text-base-content ${
          sortBy === "name" ? "bg-primary" : "bg-base-300"
        } `}
        onClick={() => handleSortBy("name")}
      >
        Name (A-Z)
      </div>
      <div
        className={` cursor-pointer text-base-content  p-3 rounded-md text-base-content ${
          sortBy === "date" ? "bg-primary" : "bg-base-300"
        } `}
        onClick={() => handleSortBy("date")}
      >
        Hire Date (newest-first)
      </div>
    </div>
  );
};

export default Sort;
