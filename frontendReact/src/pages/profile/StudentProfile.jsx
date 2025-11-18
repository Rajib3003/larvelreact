import { useState } from "react";
import aboutusImageOne from "/assets/frontend_assets/img/about-1.jpg";
import CreateNotice from "../notice/CreateNotice";
import Notice from "../notice/Notice";

const StudentProfile = () => {
  const [isOpen, setIsOpen] = useState([false, false, false]); // Toggle state for sections
  const [notices, setNotices] = useState([]);
  const [filteredNotices, setFilteredNotices] = useState([]);

  const [isOpenNoticeRouting, setOpenNoticeRouting] = useState(false);
  const [isOpenClassRouting, setOpenClassRouting] = useState(false);
const [isOpenHomeWork, setOpenHomeWork] = useState(false);
const [isOpenAccounting, setOpenAccounting] = useState(false);


  // const toggleContent = (index) => {
  //   const updatedState = [...isOpen];
  //   updatedState[index] = !updatedState[index];
  //   setIsOpen(updatedState);
  // };

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
                 <CreateNotice
  onNoticeCreated={(newNotice) => {
    setNotices((prev) => [newNotice, ...prev]);
    setFilteredNotices((prev) => [newNotice, ...prev]);
  }}
/>



                  </div>
                </div>
              </div>
            </div>

            {/* Basic Info */}
            <div className="row w-100">
              <div className="col-md-6 mt-2">
                <div className="info-box bg-light p-4 rounded shadow-sm">
                  <strong className="text-primary">Name:</strong> John Doe
                </div>
              </div>

              <div className="col-md-6 mt-2">
                <div className="info-box bg-light p-4 rounded shadow-sm">
                  <strong className="text-primary">Roll:</strong> 102
                </div>
              </div>

              <div className="col-md-6 mt-2">
                <div className="info-box bg-light p-4 rounded shadow-sm">
                  <strong className="text-primary">Batch:</strong> A
                </div>
              </div>

              <div className="col-md-6 mt-2">
                <div className="info-box bg-light p-4 rounded shadow-sm">
                  <strong className="text-primary">Section:</strong> 2
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collapsible Sections */}
        {/* {["Class Routing", "Home Work", "Accounting"].map((title, index) => (
          <div className="row align-items-center mt-4" key={index}>
            <div className="col-lg-12">
              <div
                className="info-box bg-light p-4 shadow rounded"
                onClick={() => toggleContent(index)}
              >
                <div className="d-flex justify-content-between align-items-center header">
                  <h5 className="mb-0">{title}</h5>
                  <span className={`arrow ${isOpen[index] ? "rotate" : ""}`}>&#x25B6;</span>
                </div>
                <div className={`collapse ${isOpen[index] ? "show" : ""}`}>
                  <div className="card-body">
                    এটি Section {index + 1} এর তথ্য। এখানে প্রয়োজনীয় তথ্য যোগ করুন। tai
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))} */}

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
        <div className="row align-items-center mt-4">
      <div className="col-lg-12">
        <div
          className="info-box bg-light p-4 shadow rounded"
          onClick={() => setOpenClassRouting(!isOpenClassRouting)}
        >
          <div className="d-flex justify-content-between align-items-center header">
            <h5 className="mb-0">Class Routing</h5>
            <span className={`arrow ${isOpenClassRouting ? "rotate" : ""}`}>&#x25B6;</span>
          </div>

          <div className={`collapse ${isOpenClassRouting ? "show" : ""}`}>
            <div className="card-body">
              এটি Class Routing এর তথ্য। এখানে রুটিন যোগ করুন।
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Home Work */}
    <div className="row align-items-center mt-4">
      <div className="col-lg-12">
        <div
          className="info-box bg-light p-4 shadow rounded"
          onClick={() => setOpenHomeWork(!isOpenHomeWork)}
        >
          <div className="d-flex justify-content-between align-items-center header">
            <h5 className="mb-0">Home Work</h5>
            <span className={`arrow ${isOpenHomeWork ? "rotate" : ""}`}>&#x25B6;</span>
          </div>

          <div className={`collapse ${isOpenHomeWork ? "show" : ""}`}>
            <div className="card-body">
              এটি Home Work সেকশনের তথ্য। এখানে হোমওয়ার্ক যুক্ত করুন।
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Accounting */}
    <div className="row align-items-center mt-4">
      <div className="col-lg-12">
        <div
          className="info-box bg-light p-4 shadow rounded"
          onClick={() => setOpenAccounting(!isOpenAccounting)}
        >
          <div className="d-flex justify-content-between align-items-center header">
            <h5 className="mb-0">Accounting</h5>
            <span className={`arrow ${isOpenAccounting ? "rotate" : ""}`}>&#x25B6;</span>
          </div>

          <div className={`collapse ${isOpenAccounting ? "show" : ""}`}>
            <div className="card-body">
              এটি Accounting সেকশনের তথ্য। এখানে ফি এবং হিসাব যুক্ত করুন।
            </div>
          </div>
        </div>
      </div>
    </div>
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
