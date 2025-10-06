import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

import testimonialImageOne from '/assets/frontend_assets/img/testimonial-1.jpg';
import testimonialImageTwo from '/assets/frontend_assets/img/testimonial-2.jpg';
import testimonialImageThree from '/assets/frontend_assets/img/testimonial-3.jpg';

export default function TestimonialCarousel() {
  const textlimit = 30; // Limit to 30 words
  function truncateText(text, wordLimit) {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + " ...";
  }
  return text;
}
  return (
    <div className="container-fluid py-5">
      <div className="container">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}        
        pagination={{ clickable: true }}
        className="testimonial-carousel"
        breakpoints={{
          0: {slidesPerView: 1},
          768: {slidesPerView: 2},
          1200: {slidesPerView: 3},
        }}
      >
        {/* Slide 1 */}
              <SwiperSlide>
          <div
            className="testimonial-item bg-light rounded p-5 d-flex flex-column justify-content-between"
            style={{ height: "350px" }} // fixed height
          >
            <p className="fs-5">
              {truncateText(
                "Tempor stet labore dolor clita stet diam amet ipsum dolor duo dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos.",
                textlimit
              )}
            </p>
            <div
              className="d-flex align-items-center bg-white me-n5"
              style={{ borderRadius: "50px 0 0 50px" }}
            >
              <img
                className="img-fluid flex-shrink-0 rounded-circle"
                src={testimonialImageOne}
                alt="Client 2"
                style={{ width: "90px", height: "90px" }}
              />
              <div className="ps-3">
                <h3 className="mb-1">Client Name 2</h3>
                <span>Profession 2</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        
        <SwiperSlide>
          <div
            className="testimonial-item bg-light rounded p-5 d-flex flex-column justify-content-between"
            style={{ height: "350px" }} // fixed height
          >
            <p className="fs-5">
              {truncateText(
                "Tempor stet labore dolor clita stet diam amet ipsum dolor duo dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos.",
                textlimit
              )}
            </p>
            <div
              className="d-flex align-items-center bg-white me-n5"
              style={{ borderRadius: "50px 0 0 50px" }}
            >
              <img
                className="img-fluid flex-shrink-0 rounded-circle"
                src={testimonialImageTwo}
                alt="Client 2"
                style={{ width: "90px", height: "90px" }}
              />
              <div className="ps-3">
                <h3 className="mb-1">Client Name 2</h3>
                <span>Profession 2</span>
              </div>
            </div>
          </div>
        </SwiperSlide>


    

              <SwiperSlide>
          <div
            className="testimonial-item bg-light rounded p-5 d-flex flex-column justify-content-between"
            style={{ height: "350px" }} // fixed height
          >
            <p className="fs-5">
              {truncateText(
                "Tempor stet labore dolor clita stet diam amet erat eos.",
                textlimit
              )}
            </p>
            <div
              className="d-flex align-items-center bg-white me-n5"
              style={{ borderRadius: "50px 0 0 50px" }}
            >
              <img
                className="img-fluid flex-shrink-0 rounded-circle"
                src={testimonialImageThree}
                alt="Client 2"
                style={{ width: "90px", height: "90px" }}
              />
              <div className="ps-3">
                <h3 className="mb-1">Client Name 2</h3>
                <span>Profession 2</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
              <SwiperSlide>
          <div
            className="testimonial-item bg-light rounded p-5 d-flex flex-column justify-content-between"
            style={{ height: "350px" }} // fixed height
          >
            <p className="fs-5">
              {truncateText(
                "Tempor stet labore dolor clita stet diam amet ipsum dolor duo dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos.",
                textlimit
              )}
            </p>
            <div
              className="d-flex align-items-center bg-white me-n5"
              style={{ borderRadius: "50px 0 0 50px" }}
            >
              <img
                className="img-fluid flex-shrink-0 rounded-circle"
                src={testimonialImageTwo}
                alt="Client 2"
                style={{ width: "90px", height: "90px" }}
              />
              <div className="ps-3">
                <h3 className="mb-1">Client Name 2</h3>
                <span>Profession 2</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}
