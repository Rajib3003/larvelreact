import { useEffect, useState } from "react";
import styles from "./Notice.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Notice() {
  const { t } = useTranslation();
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
  
  const [notices, setNotices] = useState([]);
  const [filteredNotices, setFilteredNotices] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [noticesPerPage, setNoticesPerPage] = useState(5);
  const [loading, setLoading] = useState(false);
  const [totalNotices, setTotalNotices] = useState(0);

  

  const navigate = useNavigate();

  // Fetch data from API
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        setLoading(true);
        // const response = await fetch(
        //   "https://typescript-express-mongo-db.vercel.app/api/notice"
        // );
        // new api with login
        const response = await fetch(
          `${baseApiUrl}/notice/`
          // "https://ph-tour-managment-system.vercel.app/api/v1/notice/"
        );
        const data= await response.json();
        // const meta = await response.json();
        const noticesArray = data.data || [];
        const total = data.meta.total || 0;
       

        // Sort by updatedAt descending
        const sortedData = noticesArray.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );

        setNotices(sortedData);
        setFilteredNotices(sortedData);
        setTotalNotices(total);
      } catch (error) {
        console.error("Error fetching notices:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, [baseApiUrl]);

  // Search & Filter
  const handleSearch = (searchValue) => {
    const filtered = notices.filter((notice) => {
      const noticeDate = new Date(notice.date);
      const start = startDate ? new Date(startDate + "T00:00:00") : null;
      const end = endDate ? new Date(endDate + "T23:59:59") : null;

      if (searchValue && !start && !end) {
        return notice.title.toLowerCase().includes(searchValue.toLowerCase());
      }
      if (!searchValue && start && !end) return noticeDate >= start;
      if (!searchValue && start && end) return noticeDate >= start && noticeDate <= end;
      if (searchValue && start && end)
        return (
          notice.title.toLowerCase().includes(searchValue.toLowerCase()) &&
          noticeDate >= start &&
          noticeDate <= end
        );

      return true;
    });

    setFilteredNotices(
      filtered.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    );
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSearchText("");
    setStartDate("");
    setEndDate("");
    setFilteredNotices(notices);
    setCurrentPage(1);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredNotices.length / noticesPerPage);
  const pageWindow = 5;

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

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) setCurrentPage(pageNumber);
  };

  // Current notices for current page
  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = filteredNotices.slice(indexOfFirstNotice, indexOfLastNotice);

  const paginationButtons = [];
  for (let i = startPage; i <= endPage; i++) {
    paginationButtons.push(
      <button
        key={i}
        className={`btn ${currentPage === i ? "btn-primary" : "btn-outline-primary"} mx-1`}
        onClick={() => paginate(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="container-xxl py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h1 className="mb-3">Notice Board</h1>
          <p>
            {t("notice-board-text")}
          </p>
        </div>

        <div className={styles.noticeMarquee}>
          {notices.length > 0 && (
            <div className={styles.marqueeContent}>
              {(() => {
                const title = notices[0].title;
                const length = title.length;

                let copyCount;
                if (length > 200) copyCount = 1;
                else if (length > 150) copyCount = 2;
                else if (length > 100) copyCount = 3;
                else if (length > 80) copyCount = 4;
                else if (length > 60) copyCount = 5;
                else if (length > 50) copyCount = 6;
                else if (length > 40) copyCount = 7;
                else copyCount = 8;

                const copies = Array(copyCount).fill(title);
                return copies.map((t, i) => <span key={i}>{t}</span>);
              })()}
            </div>
          )}
        </div>


        {/* Search & Filter */}
        <div className={`${styles.searchContainer} container mb-4`}>
          <div className="row g-3 align-items-center">
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
            <div className="col-6 col-md-3 col-lg-2">
              <input
                type="date"
                className="form-control"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <input
                type="date"
                className="form-control"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div className="col-6 col-md-3 col-lg-2 text-center pt-3">
              <p>
                Total Notice : <strong>{totalNotices}</strong>
              </p>
            </div>
            <div className="col-12 col-md-3 col-lg-2 d-flex justify-content-md-end justify-content-center gap-2">
              <button className="btn btn-primary" onClick={() => handleSearch(searchText)}>
                Search
              </button>
              <button className="btn btn-secondary" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Notice List */}
        {loading ? (
          <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2">Loading notices...</p>
          </div>
        ) : (
          <div className={styles.noticeBoardContainer}>
            <div className={styles.noticeList}>
              {currentNotices.map((notice) => (
                <div key={notice._id} className={styles.noticeItem}>
                  <div>
                    <h5>{notice.title}</h5>
                    <p>
                      Published Date and Time: {new Date(notice.createdAt).toLocaleString()} | 
                      Notice Date: {new Date(notice.date).toLocaleDateString()} 
                      
                    </p>
                     {/* {notice.images && notice.images.length > 0 && (
                        <img 
                          src={notice.images[0]} 
                          alt={notice.title} 
                          style={{ width: "200px", height: "auto", borderRadius: "8px" }}
                        />
                      )} */}

                      {notice.images && notice.images.length > 0 && (
                        <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
                          {notice.images.map((img, index) => (
                            <img
                              key={index}
                              src={img}
                              alt={notice.title}
                              style={{
                                width: "200px",
                                height: "auto",
                                borderRadius: "8px",
                                objectFit: "cover"
                              }}
                            />
                          ))}
                        </div>
                      )}
                  </div>
                  {/* <button
                    className="btn btn-info"
                    onClick={() =>
                      window.open(
                        `${import.meta.env.VITE_FRONTEND_BASE_PATH}noticedetails/${notice.slug}`,
                        "_self"
                      )
                    }
                  >
                    + Read More
                  </button> */}
                  <button
                    className="btn btn-info"
                    onClick={() => navigate(`/noticedetails/${notice.slug}`)}
                  >
                    + Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pagination */}
        <div className="d-flex justify-content-center align-items-center mt-4 gap-2 flex-wrap">
          <select
            className="form-select w-auto"
            value={noticesPerPage}
            onChange={(e) => {
              setNoticesPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>

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
          <span className="ms-3">
            Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
