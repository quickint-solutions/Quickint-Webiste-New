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
                                    <img src="assets/images/case-studies/Orijin-logo-1-1024x599.png" alt="image" />
                                </a>
                                <div className="inner-content">
                                    <a href="#" data-aos-duration="1000" data-aos-delay="100">
                                        <h3 className="title animated fadeIn">Orijin</h3>
                                    </a>
                                    <div className="right-area" data-aos-duration="1000" data-aos-delay="300">
                                        <div className="top">
                                            <div className="date">
                                                <span>Date: 24 July, 2024</span>
                                            </div>
                                            <span>Industry:Food Engine</span>
                                        </div>
                                        <p>
                                            Orijin Food Engine revolutionizes ingredient sourcing, analysis, and optimization, enabling high-quality, sustainable, and traceable food production with enhanced nutrition.                                        </p>

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
                                    ORIJIN Food Engine is a cutting-edge platform for sourcing, analyzing, and optimizing food ingredients, empowering producers to create high-quality, sustainable products with enhanced nutritional value and traceability.
                                </p>
                                <div className="between-area-main-wrapper" data-aos-duration="1000" data-aos-delay="300">
                                    <div className="single">
                                        <h1 className="title">The challenge</h1>
                                        <p>
                                            Developing Orijin required addressing complex challenges like creating a robust platform capable of sourcing, analyzing, and optimizing diverse food ingredients. Ensuring seamless integration with existing systems while maintaining data accuracy and transparency was critical.
                                            <br />
                                            Another significant hurdle was implementing advanced algorithms for nutritional analysis and ingredient traceability. The system needed to process vast amounts of data efficiently, offering meaningful insights for producers while adhering to industry compliance and sustainability standards.
                                            <br />
                                            Additionally, designing a user-friendly interface was vital to cater to diverse stakeholders, from food producers to analysts. Balancing sophisticated functionality with simplicity was key to ensuring accessibility and widespread adoption of the platform.
                                        </p>
                                    </div>
                                    <div className="single">
                                        <h1 className="title">The solution</h1>
                                        <p>
                                            Quickint Solutions played a pivotal role in transforming Orijin into a leading food engine platform. By understanding the project’s vision, we tailored solutions that addressed every development challenge with precision and innovation.
                                            <br />
                                            We designed a scalable architecture to handle complex data processing for ingredient sourcing and analysis. Seamless integration with existing databases ensured accurate, real-time data collection and compliance with industry standards.
                                            <br />
                                            Our team implemented sophisticated algorithms for nutritional analysis and traceability, delivering actionable insights. This enabled producers to optimize ingredients effectively and enhance product quality and sustainability.
                                            <br />
                                            We crafted a user-friendly interface, combining advanced functionality with intuitive design. This ensured accessibility for diverse stakeholders while promoting ease of use and widespread adoption.
                                            Quickint Solutions empowered Orijin with a robust platform that supports innovation and sustainable food production.
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
                                <div
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '20px',
                                    }}
                                >
                                    <div style={{ width: '100%', padding: '70px' }}>
                                        <img
                                            src="/assets/images/orijin/orijin.jpeg"
                                            alt="Case Study 1"
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                objectFit: 'cover',
                                                borderRadius: '12px',
                                            }}
                                        />
                                    </div>
                                    <div style={{ width: '100%', padding: '70px' }}>
                                        <img
                                            src="/assets/images/orijin/orijin1.png"
                                            alt="Case Study 2"
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                objectFit: 'cover',
                                                borderRadius: '12px',
                                            }}
                                        />
                                    </div>
                                    <div style={{ width: '100%', padding: '70px' }}>
                                        <img
                                            src="/assets/images/orijin/orijin2.png"
                                            alt="Case Study 3"
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                objectFit: 'cover',
                                                borderRadius: '12px',
                                            }}
                                        />
                                    </div>
                                    <div style={{ width: '100%', padding: '70px' }}>
                                        <img
                                            src="/assets/images/orijin/orijin3.png"
                                            alt="Case Study 4"
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                objectFit: 'cover',
                                                borderRadius: '12px',
                                            }}
                                        />
                                    </div>
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
                                    Optimized food ingredient sourcing and analysis.                                </p>
                                <p data-aos-duration="1000" data-aos-delay="300">
                                    Enhanced nutritional value and traceability for products.
                                </p>
                                <p data-aos-duration="1000" data-aos-delay="500">
                                    Streamlined platform for producers to improve quality.
                                </p>
                                <p data-aos-duration="1000" data-aos-delay="700">
                                    Scalable and efficient system architecture.
                                </p>
                                <p data-aos-duration="1000" data-aos-delay="900">
                                    User-friendly interface for seamless data access.
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
                                <a href="/case-studies-exact-lims" className="thumbnail">
                                    <img src="assets/images/case-studies/03.webp" alt="image" />
                                </a>
                                <div className="inner-content">
                                    <span>Industry:Healthcare</span>
                                    <a href="/case-studies-exact-lims">
                                        <h3 className="title animated fadeIn">EXACT LIMS  </h3>
                                    </a>
                                    <a href="/case-studies-exact-lims" className="rts-btn btn-border">
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
                                <a href="/case-studies-cattle-feed" className="thumbnail">
                                    <img src="assets/images/case-studies/02.webp" alt="image" />
                                </a>
                                <div className="inner-content">
                                    <span>Industry:Animal feed</span>
                                    <a href="/case-studies-cattle-feed">
                                        <h3 className="title animated fadeIn">Cattle Feed</h3>
                                    </a>
                                    <a href="/case-studies-cattle-feed" className="rts-btn btn-border">
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
                                Book Call it should be open google booking link
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