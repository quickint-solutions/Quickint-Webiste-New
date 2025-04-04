"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import ClutchWidget from "@/app/(inner)/clutch/page";

const TestimonialsTwo = () => {
    const testimonials = [
        {
            text: "Quickint Solutions transformed our slow operations into a streamlined digital process. Their understanding of our needs and expertise was impressive.",
            imgSrc: "assets/images/testimonials/01.png",
            name: "Paras Patel",
            designation: "CEO of hi-tech laboratories pvt ltd",
        },
        {
            text: "Neel was an excellent full-stack developer who quickly grasped our requirements. His work significantly improved our project outcomes.",
            imgSrc: "assets/images/testimonials/02.png",
            name: "Rishabh Rastogi",
            designation: "CTO of Green Doors LLC",
        },
        {
            text: "The IT solutions provided by Quickint Solutions have been invaluable, saving us time and improving our customer interactions remarkably.",
            imgSrc: "assets/images/testimonials/01.png",
            name: "Aarav Gupta",
            designation: "Founder of HealthCare Plus",
        },
        {
            text: "I’m extremely pleased with the outstanding work from Neel Patel and his team; their dedication and expertise were evident from start to finish.",
            imgSrc: "assets/images/testimonials/02.png",
            name: "Vijay Shukla",
            designation: "CEO of Edge Enfinium, Husk 'N' Spices",
        },
        {
            text: "The exceptional work by Neel Patel and his team was critical to our project's success. Their attention to detail was remarkable.",
            imgSrc: "assets/images/testimonials/01.png",
            name: "Avinash Nagori",
            designation: "CEO of Maan Associates",
        }
    ];

    return (
        <div className="rts-testimonials-area-two rts-section-gap bg-solution">
            <div className="container">
                <ClutchWidget />
                <div className="row">
                    <div className="col-lg-12 text-center testimonials-title-two-center">
                        <h2 className="title">What clients said</h2>
                    </div>
                    <div className="col-lg-12 mt--70 mt_sm--40">
                        <div className="float-right-style">
                            <div className="swiper-area-main-wrapper" dir="ltr">
                                <Swiper
                                    spaceBetween={0}
                                    slidesPerView={2}
                                    loop={true}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                    }}
                                    breakpoints={{
                                        // When the viewport is >= 640px
                                        240: {
                                            slidesPerView: 1,
                                            spaceBetween: 0,
                                        },
                                        // When the viewport is >= 768px
                                        768: {
                                            slidesPerView: 1,
                                            spaceBetween: 0,
                                        },
                                        // When the viewport is >= 1024px
                                        1024: {
                                            slidesPerView: 2,
                                            spaceBetween: 0,
                                        },
                                    }}
                                    className="mySwiper-testimonials-150"
                                    modules={[Navigation, Autoplay]}
                                >
                                    {testimonials.map((testimonial, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="single-testimonials-two">
                                                <p className="disc">{testimonial.text}</p>
                                                <div className="inner-author">
                                                    <div className="info">
                                                        <h6 className="title">{testimonial.name}</h6>
                                                        <span className="date">{testimonial.designation}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    {/* Navigation Buttons */}
                    <div className="col-lg-12 position-relative-testimonials-two">
                        <div className="swiper-button-prev">
                            <i className="fa-regular fa-chevron-left"></i>
                        </div>
                        <div className="swiper-button-next">
                            <i className="fa-regular fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsTwo;
