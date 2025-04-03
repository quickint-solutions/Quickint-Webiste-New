"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

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
                        <div className="brand-area-main-wrapper">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={5}
                                loop={true}
                                breakpoints={{
                                    320: { slidesPerView: 2 },
                                    768: { slidesPerView: 3 },
                                    1024: { slidesPerView: 5 },
                                }}
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
