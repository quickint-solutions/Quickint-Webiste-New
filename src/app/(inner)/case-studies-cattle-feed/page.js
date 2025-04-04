"use client";
import BackToTop from "@/components/common/BackToTop";
import React from "react";

import FooterOne from "@/components/footer/FooterOne";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderOne from "@/components/header/HeaderOne";
function page() {

    return (
        <>
            <HeaderOne />

            {/* case studies area start */}
            <div className="single-large-case-studies-area-details">
                <div className="container">
                    <div className="row g-80">
                        <div className="col-lg-12">
                            <div className="single-case-studies">
                                <a href="#" className="thumbnail" data-aos-duration="1000" data-aos-delay="100">
                                    <img src="assets/images/case-studies/02.webp" alt="image" />
                                </a>
                                <div className="inner-content">
                                    <a href="#" data-aos-duration="1000" data-aos-delay="100">
                                        <h3 className="title animated fadeIn">Cattle feed</h3>
                                    </a>
                                    <div className="right-area" data-aos-duration="1000" data-aos-delay="300">
                                        <div className="top">
                                            <div className="date">
                                                <span>Date: 24 July, 2024</span>
                                            </div>
                                            <span>Industry:Animal feed</span>
                                        </div>
                                        <p>
                                            Cattle Feed project offers optimized nutritional solutions for livestock, enhancing growth, productivity, and overall health with scientifically formulated feed blends.
                                        </p>

                                        <a href="https://www.edgeinfinium.com/cattle-feed" className="rts-btn btn-border">
                                            View website
                                            <img src="assets/images/service/icons/13.svg" alt="arrow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row  rts-section-gapTop">
                        <div className="col-lg-12">
                            <div className="about-case-details-inne">
                                <p className="p1" data-aos-duration="1000" data-aos-delay="100">
                                    Cattle Feed provides high-quality animal feed designed to support the health and productivity of livestock. Our nutritious formulations enhance growth, improve feed efficiency, and promote overall well-being for cattle and other animals.
                                </p>
                                <div className="between-area-main-wrapper" data-aos-duration="1000" data-aos-delay="300">
                                    <div className="single">
                                        <h1 className="title">The challenge</h1>
                                        <p>
                                            Developing the Cattle Feed project presented several challenges, particularly in formulating a feed that met diverse nutritional needs. Balancing the nutritional content while ensuring cost-effectiveness was crucial.
                                            <br />
                                            Additionally, sourcing high-quality raw materials that met industry standards and were readily available posed a challenge. Ensuring consistency in feed quality across batches was key to maintaining livestock health.
                                            <br />
                                            Lastly, developing a user-friendly interface for easy online ordering and tracking was essential. The team focused on streamlining the process, making it intuitive for farmers and distributors to manage their feed requirements.
                                        </p>
                                    </div>
                                    <div className="single">
                                        <h1 className="title">The solution</h1>
                                        <p>
                                            Quickint Solutions was instrumental in developing the Cattle Feed project, collaborating closely with the client to understand industry-specific challenges and requirements.
                                            <br />
                                            In the second phase, we focused on creating a balanced, cost-effective feed formulation that met cattle nutritional needs.
                                            <br />
                                            Next, we sourced high-quality raw materials, ensuring consistent product quality and adherence to industry standards.
                                            <br />
                                            Finally, we developed a user-friendly platform for seamless ordering and tracking, enhancing accessibility and efficiency for farmers.                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* case studies area end */}
            {/* case studies slide area start */}
            <div className="case-studies-slider rts-section-gapTop">
                <div className="container-full">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="case-studies-slider-wrapper">
                                <div className="swiper-container">
                                    <Swiper
                                        spaceBetween={20} // Space between slides
                                        slidesPerView={3} // Number of slides visible at a time
                                        loop={true} // Enable looping
                                        speed={1000}
                                        centeredSlides={true}
                                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                                        modules={[Autoplay]}
                                        breakpoints={{
                                            // Responsive breakpoints
                                            640: { slidesPerView: 1 },
                                            768: { slidesPerView: 2 },
                                            1024: { slidesPerView: 3.4 },
                                        }}
                                    >
                                        {/* Swiper slides */}
                                        <SwiperSlide>
                                            <div className="thumbnail-case">
                                                <img src="/assets/images/case-studies/21.webp" alt="Case Study 21" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="thumbnail-case">
                                                <img src="/assets/images/case-studies/22.webp" alt="Case Study 22" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="thumbnail-case">
                                                <img src="/assets/images/case-studies/23.webp" alt="Case Study 23" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="thumbnail-case">
                                                <img src="/assets/images/case-studies/24.webp" alt="Case Study 24" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="thumbnail-case">
                                                <img src="/assets/images/case-studies/21.webp" alt="Case Study 21" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="thumbnail-case">
                                                <img src="/assets/images/case-studies/22.webp" alt="Case Study 22" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="thumbnail-case">
                                                <img src="/assets/images/case-studies/23.webp" alt="Case Study 23" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="thumbnail-case">
                                                <img src="/assets/images/case-studies/24.webp" alt="Case Study 24" />
                                            </div>
                                        </SwiperSlide>
                                        {/* Add more slides as needed */}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* case studies slide area end */}
            {/* case studies inner  paragraph area start */}
            <div className="case-studies-inner-paragraph-wrapper rts-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-content-wrapper-paragraph-case-para">
                                <h1 className="title">The Results</h1>
                                <p data-aos-duration="1000" data-aos-delay="100">
                                    Enhanced cattle health and productivity.
                                </p>
                                <p data-aos-duration="1000" data-aos-delay="300">
                                    Cost-effective feed solutions delivered consistently.
                                </p>
                                <p data-aos-duration="1000" data-aos-delay="500">
                                    Streamlined ordering and tracking process.
                                </p>
                                <p data-aos-duration="1000" data-aos-delay="700">
                                    Improved accessibility for farmers nationwide.
                                </p>
                                <p data-aos-duration="1000" data-aos-delay="900">
                                    Boosted client satisfaction and industry reputation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* case studies inner  paragraph area end */}
            {/* key benefits area start */}
            <div className="keybenefits-area rts-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="benefits-area-title-wrapper">
                                <h3 className="title">Key offer we deliver on this project</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 mt--15">
                        <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="100">
                            <div className="single-benefits-area-wrapper bg-light">
                                <div className="icon">
                                    <img src="assets/images/about/icons/01.svg" alt="benefits" />
                                </div>
                                <h5 className="title">Accelerate Growth</h5>
                            </div>
                        </div>
                        <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="200">
                            <div className="single-benefits-area-wrapper">
                                <div className="icon">
                                    <img src="assets/images/about/icons/02.svg" alt="benefits" />
                                </div>
                                <h5 className="title">Boost Efficiency</h5>
                            </div>
                        </div>
                        <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="300">
                            <div className="single-benefits-area-wrapper bg-light">
                                <div className="icon">
                                    <img src="assets/images/about/icons/03.svg" alt="benefits" />
                                </div>
                                <h5 className="title">Collaboration</h5>
                            </div>
                        </div>
                        <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="400">
                            <div className="single-benefits-area-wrapper">
                                <div className="icon">
                                    <img src="assets/images/about/icons/04.svg" alt="benefits" />
                                </div>
                                <h5 className="title">Reduce Costs</h5>
                            </div>
                        </div>
                        <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="100">
                            <div className="single-benefits-area-wrapper">
                                <div className="icon">
                                    <img src="assets/images/about/icons/05.svg" alt="benefits" />
                                </div>
                                <h5 className="title">Netwroking</h5>
                            </div>
                        </div>
                        <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="200">
                            <div className="single-benefits-area-wrapper  bg-light">
                                <div className="icon">
                                    <img src="assets/images/about/icons/06.svg" alt="benefits" />
                                </div>
                                <h5 className="title">Global Translations</h5>
                            </div>
                        </div>
                        <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="300">
                            <div className="single-benefits-area-wrapper">
                                <div className="icon">
                                    <img src="assets/images/about/icons/07.svg" alt="benefits" />
                                </div>
                                <h5 className="title">Enhance Security</h5>
                            </div>
                        </div>
                        <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="400">
                            <div className="single-benefits-area-wrapper  bg-light">
                                <div className="icon">
                                    <img src="assets/images/about/icons/08.svg" alt="benefits" />
                                </div>
                                <h5 className="title">In-house techs</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* key benefits area end */}
            {/* more case studies area start */}
            <div className="more-case-studies rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="title-more-case">More case studies</h2>
                        </div>
                    </div>
                    <div className="row g-80 mt--0">
                        <div
                            className="col-lg-6" data-aos-duration="1000" data-aos-delay="100"
                        >
                            <div className="single-case-studies">
                                <a href="/case-studies-husk-spices" className="thumbnail">
                                    <img src="assets/images/case-studies/04.webp" alt="image" />
                                </a>
                                <div className="inner-content">
                                    <span>Industry:Dehydrated Food Products</span>
                                    <a href="/case-studies-husk-spices">
                                        <h3 className="title animated fadeIn">Husk ‘N’ Spices</h3>
                                    </a>
                                    <a href="/case-studies-husk-spices" className="rts-btn btn-border">
                                        View case study
                                        <img src="assets/images/service/icons/13.svg" alt="arrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6" data-aos-duration="1000" data-aos-delay="300"
                        >
                            <div className="single-case-studies">
                                <a href="/case-studies-maan" className="thumbnail">
                                    <img src="assets/images/case-studies/Maan-Logo1-1024x599.png" alt="image" />
                                </a>
                                <div className="inner-content">
                                    <span>Industry:Industrial License Consultant</span>
                                    <a href="/case-studies-maan">
                                        <h3 className="title animated fadeIn">Maan Associates</h3>
                                    </a>
                                    <a href="/case-studies-maan" className="rts-btn btn-border">
                                        View case study
                                        <img src="assets/images/service/icons/13.svg" alt="arrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* more case studies area end */}
            {/* rts call to action area start */}
            <div className="rts-call-to-action-area-about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="title" data-aos-duration="1000" data-aos-delay="100">Book a Free Consultation</h2>
                            <p className="disc" data-aos-duration="1000" data-aos-delay="300">
                                Schedule a no-obligation consultation to discuss your unique needs
                                and how Quickint Solutions can elevate your business technology.
                            </p>
                            <a
                                target="_blank"
                                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ39f071tVvYbKUAnVaFk3HQG4uAEoL-CjHGygO7nfiRCA6lwLnehAPwYCHMdH5s5S7f8-WzjLse"
                                className="rts-btn btn-primary" data-aos-duration="1000" data-aos-delay="500"
                            >
                                View Solutions
                                <img
                                    className="injectable"
                                    src="assets/images/service/icons/13.svg"
                                    alt="arrow"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts call to action area end */}
            <BackToTop />
            <FooterOne />
        </>

    )
}

export default page