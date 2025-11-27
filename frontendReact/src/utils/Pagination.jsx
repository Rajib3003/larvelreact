import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function Pagination({ meta, onPageChange, limit, onLimitChange }) {
  const [currentPage, setCurrentPage] = useState(meta.page || 1);

  const totalPages = meta.totalPage || 1;
  const pageWindow = 5;

  useEffect(() => {
    setCurrentPage(meta.page);
  }, [meta.page]);

  let startPage = currentPage - Math.floor(pageWindow / 2);
  let endPage = currentPage + Math.floor(pageWindow / 2);

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(pageWindow, totalPages);
  }

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, totalPages - pageWindow + 1);
  }

  const paginate = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page);
    }
  };

  const buttons = [];
  for (let i = startPage; i <= endPage; i++) {
    buttons.push(
      <button
      type="button"
        key={i}
        className={`btn ${currentPage === i ? "btn-primary" : "btn-outline-primary"} mx-1`}
        onClick={() => paginate(i)}
        
      >
        {i}
      </button>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-4 gap-2 flex-wrap">
      {/* Select box for limit */}
      <select
        className="form-select w-auto"
        value={limit}
        onChange={(e) => onLimitChange(Number(e.target.value))}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>

      <button className="btn btn-outline-secondary" onClick={() => paginate(1)} disabled={currentPage === 1}>
        First
      </button>
      <button className="btn btn-outline-secondary" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>

      {buttons}

      <button className="btn btn-outline-secondary" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
      <button className="btn btn-outline-secondary" onClick={() => paginate(totalPages)} disabled={currentPage === totalPages}>
        Last
      </button>

      <span className="ms-3">
        Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
      </span>
    </div>
  );
}

Pagination.propTypes = {
  meta: PropTypes.shape({
    page: PropTypes.number,
    totalPage: PropTypes.number,
    total: PropTypes.number,
    limit: PropTypes.number,
  }).isRequired,
  onPageChange: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
  onLimitChange: PropTypes.func.isRequired,
};
