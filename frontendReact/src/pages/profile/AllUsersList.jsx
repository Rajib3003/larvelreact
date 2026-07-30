import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Pagination from "../../utils/Pagination";
import DeleteConfirm from "../../utils/DeleteConfirm";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthContext";

export default function AllUsersList({ allUsers = [], setAllUsers }) {
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState({});
  const [page, setPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);

  const navigate = useNavigate();
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("token");
  const currentUserRole = user?.role;

  // Fetch users
  const fetchAllUsers = async (pageNum) => {
    try {
      setLoading(true);

      const response = await fetch(
        `${baseApiUrl}/user/all-users?page=${pageNum}&limit=${usersPerPage}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...(token
              ? {
                  Authorization: `Bearer ${token}`,
                  accessToken: token,
                  token,
                }
              : {}),
          },
          credentials: "include",
        }
      );

      const data = await response.json();

      console.log("Fetched users payload:", data);
      setAllUsers(data?.data || []);
      setMeta(data?.meta || {});
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllUsers(page);
  }, [page, usersPerPage]);

  

  const handleDelete = async (id) => {
  const confirmed = await DeleteConfirm({
    title: "Are You Sure?",
    text: "This user will be permanently deleted!",
  });

  if (!confirmed) return;

  try {
    const response = await fetch(`${baseApiUrl}/user/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (!response.ok) throw new Error("Failed to delete the user");

    Swal.fire("Deleted!", "The user has been deleted.", "success");

    // Update state
    setAllUsers((prev) => prev.filter((user) => user._id !== id));
  } catch (error) {
    console.error(error);
    Swal.fire("Error!", "Failed to delete the user.", "error");
  }
};

  if (loading) return <p>Loading Users...</p>;

  const safeUsers = Array.isArray(allUsers) ? allUsers.filter(Boolean) : [];

  console.log("Users currently rendered in table:", safeUsers);

  return (
    <>
      <br />
      <div className="table-responsive">
        <table className="table table-bordered table-striped align-middle text-center">
          <thead className="table-dark">
            <tr>
              <th>SN</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              {/* <th>Phone</th> */}
              {/* <th>Updated At</th> */}
              {/* <th>Image</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {safeUsers.map((userItem, index) => {
              const userId = userItem?._id;
              const userSlug = userItem?.slug;
              const userName = userItem?.name || "N/A";
              const userEmail = userItem?.email || "N/A";
              const userRoleValue = userItem?.role || "N/A";

              return (
                <tr key={userId || index}>
                  <td>{index + 1}</td>
                  <td>{userName}</td>
                  <td>{userEmail}</td>
                  <td>{userRoleValue}</td>
                  <td>
                    {/* <button
                      className="btn btn-sm btn-info me-1"
                      onClick={() => userSlug && navigate(`/userdetails/${userSlug}`)}
                    >
                      View
                    </button> */}
                    {(currentUserRole === "SUPER_ADMIN" || currentUserRole === "ADMIN") && (
                      <button
                        className="btn btn-sm btn-warning me-1"
                        onClick={() => userSlug && navigate(`/user/edit/${userSlug}`)}
                      >
                        Edit
                      </button>
                    )}
                    {(currentUserRole === "SUPER_ADMIN" || currentUserRole === "ADMIN") && (
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => userId && handleDelete(userId)}
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Pagination
        meta={meta}
        limit={usersPerPage}
        onLimitChange={(newLimit) => {
          setUsersPerPage(newLimit);
          setPage(1);
        }}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </>
  );
}

AllUsersList.propTypes = {
  allUsers: PropTypes.array,
  setAllUsers: PropTypes.func.isRequired,
};
