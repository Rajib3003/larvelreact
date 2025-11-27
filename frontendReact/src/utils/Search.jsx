import { useState, useEffect } from "react";
import styles from '../pages/notice/Notice.module.css'
import PropTypes from "prop-types";

export default function Search({ onSearch}) {
  const [searchText, setSearchText] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Call onSearch whenever inputs change
  useEffect(() => {
    onSearch({ searchText, startDate, endDate });
  }, [searchText, startDate, endDate]);

//   const handleResetClick = () => {
//     setSearchText("");
//     setStartDate("");
//     setEndDate("");
//     onReset();
//   };

  return (
    <div className={`${styles.searchContainer} container mb-4`}>
      <div className="row g-3 align-items-center">
        <div className="col-12 col-md-6 col-lg-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search By Notice Title"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="col-6 col-md-3 col-lg-3">
          <input
            type="date"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="col-6 col-md-3 col-lg-3">
          <input
            type="date"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      
      </div>
    </div>
  );
}
Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};
