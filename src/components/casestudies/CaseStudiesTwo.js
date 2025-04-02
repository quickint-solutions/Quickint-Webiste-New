"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { ReactSVG } from 'react-svg';
const CaseStudiesTwo = () => {
    const caseStudies = [
        {
            imgSrc: "assets/images/case-studies/01.webp",
            category: "Industry:B2B Pharmacy",
            title: "1Deal App",
            link: "case-studies-single",
        },
        {
            imgSrc: "assets/images/case-studies/03.webp",
            category: "Industry:Healthcare",
            title: "EXACT LIMS",
            link: "case-studies-exact-lims",
        },
        {
            imgSrc: "assets/images/case-studies/02.webp",
            category: "Industry:Animal feed",
            title: "Cattle Feed",
            link: "case-studies-cattle-feed",
        },
        {
            imgSrc: "assets/images/case-studies/04.webp",
            category: "Industry:Dehydrated Food Products",
            title: "Husk ‘N’ Spices",
            link: "case-studies-husk-spices",
        },
        {
            imgSrc: "assets/images/case-studies/Maan-Logo1-1024x599.png",
            category: "Industry:Industrial License Consultant",
            title: "Maan Associates",
            link: "case-studies-maan",
        },

        {
            imgSrc: "assets/images/case-studies/Sony-world-logo-1024x599.png",
            category: "Industry:Modern Electronics",
            title: "Sony World",
            link: "case-studies-sony",
        },

        {
            imgSrc: "assets/images/case-studies/Orijin-logo-1-1024x599.png",
            category: "Industry:Food Engine",
            title: "Orijin",
            link: "case-studies-orijin",
        },
        {
            imgSrc: "assets/images/case-studies/techfenix-logo-21.png",
            category: "Industry:Cybersecurity",
            title: "TECHFENIX",
            link: "case-studies-techfenix",
        }


    ];

    return (
        <div className="rts-case-studies-area rts-section-gap bg_nutral">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center-title-bg-white">
                            <h2 className="title">Case studies</h2>
                            <p>Here are our featured projects that empower businesses.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt--80">
                    <div className="col-lg-12">
                        <div className="float-right-style" dir="ltr">

                            <div className="swiper-area-main-wrapper">
                                <Swiper
                                    spaceBetween={30}
                                    slidesPerView={2.2}
                                    loop={true}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    breakpoints={{
                                        320: { slidesPerView: 1 },
                                        768: { slidesPerView: 2 },
                                        1024: { slidesPerView: 2.2 },
                                    }}
                                    modules={[Autoplay]} // Updated syntax
                                >
                                    {caseStudies.map((study, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="single-case-studies style-swiper">
                                                <a href={study.link} className="thumbnail">
                                                    <img src={study.imgSrc} alt="image" />
                                                </a>
                                                <div className="inner-content">
                                                    <span>{study.category}</span>
                                                    <a href={study.link}>
                                                        <h3 className="title">{study.title}</h3>
                                                    </a>
                                                    <a href={study.link} className="rts-btn btn-border">
                                                        View case study
                                                        <ReactSVG
                                                            src="assets/images/service/icons/13.svg"
                                                            alt="arrow"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 justify-content-center d-flex mt--80">
                        <a href="case-studies" className="rts-btn btn-border btn-bold">
                            More projects
                            <ReactSVG
                                src="assets/images/service/icons/13.svg"
                                alt="arrow"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudiesTwo;
