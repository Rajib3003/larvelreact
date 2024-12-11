import { useEffect, useState } from 'react';
import styles from './Notice.module.css';

export default function Notice() {
  const [notices, setNotices] = useState([]);
  const [filteredNotices, setFilteredNotices] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [noticesPerPage, setNoticesPerPage] = useState(5); // Default 5 items per page

  // Fetch data from API
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos'); // Replace with your API endpoint
        const data = await response.json();

        const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setNotices(sortedData);
        setFilteredNotices(sortedData);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };

    fetchNotices();
  }, []);

  // Handle Search
  // const handleSearch = () => {
  //   const filtered = notices.filter((notice) => {
  //     const noticeDate = new Date(notice.date);
  //     const startDateNormalized = startDate ? new Date(startDate + 'T00:00:00') : null;
  //     const endDateNormalized = endDate ? new Date(endDate + 'T23:59:59') : null;

  //     if (searchText && !startDate && !endDate) {
  //       return notice.title.toLowerCase().includes(searchText.toLowerCase());
  //     }

  //     if (!searchText && startDate && !endDate) {
  //       return noticeDate >= startDateNormalized;
  //     }

  //     if (!searchText && startDate && endDate) {
  //       return noticeDate >= startDateNormalized && noticeDate <= endDateNormalized;
  //     }

  //     if (searchText && startDate && endDate) {
  //       return (
  //         notice.title.toLowerCase().includes(searchText.toLowerCase()) &&
  //         noticeDate >= startDateNormalized &&
  //         noticeDate <= endDateNormalized
  //       );
  //     }

  //     return true;
  //   });

  //   const sortedFiltered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  //   setFilteredNotices(sortedFiltered);
  //   setCurrentPage(1); 
  // };
  const handleSearch = (searchValue) => {
    const filtered = notices.filter((notice) => {
      const noticeDate = new Date(notice.date);
      const startDateNormalized = startDate ? new Date(startDate + 'T00:00:00') : null;
      const endDateNormalized = endDate ? new Date(endDate + 'T23:59:59') : null;
  
      if (searchValue && !startDate && !endDate) {
        return notice.title.toLowerCase().includes(searchValue.toLowerCase());
      }
  
      if (!searchValue && startDate && !endDate) {
        return noticeDate >= startDateNormalized;
      }
  
      if (!searchValue && startDate && endDate) {
        return noticeDate >= startDateNormalized && noticeDate <= endDateNormalized;
      }
  
      if (searchValue && startDate && endDate) {
        return (
          notice.title.toLowerCase().includes(searchValue.toLowerCase()) &&
          noticeDate >= startDateNormalized &&
          noticeDate <= endDateNormalized
        );
      }
  
      return true;
    });
  
    const sortedFiltered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    setFilteredNotices(sortedFiltered);
    setCurrentPage(1); // Reset to the first page after search
  };
  const handleReset = () => {
    setSearchText('');
    setStartDate('');
    setEndDate('');
    setFilteredNotices(notices);
    setCurrentPage(1); // Reset to the first page after reset
  };

  // Pagination Logic
  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = filteredNotices.slice(indexOfFirstNotice, indexOfLastNotice);

  const totalPages = Math.ceil(filteredNotices.length / noticesPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Generate Pagination Buttons
  const paginationButtons = [];
  for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
    paginationButtons.push(
      <button
        key={i}
        className={`btn ${currentPage === i ? 'btn-primary' : 'btn-outline-primary'} mx-1`}
        onClick={() => paginate(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
          <h1 className="mb-3">Notice Board</h1>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
          </p>
        </div>
        <div className={styles.noticeMarquee}>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
          </p>
        </div>

        {/* <div className={styles.searchContainer}>
          
          <input
            type="text"
            className="form-control"
            placeholder="Search By Notice Title"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              handleSearch(e.target.value);
            }}
          />
          <input
            type="date"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
          <button className="btn btn-secondary" onClick={handleReset}>
            Reset
          </button>
        </div> */}
<div className={`${styles.searchContainer} container`}>
  <div className="row g-3 align-items-center">
    {/* Search by Notice Title */}
    <div className="col-12 col-md-6 col-lg-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search By Notice Title"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          handleSearch(e.target.value);
        }}
      />
    </div>

    {/* Start Date */}
    <div className="col-6 col-md-3 col-lg-2">
      <input
        type="date"
        className="form-control"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
    </div>

    {/* End Date */}
    <div className="col-6 col-md-3 col-lg-2">
      <input
        type="date"
        className="form-control"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
    </div>

    {/* Buttons */}
    <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-md-end justify-content-center gap-2">
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
      <button className="btn btn-secondary" onClick={handleReset}>
        Reset
      </button>
    </div>
  </div>
</div>


        

        <div className={styles.noticeBoardContainer}>
          <div className={styles.noticeList}>
            {currentNotices.map((notice) => (
              <div key={notice.id} className={styles.noticeItem}>
                <div>
                  <h5>{notice.title}</h5>
                  <p>Published Date: {new Date(notice.date).toLocaleDateString()}</p>
                </div>
                <button
                  className="btn btn-info"
                  onClick={() => window.open(`${import.meta.env.BASE_URL}/noticedetails/${notice.id}`, '_self')}                  
                >
                  + Read More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}      
        {/* <div className="d-flex justify-content-center mt-4">
        <select
            className="form-select w-auto"
            value={noticesPerPage}
            onChange={(e) => {
              setNoticesPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset to the first page when changing items per page
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          <button
            className="btn btn-outline-secondary mx-1"
            onClick={() => paginate(1)}
            disabled={currentPage === 1}
          >
            First
          </button>
          <button
            className="btn btn-outline-secondary mx-1"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {paginationButtons}
          <button
            className="btn btn-outline-secondary mx-1"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
          <button
            className="btn btn-outline-secondary mx-1"
            onClick={() => paginate(totalPages)}
            disabled={currentPage === totalPages}
          >
            Last
          </button>
        </div> */}

<div className="container mt-4">
  <div className="row align-items-center justify-content-center g-2">
    {/* Items per page selector */}
    <div className="col-auto">
      <select
        className="form-select w-auto"
        value={noticesPerPage}
        onChange={(e) => {
          setNoticesPerPage(Number(e.target.value));
          setCurrentPage(1); // Reset to the first page when changing items per page
        }}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
    </div>

    {/* Pagination buttons */}
    <div className="col-auto d-flex flex-wrap justify-content-center gap-2">
      <button
        className="btn btn-outline-secondary"
        onClick={() => paginate(1)}
        disabled={currentPage === 1}
      >
        First
      </button>
      <button
        className="btn btn-outline-secondary"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {paginationButtons}
      <button
        className="btn btn-outline-secondary"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      <button
        className="btn btn-outline-secondary"
        onClick={() => paginate(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
