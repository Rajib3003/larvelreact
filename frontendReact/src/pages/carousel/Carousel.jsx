import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

import carosuelImageOne from '/assets/frontend_assets/img/carousel-3.png';
import carosuelImageTwo from '/assets/frontend_assets/img/carousel-1.png';
import { useTranslation } from 'react-i18next';

export default function Carousel() {
    const { t } = useTranslation();
  return (
    <div className="container-fluid p-0 mb-5">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 10000, disableOnInteraction: false }}        
        pagination={{ clickable: true }}
        className="header-carousel"
        style={{ height: '100vh' }} // full viewport height
      >
        <SwiperSlide>
          <div className="position-relative w-100 h-100">
            <img
              className="img-fluid w-100 h-100"
              src={carosuelImageOne}
              alt=""
              style={{ objectFit: 'cover' }}
            />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: 'rgba(0, 0, 0, 0.2)' }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <h1 className="display-2  animated slideInDown mb-4  " style={{ color: '#5ce1e6', paddingTop: '170px' }}>
                      {t('welcome-to-will-power-school')}
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2" style={{ color: '#5ce1e6' }}>
                      {t('will-power-school-is-dedicated-to-providing-high-quality-education')}
                    </p>
                    {/* <a
                      href="#"
                      className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
                    >
                      Learn More
                    </a> */}
                     {/* <span
                        style={{
                          position: "absolute",      
                          background: "red",
                          color: "white",
                          padding: "15px 20px",
                          borderRadius: "20px",
                          fontWeight: "bold",
                          fontSize: "12px",
                          animation: "pulse 1.5s infinite",
                          boxShadow: "0 0 10px rgba(249, 201, 27, 0.7)"
                        }}
                      >
                        {t('freeclass')}
                      </span> */}

                      <style>
                        {`
                          @keyframes pulse {
                            0% { transform: scale(1); opacity: 0.8; }
                            50% { transform: scale(1.2); opacity: 1; }
                            100% { transform: scale(1); opacity: 0.8; }
                          }
                        `}
                      </style>
                    {/* <a
                      href="#"
                      className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                    >
                      Our Classes
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="position-relative w-100 h-100">
            <img
              className="img-fluid w-100 h-100"
              src={carosuelImageTwo}
              alt=""
              style={{ objectFit: 'cover' }}
            />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: 'rgba(0, 0, 0, 0.2)' }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-12 col-lg-10">
                    <h1 className="display-2 animated slideInDown mt-4" style={{ color: '#5ce1e6', paddingTop: '170px' }}>
                      {t('the-first-step-toward-a-bright-future-will-power-school')}                      
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2" style={{ color: '#5ce1e6' }}>
                      {t('develop-your-creativity-and-skills-and-take-a-step-towards-a-bright-future')}  
                    </p>
                    {/* <a
                      href="#"
                      className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
                    >
                      Learn More
                    </a>
                    <a
                      href="#"
                      className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                    >
                      Our Classes
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
