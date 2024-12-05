import React from 'react'
import aboutusImageOne from "/assets/frontend_assets/img/about-1.jpg";
export default function StudentProfile() {
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
          <div className="col-lg-9  d-flex justify-content-center align-items-start " >
          <h1 className="mb-1 ">Will Power School</h1>
          </div>
        </div>
        <div className="row  align-items-center">
          <div className="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
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
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            hello
          </div>
        </div>
      </div>
    </div>
  )
}
