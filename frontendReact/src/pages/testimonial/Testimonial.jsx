import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import testimonialImageOne from '/assets/frontend_assets/img/testimonial-1.jpg';
import testimonialImageTwo from '/assets/frontend_assets/img/testimonial-2.jpg';
import testimonialImageThree from '/assets/frontend_assets/img/testimonial-3.jpg';

export default function TestimonialCarousel() {
  return (
    <div className="container-fluid py-5">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="testimonial-carousel"
      >
        {/* Slide 1 */}
        <SwiperSlide>
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
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
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
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
