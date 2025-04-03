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
                                    <img src="assets/images/case-studies/04.webp" alt="image" />
                                </a>
                                <div className="inner-content">
                                    <a href="#" data-aos-duration="1000" data-aos-delay="100">
                                        <h3 className="title animated fadeIn">Husk 'n' spices</h3>
                                    </a>
                                    <div className="right-area" data-aos-duration="1000" data-aos-delay="300">
                                        <div className="top">
                                            <div className="date">
                                                <span>Date: 24 July, 2024</span>
                                            </div>
                                            <span>Industry:Dehydrated Food Products</span>
                                        </div>
                                        <p>
                                            Husk ‘N’ Spices offers premium quality spices and herbs, delivering fresh, authentic flavors directly from farm to your kitchen.
                                        </p>

                                        <a href="https://www.edgeinfinium.com/husk-n-spices" className="rts-btn btn-border">
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
                                    Husk ‘N’ Spices offers premium dehydrated food products, preserving flavor and nutrition through advanced dehydration techniques. Our range includes fruits, vegetables, and spices, ideal for convenient, long-lasting, and healthy ingredients.
                                </p>
                                <div className="between-area-main-wrapper" data-aos-duration="1000" data-aos-delay="300">
                                    <div className="single">
                                        <h1 className="title">The challenge</h1>
                                        <p>
                                            Developing Husk ‘N’ Spices presented unique challenges in establishing an intuitive, user-friendly platform for customers to browse and purchase premium spices. A significant challenge was ensuring the seamless integration of product catalog management and secure payment systems.
                                            <br />
                                            The design needed to reflect the freshness and authenticity of the products while maintaining a modern, professional look. Additionally, real-time inventory updates were crucial to avoid overselling and ensure customer satisfaction.
                                            <br />
                                            Another challenge was optimizing the website for both desktop and mobile use, ensuring a responsive experience. Despite these hurdles, Quickint Solutions successfully delivered an attractive, functional platform that enhanced the customer shopping experience.
                                        </p>
                                    </div>
                                    <div className="single">
                                        <h1 className="title">The solution</h1>
                                        <p>
                                            Quickint Solutions played a key role in developing Husk ‘N’ Spices by delivering a customized e-commerce platform. We started by understanding the business requirements and audience, allowing us to craft a tailored solution.
                                            <br />
                                            Next, we focused on creating an intuitive, visually appealing interface. High-quality images and smooth navigation ensured that customers could easily browse through the spice products.
                                            <br />
                                            In the final stage, we integrated secure payment systems and optimized the website for both mobile and desktop. This provided a seamless shopping experience, ensuring customer satisfaction across all devices.
                                        </p>
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
                                    Enhanced user experience with a modern interface.
                                </p>
                                <p data-aos-duration="1000" data-aos-delay="300">
                                    Streamlined navigation for easy product browsing.
                                </p>
                                <p data-aos-duration="1000" data-aos-delay="500">
                                    Optimized for mobile and desktop platforms.
                                </p>
                                <p data-aos-duration="1000" data-aos-delay="700">
                                    Secure and efficient payment system integration.
                                </p>
                                <p data-aos-duration="1000" data-aos-delay="900">
                                    Increased customer engagement and sales.
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
                        <div
                            className="col-lg-6" data-aos-duration="1000" data-aos-delay="300"
                        >
                            <div className="single-case-studies">
                                <a href="/case-studies-sony" className="thumbnail">
                                    <img src="assets/images/case-studies/Sony-world-logo-1024x599.png" alt="image" />
                                </a>
                                <div className="inner-content">
                                    <span>Industry:Modern Electronics</span>
                                    <a href="/case-studies-sony">
                                        <h3 className="title animated fadeIn">Sony World</h3>
                                    </a>
                                    <a href="/case-studies-sony" className="rts-btn btn-border">
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
                                href="#"
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