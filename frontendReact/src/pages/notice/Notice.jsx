import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Pagination from "../../utils/Pagination";
import styles from "./Notice.module.css";
import Search from "../../utils/Search";

export default function Notice() {
  const { t } = useTranslation();
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

  const [notices, setNotices] = useState([]);
  const [filteredNotices, setFilteredNotices] = useState([]);  
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState({ page: 1, totalPage: 1, total: 0, limit: 5 });
  const [page, setPage] = useState(1);
  const [noticesPerPage, setNoticesPerPage] = useState(5);

  const navigate = useNavigate();

  // Fetch notices from API
  const fetchNotices = async (pageNum, limit) => {
    try {
      setLoading(true);
      const response = await fetch(`${baseApiUrl}/notice?page=${pageNum}&limit=${limit}`);
      const data = await response.json();

      const sortedData = (data.data || []).sort(
        (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
      );

      setNotices(sortedData);
      setFilteredNotices(sortedData);
      setMeta(data.meta || { page: 1, totalPage: 1, total: 0, limit });
    } catch (error) {
      console.error("Error fetching notices:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when page or limit changes
  useEffect(() => {
    fetchNotices(page, noticesPerPage);
  }, [page, noticesPerPage]);

  // Handler for Search component
const handleSearch = ({ searchText, startDate, endDate }) => {
  const filtered = notices.filter((notice) => {
    const noticeDate = new Date(notice.date);
    const start = startDate ? new Date(startDate + "T00:00:00") : null;
    const end = endDate ? new Date(endDate + "T23:59:59") : null;

    const matchesText = searchText
      ? notice.title.toLowerCase().includes(searchText.toLowerCase())
      : true;

    const matchesDate = (!start || noticeDate >= start) && (!end || noticeDate <= end);

    return matchesText && matchesDate;
  });

  setFilteredNotices(filtered);
  setPage(1); // reset page when searching
};





  return (
    <>
    <div className="container-xxl py-5">
      <div className="container">
        {/* Header */}
        <div className="row">
          <div className="text-center mx-auto col-7" >
                <h1 className="mb-3">{t('notice-board')}</h1>
                <p>{t("notice-board-text")}</p>
                <Search 
                onSearch={handleSearch}                 
                total={filteredNotices.length} 
              />
              </div>
        </div>
        

        

       <div className="row">
        <div className="col">
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
              {filteredNotices.length === 0 ? (
                <p className="text-center">No notices found.</p>
              ) : (
                filteredNotices.map((notice) => (
                  <div key={notice._id} className={`${styles.noticeItem} d-flex justify-content-center mb-3`}>
                    {/* <div className="row ">                     */}
                      <div className="col-3">
                        {notice.images?.length > 0 && (
                          <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
                            {/* {notice.images.map((img, index) => ( */}
                              <img
                                // key={index}
                                src={notice.images[0]} 
                                alt={notice.title}
                                style={{
                                  width: "200px",
                                  height: "auto",
                                  borderRadius: "8px",
                                  objectFit: "cover",
                                }}
                              />
                            {/* ))} */}
                          </div>
                        )}
                      </div>
                      <div className="col-3">
                        <h5>{notice.title}</h5>
                      </div>
                      <div className="col-2">
                          Published: {new Date(notice.createdAt).toLocaleString()}                         
                      </div>
                      <div className="col-2">  
                          Notice Date: {new Date(notice.date).toLocaleDateString()}
                      </div>
                      <div className="col-2 text-end">
                          <button
                          className="btn btn-info"
                          onClick={() => navigate(`/noticedetails/${notice.slug}`)}
                        >
                          + Read More
                        </button>
                      </div>   
                    </div>                 
                  // </div>
                ))
              )}
            </div>
          </div>
        )} 
        </div>
        </div>       
      </div>
    </div>
    <Pagination
          meta={meta}
          limit={noticesPerPage}
          onLimitChange={(newLimit) => {
            setNoticesPerPage(newLimit);
            setPage(1); // reset page
          }}
          onPageChange={(newPage) => setPage(newPage)}
        />
    </>
  );
}
