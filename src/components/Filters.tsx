import { useEmployeeContext } from "../context/EmployeeContext";

type FilterOption =
  | "Engineering"
  | "Marketing"
  | "Sales"
  | "HR"
  | "Finance"
  | "All";

interface FilterProps {
  children: React.ReactNode;
  defaultOption: string;
}

const Filters = ({ children, defaultOption }: FilterProps) => {
  const { filterBy, setFilterBy } = useEmployeeContext();
  return (
    <select
      defaultValue={defaultOption}
      className="select bg-base-200 w-full sm:w-[10rem]"
      onChange={(e) => setFilterBy(e.target.value as FilterOption)}
      value={filterBy}
    >
      <option className="uppercase" disabled={true}>
        {defaultOption}
      </option>
      {children}
    </select>
  );
};

export default Filters;
