import classesImage1 from '/assets/frontend_assets/img/play-1.png';
import classesImage2 from '/assets/frontend_assets/img/one-1.png';
import classesImage3 from '/assets/frontend_assets/img/classes-3.jpg';
import classesImage4 from '/assets/frontend_assets/img/classes-4.jpg';
import classesImage5 from '/assets/frontend_assets/img/classes-5.jpg';
import classesImage6 from '/assets/frontend_assets/img/classes-6.jpg';


import React, { useState } from "react";

export default function TeacherList() {

    const text = `
    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. 
    Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.
  `;

  // Truncate text to 200 characters
  const truncatedText = text.slice(0, 200);
  return (
    <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
        <h1 className="mb-3">All Teachers List</h1>
        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
      </div>
      <div className="row g-4">
        {[1, 2, 3, 4, 5, 6].map((num, index) => (
          <div key={num} className={`col-lg-4 col-md-6 wow fadeInUp`} data-wow-delay={`${0.1 * index}s`}>
            <div className="classes-item">
              <div className="bg-light rounded-circle w-50 mx-auto p-3">
                <img className="img-fluid rounded-circle" src={num === 1 ? classesImage1 : num === 2 ? classesImage2 : num === 3 ? classesImage3 : num === 4 ? classesImage4 : num === 5 ? classesImage5 : classesImage6} alt="" />
              </div>

              <div className="bg-light rounded p-4 pt-3 mt-n5">
                <a className="d-block text-center h3 mt-3 " href="">Mithun Mojundar {num}</a>
                <p className="d-block text-center">Head Teacher</p>
                
                <div className="row g-1">
                  
                <p>
                    {truncatedText}
                    {text.length > 200 && (                   
                    <div className="d-flex justify-content-end">
                    <button 
                    className="btn btn-primary ms-2" 
                    onClick={() => window.open(`${import.meta.env.BASE_URL}/teacherdetails`, '_blank')}
                    
                  >
                    Read More
                  </button>
                  </div>
                    )}
                </p> 
                
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

  