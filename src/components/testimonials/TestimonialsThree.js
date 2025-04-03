"use client"; // Add if using Next.js App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialsThree() {
  const testimonials = [
    {
      text: "Quickint Solutions transformed our slow operations into a streamlined digital process. Their understanding of our needs and expertise was impressive.",
      image: "/assets/images/testimonials/01.png",
      name: "Paras Patel",
      position: "CEO of Hi-Tech Laboratories Pvt Ltd",
    },
    {
      text: "Neel was an excellent full-stack developer who quickly grasped our requirements. His work significantly improved our project outcomes.",
      image: "/assets/images/testimonials/02.png",
      name: "Rishabh Rastogi",
      position: "CTO of Green Doors LLC",
    },
    {
      text: "The IT solutions provided by Quickint Solutions have been invaluable, saving us time and improving our customer interactions remarkably.",
      image: "/assets/images/testimonials/01.png",
      name: "Aarav Gupta",
      position: "Founder of HealthCare Plus",
    },
    {
      text: "I’m extremely pleased with the outstanding work from Neel Patel and his team; their dedication and expertise were evident from start to finish.",
      image: "/assets/images/testimonials/02.png",
      name: "Vijay Shukla",
      position: "CEO of Edge Enfinium, Husk 'N' Spices",
    },
    {
      text: "The exceptional work by Neel Patel and his team was critical to our project's success. Their attention to detail was remarkable.",
      image: "/assets/images/testimonials/01.png",
      name: "Avinash Nagori",
      position: "CEO of Maan Associates",
    },
  ];

  return (
    <div className="rts-testimonials-area-about rts-section-gap bg-dark-1" dir="ltr">
      <div className="container">
        <div className="row">
          {/* Section Title */}
          <div className="col-lg-12">
            <div className="testimonails-title-wrapper-between">
              <h2 className="title">What they said about us</h2>
              {/* Swiper Navigation Buttons */}
              <div className="swiper-btn">
                <div className="swiper-button-prev">
                  <i className="fa-regular fa-arrow-left"></i>
                </div>
                <div className="swiper-button-next">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Swiper Carousel */}
          <div className="col-lg-12 mt--55">
            <div className="swiper-area-main-wrapper mySwiper-testimonials-5 position-relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={3}
                spaceBetween={18}
                loop={true}
                speed={700} // Fixed incorrect "eed" typo
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{
                  el: ".swiper-pagination",
                  clickable: true,
                }}
                className="mySwiper-testimonials-5"
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 25 },
                  768: { slidesPerView: 2, spaceBetween: 25 },
                  980: { slidesPerView: 2, spaceBetween: 25 },
                  1280: { slidesPerView: 3, spaceBetween: 25 },
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="single-testimonials-about">
                      <p className="disc">{testimonial.text}</p>
                      <div className="author-area">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="testimonial-image"
                        />
                        <div className="information">
                          <h5 className="title">{testimonial.name}</h5>
                          <p>{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
