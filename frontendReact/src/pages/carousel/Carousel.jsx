import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import carosuelImageOne from '/assets/frontend_assets/img/carousel-3.png';
import carosuelImageTwo from '/assets/frontend_assets/img/carousel-1.png';

export default function Carousel() {
  return (
    <div className="container-fluid p-0 mb-5">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        navigation
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
                    <h1 className="display-2 text-white animated slideInDown mb-4">
                      The Best Kindergarten School For Your Child
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2">
                      Vero elitr justo clita lorem...
                    </p>
                    <a
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
                    </a>
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
                  <div className="col-10 col-lg-8">
                    <h1 className="display-2 text-white animated slideInDown mb-4">
                      Make A Brighter Future For Your Child
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2">
                      Vero elitr justo clita lorem...
                    </p>
                    <a
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
                    </a>
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
