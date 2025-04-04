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
                                    <img src="assets/images/case-studies/Sony-world-logo-1024x599.png" alt="image" />
                                </a>
                                <div className="inner-content">
                                    <a href="#" data-aos-duration="1000" data-aos-delay="100">
                                        <h3 className="title animated fadeIn">Sony World</h3>
                                    </a>
                                    <div className="right-area" data-aos-duration="1000" data-aos-delay="300">
                                        <div className="top">
                                            <div className="date">
                                                <span>Date: 24 July, 2024</span>
                                            </div>
                                            <span>Industry: Modern Electronics</span>
                                        </div>
                                        <p>
                                            Core to growing a gaming company is a robust payments infrastructure.
                                        </p>

                                        <a href="#" className="rts-btn btn-border">
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
                                    Sony World Modern Electronics offers cutting-edge gadgets, including TVs, cameras, audio systems, and gaming consoles. With innovative technology and sleek designs, it provides a premium shopping experience for tech enthusiasts seeking the latest in electronics and entertainment solutions.
                                </p>
                                <div className="between-area-main-wrapper" data-aos-duration="1000" data-aos-delay="300">
                                    <div className="single">
                                        <h1 className="title">The challenge</h1>
                                        <p>
                                            Developing the Sony World website presented challenges related to integrating a seamless, user-friendly interface with cutting-edge technology. Ensuring that the online platform mirrored the brand’s premium retail experience while providing efficient navigation for tech-savvy customers was a key challenge.
                                            <br />
                                            Another challenge was optimizing the website for mobile and desktop, ensuring smooth and responsive performance across all devices. A consistent user experience, both visually and functionally, needed to be maintained.
                                            <br />
                                            Additionally, the integration of a secure, scalable e-commerce system to handle customer transactions was crucial. Maintaining data security and streamlining the purchase process were vital to delivering a smooth online shopping experience.
                                        </p>
                                    </div>
                                    <div className="single">
                                        <h1 className="title">The solution</h1>
                                        <p>
                                            Quick Solutions played a pivotal role in developing the Sony World website, transforming the client’s vision into a seamless digital experience. The project began with extensive planning, involving close communication with Sony World’s team to understand their requirements and brand identity.
                                            <br />
                                            Next, our team focused on creating a visually appealing and user-friendly design that reflects Sony’s premium products. We ensured that the layout was responsive and optimized across devices, delivering a consistent experience for all users.
                                            <br />
                                            The third stage involved integrating a secure e-commerce system that supports smooth transactions and payment processing. We ensured a scalable platform that could handle a growing customer base and large product inventory efficiently.
                                            <br />
                                            Finally, Quick Solutions provided ongoing support and maintenance to ensure the website remains secure, updated, and functional, helping Sony World offer an exceptional online shopping experience.                                        </p>
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
                                    Enhanced user engagement with a modern, responsive design.
                                </p>
                                <p data-aos-duration="1000" data-aos-delay="300">
                                    Increased online sales through seamless e-commerce integration.
                                </p>
                                <p data-aos-duration="1000" data-aos-delay="500">
                                    Optimized mobile experience for better customer retention.
                                </p>
                                <p data-aos-duration="1000" data-aos-delay="700">
                                    Improved website security with robust payment processing.
                                </p>
                                <p data-aos-duration="1000" data-aos-delay="900">
                                    Continuous support ensuring long-term functionality and performance.
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
                                <a href="/case-studies-orijin" className="thumbnail">
                                    <img src="assets/images/case-studies/Orijin-logo-1-1024x599.png" alt="image" />
                                </a>
                                <div className="inner-content">
                                    <span>Industry:Food Engine</span>
                                    <a href="/case-studies-orijin">
                                        <h3 className="title animated fadeIn">Orijin</h3>
                                    </a>
                                    <a href="/case-studies-orijin" className="rts-btn btn-border">
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
                                <a href="/case-studies-techfenix" className="thumbnail">
                                    <img src="assets/images/case-studies/techfenix-logo-21.png" alt="image" />
                                </a>
                                <div className="inner-content">
                                    <span>Industry:Cybersecurity</span>
                                    <a href="/case-studies-techfenix">
                                        <h3 className="title animated fadeIn">TECHFENIX</h3>
                                    </a>
                                    <a href="/case-studies-techfenix" className="rts-btn btn-border">
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
                                and how Luminous can elevate your business technology.
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