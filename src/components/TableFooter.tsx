import { ITEMS_PER_PAGE } from "../constants/data";

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

  
  export default TableFooter
