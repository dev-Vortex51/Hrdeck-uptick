interface FilterProps {
  children: React.ReactNode;
  defaultOption: string;
}

const Filters = ({ children, defaultOption }: FilterProps) => {
  return (
    <select
      defaultValue={defaultOption}
      className="select bg-base-200 w-full sm:w-[10rem]"
    >
      <option disabled={true}>{defaultOption}</option>
      {children}
    </select>
  );
};

export default Filters;
