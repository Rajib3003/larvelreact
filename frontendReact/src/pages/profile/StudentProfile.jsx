import { useState } from "react";
import aboutusImageOne from "/assets/frontend_assets/img/about-1.jpg";

const StudentProfile = () => {
  const [isOpen, setIsOpen] = useState([false, false, false]); // State for all sections

  const toggleContent = (index) => {
    const updatedState = [...isOpen];
    updatedState[index] = !updatedState[index];
    setIsOpen(updatedState);
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
      <div className="row align-items-center">
          <div className="col-lg-3 about-img wow fadeInUp" data-wow-delay="0.5s">
            <div className="row">
              <div className="col-12 text-center">
                <img
                  className="img-fluid w-75 rounded-circle bg-light p-3"
                  src={aboutusImageOne}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-9 d-flex flex-column align-items-center">         
            <h1 className="mb-4 text-center">Will Power School</h1>


<div className="row w-100">
    <div className="col-md-6 mt-2">
      <div className="info-box bg-light  p-4  rounded  shadow-sm">
        <strong className="text-primary">Name:</strong> John Doe
      </div>
    </div>

  
    <div className="col-md-6 mt-2">
      <div className="info-box bg-light  p-4 shadow-sm rounded">
        <strong className="text-primary">Roll:</strong> 102
      </div>
    </div>

   
    <div className="col-md-6 mt-2">
      <div className="info-box bg-light  p-4 shadow-sm rounded">
        <strong className="text-primary">Batch:</strong> A
      </div>
    </div>

   
    <div className="col-md-6 mt-2">
      <div className="info-box bg-light  p-4 shadow-sm rounded">
        <strong className="text-primary">Section:</strong> 2
      </div>
    </div>
</div>

          </div>
         
        </div>

        {/* First Section */}
        <div className="row align-items-center mt-4">
          <div className="col-lg-12">
            <div className="info-box bg-light  p-4 shadow rounded" onClick={() => toggleContent(0)}>
              <div
                className=" d-flex justify-content-between align-items-center header"                
              >
                <h5 className="mb-0">Class Routing</h5>
                <span className={`arrow ${isOpen[0] ? "rotate" : ""}`}>&#x25B6;</span>
              </div>
              <div className={`collapse ${isOpen[0] ? "show" : ""}`}>
                <div className="card-body">
                  এটি Section 1 এর তথ্য। এখানে আপনি স্কুলের সাধারণ তথ্য রাখতে পারেন।
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="row align-items-center mt-4">
          <div className="col-lg-12">
            <div className="info-box bg-light  p-4 shadow rounded" onClick={() => toggleContent(1)}>
              <div
                className=" d-flex justify-content-between align-items-center header"
                
              >
                <h5 className="mb-0">Home work</h5>
                <span className={`arrow ${isOpen[1] ? "rotate" : ""}`}>&#x25B6;</span>
              </div>
              <div className={`collapse ${isOpen[1] ? "show" : ""}`}>
                <div className="card-body">
                  এটি Section 2 এর তথ্য। এখানে স্কুলের শিক্ষকদের তথ্য যোগ করা যেতে পারে।
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className="row align-items-center mt-4">
          <div className="col-lg-12">
            <div className="info-box bg-light  p-4 shadow rounded" onClick={() => toggleContent(2)}>
              <div
                className="d-flex justify-content-between align-items-center header"
                
              >
                <h5 className="mb-0">Accounting</h5>
                <span className={`arrow ${isOpen[2] ? "rotate" : ""}`}>&#x25B6;</span>
              </div>
              <div className={`collapse ${isOpen[2] ? "show" : ""}`}>
                <div className="card-body">
                  এটি Section 3 এর তথ্য। এখানে স্কুলের কার্যক্রম বা বিশেষ ইভেন্টের তথ্য যোগ করা যেতে পারে।
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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





