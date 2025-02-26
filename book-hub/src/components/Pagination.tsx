import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; 

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageJump = (e: React.ChangeEvent<HTMLInputElement>) => {
    const page = Number(e.target.value);
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 mt-6 w-full max-w-md">
      {/* Previous Button with Icon */}
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className="flex items-center px-4 py-2 bg-primary text-white rounded-l-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        <FaArrowLeft className="mr-2" />
        Previous
      </button>

      {/* Current Page Display with Page Jump Input */}
      <div className="flex items-center">
        <span className="text-lg font-semibold text-primary">{`${currentPage} of ${totalPages}`}</span>
        <input
          type="number"
          min={1}
          max={totalPages}
          value={currentPage}
          onChange={handlePageJump}
          className="ml-2 w-12 px-2 py-1 border rounded-md text-center"
        />
      </div>

      {/* Next Button with Icon */}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="flex items-center px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        Next
        <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
};

export default Pagination;

