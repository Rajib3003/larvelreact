/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import aboutusImageOne from "/assets/frontend_assets/img/about-1.jpg";
import CreateNotice from "../notice/CreateNotice";
import Notice from "../notice/Notice";
import { AuthContext } from "../../AuthContext";


const StudentProfile = () => {
  const { user } = useContext(AuthContext);
  const [notices, setNotices] = useState([]);
  const [isOpenNoticeRouting, setOpenNoticeRouting] = useState(false);

  const handleNoticeCreated = (newNotice) => {
        setNotices(prev => [newNotice, ...prev]);
    }

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Profile Image */}
          <div className="col-lg-3 about-img wow fadeInUp" data-wow-delay="0.5s">
            <div className="row">
              <div className="col-12 text-center">
                <img
                  className="img-fluid w-75 rounded-circle bg-light p-3"
                  src={aboutusImageOne}
                  alt="Profile"
                />
              </div>
            </div>
          </div>

          {/* Profile Info & Create Notice */}
          <div className="col-lg-9 d-flex flex-column align-items-center">
            <h1 className="mb-4 text-center">Will Power School</h1>

            {/* Create Notice Button */}
            <button
              type="button"
              className="btn btn-primary mb-3"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Create Notice
            </button>

            {/* Create Notice Modal */}
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">
                      Create Notice
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {/* <CreateNotice
                      onNoticeCreated={(newNotice) => {
                        setNotices((prev) => [newNotice, ...prev]);
                        setFilteredNotices((prev) => [newNotice, ...prev]);
                      }}
                    /> */}
                    <CreateNotice onNoticeCreated={handleNoticeCreated} />
                    {/* {notices.map((n, i) => (
                        <div key={i}>{n.title}</div>
                    ))} */}
                  </div>
                </div>
              </div>
            </div>

            {/* Basic Info */}
            <div className="row w-100">
              <div className="col-md-6 mt-2">
                <div className="info-box bg-light p-4 rounded shadow-sm">
                  <strong className="text-primary">Name:</strong> {user?.name || "N/A"}
                </div>
              </div>

              <div className="col-md-6 mt-2">
                <div className="info-box bg-light p-4 rounded shadow-sm">
                  <strong className="text-primary">Email:</strong> {user?.email || "N/A"}
                </div>
              </div>
              <div className="col-md-6 mt-2">
                <div className="info-box bg-light p-4 rounded shadow-sm">
                  <strong className="text-primary">Email:</strong> {user?.accessToken || "N/A"}
                </div>
              </div>
              

              

              
            </div>
          </div>
        </div>

        {/* Collapsible Sections */}
        <div className="row align-items-center mt-4">
          <div className="col-lg-12">
            <div
              className="info-box bg-light p-4 shadow rounded"
              onClick={() => setOpenNoticeRouting(!isOpenNoticeRouting)}
            >
              <div className="d-flex justify-content-between align-items-center header">
                <h5 className="mb-0">Notice</h5>
                <span className={`arrow ${isOpenNoticeRouting ? "rotate" : ""}`}>&#x25B6;</span>
              </div>
              <div className={`collapse ${isOpenNoticeRouting ? "show" : ""}`}>
                <div className="card-body">
                  <Notice />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Class Routing, Home Work, Accounting (same as before) */}
        {/* ... keep your existing collapsible sections code ... */}

      </div>

      {/* Inline Styles */}
      <style>
        {`
          .header {
            cursor: pointer;
          }
          .arrow {
            transition: transform 0.3s ease;
          }
          .arrow.rotate {
            transform: rotate(90deg);
          }
        `}
      </style>
    </div>
  );
};

export default StudentProfile;
