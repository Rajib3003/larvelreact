import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import carosuelImageOne from '/assets/frontend_assets/img/carousel-3.png';
import carosuelImageTwo from '/assets/frontend_assets/img/carousel-1.png';

export default function Carousel() {
  return (
    <div className="container-fluid p-0 mb-5">
      <OwlCarousel className="owl-carousel header-carousel" items={1} loop autoplay>
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src={carosuelImageOne} alt="" />
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
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo
                    clita et kasd rebum sea elitr.
                  </p>
                  <a href="" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">
                    Learn More
                  </a>
                  <a href="" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">
                    Our Classes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src={carosuelImageTwo} alt="" />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: 'rgba(0, 0, 0, 0.2)' }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  {/* <h1 className="display-2 text-white animated slideInDown mb-4">
                    Make A Brighter Future For Your Child
                  </h1> */}
                  {/* <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo
                    clita et kasd rebum sea elitr.
                  </p> */}
                  <a href="" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">
                    Learn More
                  </a>
                  <a href="" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">
                    Our Classes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}
