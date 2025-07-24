import { useState } from "react";

const Sort = () => {
  const [sortBy, setSortBy] = useState("name");

  const handleSortBy = (value: string) => {
    setSortBy(value);
  };
  return (
    <div className="flex items-center gap-4 mt-6 ">
      <div
        className={`tab  p-3 rounded-md text-base-content ${
          sortBy === "name" ? "bg-primary" : "bg-base-300"
        } `}
        onClick={() => handleSortBy("name")}
      >
        Name (A-Z)
      </div>
      <div
        className={`tab  p-3 rounded-md text-base-content ${
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
