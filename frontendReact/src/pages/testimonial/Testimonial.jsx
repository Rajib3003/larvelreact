import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import testimonialImageOne from '/assets/frontend_assets/img/testimonial-1.jpg';
import testimonialImageTwo from '/assets/frontend_assets/img/testimonial-2.jpg';
import testimonialImageThree from '/assets/frontend_assets/img/testimonial-3.jpg';
export default function Testimonial() {
  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    dots: true,
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="mb-3">Our Clients Say!</h1>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
          </p>
        </div>
        <OwlCarousel className="testimonial-carousel" {...options}>
          <div className="testimonial-item bg-light rounded p-5">
            <p className="fs-5">
              Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos.
            </p>
            <div className="d-flex align-items-center bg-white me-n5" style={{ borderRadius: '50px 0 0 50px' }}>
              <img className="img-fluid flex-shrink-0 rounded-circle" src={testimonialImageOne} alt="Client 1" style={{ width: '90px', height: '90px' }} />
              <div className="ps-3">
                <h3 className="mb-1">Client Name 1</h3>
                <span>Profession 1</span>
              </div>
              <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
            </div>
          </div>
          <div className="testimonial-item bg-light rounded p-5">
            <p className="fs-5">
              Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos.
            </p>
            <div className="d-flex align-items-center bg-white me-n5" style={{ borderRadius: '50px 0 0 50px' }}>
              <img className="img-fluid flex-shrink-0 rounded-circle" src={testimonialImageTwo} alt="Client 2" style={{ width: '90px', height: '90px' }} />
              <div className="ps-3">
                <h3 className="mb-1">Client Name 2</h3>
                <span>Profession 2</span>
              </div>
              <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
            </div>
          </div>
          <div className="testimonial-item bg-light rounded p-5">
            <p className="fs-5">
              Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos.
            </p>
            <div className="d-flex align-items-center bg-white me-n5" style={{ borderRadius: '50px 0 0 50px' }}>
              <img className="img-fluid flex-shrink-0 rounded-circle" src={testimonialImageThree} alt="Client 3" style={{ width: '90px', height: '90px' }} />
              <div className="ps-3">
                <h3 className="mb-1">Client Name 3</h3>
                <span>Profession 3</span>
              </div>
              <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}
