import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import testimonialImageOne from "/assets/frontend_assets/img/testimonial-1.jpg";
import testimonialImageTwo from "/assets/frontend_assets/img/testimonial-2.jpg";
import testimonialImageThree from "/assets/frontend_assets/img/testimonial-3.jpg";

import SingleTestimonial from "./SingleTestimonial";
import { useTranslation } from "react-i18next";

export default function TestimonialCarousel() {
  const { t } = useTranslation();  
  const testimonials = [
    {
      image: testimonialImageOne,
      text: t('testimonial-text-one'),
      name: t('sharmin-akter'),
      profession: t('teacher'),
    },
    {
      image: testimonialImageTwo,
      text: t('testimonial-text-two'),
      name: t('tamanna-akter'),
      profession: t('house-wife'),
    },
    {
      image: testimonialImageThree,
      text: t('testimonial-text-three'),
      name: t('sharmin-akter'),
      profession: t('doctor'),
    },
    {
      image: testimonialImageTwo,
      text: t('testimonial-text-four'),
      name: t('tamanna-akter'),
      profession: t('house-wife'),
    },
  ];

  return (
    <div className="container-fluid py-5 px-0" id="testimonial">
      <div className="container">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="testimonial-carousel"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <SingleTestimonial
                image={t.image}
                text={t.text}
                name={t.name}
                profession={t.profession}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
