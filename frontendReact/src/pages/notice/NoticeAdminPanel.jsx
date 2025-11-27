import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Pagination from "../../utils/Pagination";
import DeleteConfirm from "../../utils/DeleteConfirm";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthContext";

export default function NoticeAdminPanel({ notices = [], setNotices }) {
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState({});
  const [page, setPage] = useState(1);
  const [noticesPerPage, setNoticesPerPage] = useState(5);

  const navigate = useNavigate();
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

  const { user } = useContext(AuthContext);

  console.log("notices",notices)

  // Fetch notices
  const fetchNotices = async (pageNum) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${baseApiUrl}/notice?page=${pageNum}&limit=${noticesPerPage}`
      );
      const data = await response.json();

      setNotices(data?.data || []);
      setMeta(data?.meta || {});
    } catch (error) {
      console.error("Failed to fetch notices:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices(page);
  }, [page, noticesPerPage]);

  

  const handleDelete = async (id) => {
  const confirmed = await DeleteConfirm({
    title: "Are You Sure?",
    text: "This notice will be permanently deleted!",
  });

  if (!confirmed) return;

  try {
    const response = await fetch(`${baseApiUrl}/notice/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (!response.ok) throw new Error("Failed to delete the notice");

    Swal.fire("Deleted!", "The notice has been deleted.", "success");

    // Update state
    setNotices((prev) => prev.filter((notice) => notice._id !== id));
  } catch (error) {
    console.error(error);
    Swal.fire("Error!", "Failed to delete the notice.", "error");
  }
};

  if (loading) return <p>Loading notices...</p>;

  return (
    <>
      <br />
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
                <td>{notice.noticeType || "-"}</td>
                <td>{new Date(notice.date).toLocaleDateString()}</td>
                <td>{new Date(notice.createdAt).toLocaleString()}</td>
                <td>{new Date(notice.updatedAt).toLocaleString()}</td>
                <td>
                  {notice.images?.length > 0 ? (
                    <img
                      src={notice.images[0]}
                      alt={notice.title}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "5px",
                      }}
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
                   {(user.role === "SUPER_ADMIN" || user.role === "ADMIN" )&& (
                  <button
  className="btn btn-sm btn-warning me-1"
  onClick={() => navigate(`/notice/edit/${notice.slug}`)}
>
  Edit
</button>

                   )}
                    {(user.role === "SUPER_ADMIN" || user.role === "ADMIN" )&& (
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(notice._id)}
                  >
                    Delete
                  </button>
                   )}
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        meta={meta}
        limit={noticesPerPage}
        onLimitChange={(newLimit) => {
          setNoticesPerPage(newLimit);
          setPage(1);
        }}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </>
  );
}

NoticeAdminPanel.propTypes = {
  notices: PropTypes.array,
  setNotices: PropTypes.func.isRequired,
};
