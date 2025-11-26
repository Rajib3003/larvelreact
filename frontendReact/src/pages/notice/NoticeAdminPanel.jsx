import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function NoticeAdminPanel({ notices = [], setNotices }) {
  const [loading, setLoading] = useState(true);

   const navigate = useNavigate();

  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch(`${baseApiUrl}/notice/`);
        const data = await response.json();
        setNotices(data?.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch notices:", error);
        setLoading(false);
      }
    };

    fetchNotices();
  }, [baseApiUrl, setNotices]);

  if (loading) return <p>Loading notices...</p>;

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped align-middle text-center">
        <thead className="table-dark">
          <tr>
            <th>SN</th>
            <th>Title</th>
            <th>Type</th>
            <th>Notice Date</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice, index) => (
            <tr key={notice._id}>
              <td>{index + 1}</td>
              <td>{notice.title}</td>
              <td>{notice.noticeType?.name || "-"}</td>
              <td>{new Date(notice.date).toLocaleDateString()}</td>
              <td>{new Date(notice.createdAt).toLocaleString()}</td>
              <td>{new Date(notice.updatedAt).toLocaleString()}</td>
              <td>
                {notice.images?.length > 0 ? (
                  <img
                    src={notice.images[0]}
                    alt={notice.title}
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px" }}
                  />
                ) : (
                  "-"
                )}
              </td>
              <td>
                <button 
                    className="btn btn-sm btn-info me-1"
                     onClick={() => navigate(`/noticedetails/${notice.slug}`)}
                >
                    View
                </button>
                <button className="btn btn-sm btn-warning me-1">Edit</button>
                <button className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

NoticeAdminPanel.propTypes = {
  notices: PropTypes.array,
  setNotices: PropTypes.func.isRequired,
};

// NoticeAdminPanel.defaultProps = {
//   notices: [],
// };
