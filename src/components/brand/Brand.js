"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay } from "swiper/modules";


// Install Swiper modules

const BrandArea = () => {
    const brandImages = [
        "assets/images/brand/1deallogo.png",
        "assets/images/brand/carelogo.png",
        "assets/images/brand/cattlefeed.png",
        "assets/images/brand/edgeinfinium.png",
        "assets/images/brand/greendoorslogo.png",
        "assets/images/brand/hitechlogo.png",
        "assets/images/brand/maanlogo.png",
        "assets/images/brand/publiclogo.png",
        "assets/images/brand/sonylogo.png",
        "assets/images/brand/willwarelogo.png",
    ];

    return (
        <div className="rts-brand-area-start pt--80" dir="ltr">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="brand-area-main-wrapper swiper-area-main-wrapper">
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={4}
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
                                {brandImages.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="single-brand">
                                            <img src={image} alt={`brand-${index + 1}`} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandArea;
