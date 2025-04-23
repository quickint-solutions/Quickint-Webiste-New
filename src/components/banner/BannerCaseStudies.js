"use client";
import { useEffect } from "react";
import React from 'react'
import { ReactSVG } from 'react-svg';
import AOS from "aos";
import "aos/dist/aos.css";
function BannerCaseStudies() {
    useEffect(() => {
        AOS.init({
            disableMutationObserver: true,
            once: true,
        });
    }, []);
    return (
        <div>
            {/* rts case studies banner area start */}
            <div className="rts-case-studies-banner-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="case-studies-banner-top">
                                <h1 className="title">Case studies</h1>
                                <p>Here are our featured projects that empower businesses.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-left-top">
                    <img src="assets/images/case-studies/01.png" alt="case" />
                </div>
            </div>
            {/* rts case studies banner area end */}
            {/* case studies area start */}
            <div className="single-large-case-studies-area">
                <div className="container">
                    <div className="row g-80">
                        <div
                            className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
                        >
                            <div className="single-case-studies">
                                <a href="/case-studies-sony" className="thumbnail">
                                    <img src="assets/images/case-studies/Sony-world-logo-1024x599.png" alt="image" />
                                </a>
                                <div className="inner-content">
                                    <span>Industry:Modern Electronics</span>
                                    <a href="/case-studies-sony">
                                        <h3 className="title animated fadeIn">Sony World
                                        </h3>
                                    </a>
                                    <a href="/case-studies-sony" className="rts-btn btn-border">
                                        View case study
                                        <ReactSVG
                                            src="assets/images/service/icons/13.svg"
                                            alt="arrow"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
                        >
                            <div className="single-case-studies">
                                <a href="/case-studies-single" className="thumbnail">
                                    <img src="assets/images/case-studies/01.webp" alt="image" />
                                </a>
                                <div className="inner-content">
                                    <span>Industry:B2B Pharmacy</span>
                                    <a href="/case-studies-single">
                                        <h3 className="title animated fadeIn">1Deal App</h3>
                                    </a>
                                    <a href="/case-studies-single" className="rts-btn btn-border">
                                        View case study
                                        <ReactSVG
                                            src="assets/images/service/icons/13.svg"
                                            alt="arrow"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
                        >
                            <div className="single-case-studies">
                                <a href="/case-studies-exact-lims" className="thumbnail">
                                    <img src="assets/images/case-studies/03.webp" alt="image" />
                                </a>
                                <div className="inner-content">
                                    <span>Industry:Healthcare
                                    </span>
                                    <a href="/case-studies-exact-lims">
                                        <h3 className="title animated fadeIn">EXACT LIMS                                        </h3>
                                    </a>
                                    <a href="/case-studies-exact-lims" className="rts-btn btn-border">
                                        View case study
                                        <ReactSVG
                                            src="assets/images/service/icons/13.svg"
                                            alt="arrow"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
                        >
                            <div className="single-case-studies">
                                <a href="/case-studies-cattle-feed" className="thumbnail">
                                    <img src="assets/images/case-studies/02.webp" alt="image" />
                                </a>
                                <div className="inner-content">
                                    <span>Industry:Animal feed</span>
                                    <a href="/case-studies-cattle-feed">
                                        <h3 className="title animated fadeIn">Cattle Feed
                                        </h3>
                                    </a>
                                    <a href="/case-studies-cattle-feed" className="rts-btn btn-border">
                                        View case study
                                        <ReactSVG
                                            src="assets/images/service/icons/13.svg"
                                            alt="arrow"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
                        >
                            <div className="single-case-studies">
                                <a href="/case-studies-husk-spices" className="thumbnail">
                                    <img src="assets/images/case-studies/04.webp" alt="image" />
                                </a>
                                <div className="inner-content">
                                    <span>Industry:Dehydrated Food Products </span>
                                    <a href="/case-studies-husk-spices">
                                        <h3 className="title animated fadeIn">Husk ‘N’ Spices
                                        </h3>
                                    </a>
                                    <a href="/case-studies-husk-spices" className="rts-btn btn-border">
                                        View case study
                                        <ReactSVG
                                            src="assets/images/service/icons/13.svg"
                                            alt="arrow"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
                        >
                            <div className="single-case-studies">
                                <a href="/case-studies-maan" className="thumbnail">
                                    <img src="assets/images/case-studies/Maan-Logo1-1024x599.png" alt="image" />
                                </a>
                                <div className="inner-content">
                                    <span>Industry:Industrial License Consultant</span>
                                    <a href="/case-studies-maan">
                                        <h3 className="title animated fadeIn">Maan Associates
                                        </h3>
                                    </a>
                                    <a href="/case-studies-maan" className="rts-btn btn-border">
                                        View case study
                                        <ReactSVG
                                            src="assets/images/service/icons/13.svg"
                                            alt="arrow"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
                        >
                            <div className="single-case-studies">
                                <a href="/case-studies-orijin" className="thumbnail">
                                    <img src="assets/images/case-studies/Orijin-logo-1-1024x599.png" alt="image" />
                                </a>
                                <div className="inner-content">
                                    <span>Industry:Food Engine
                                    </span>
                                    <a href="/case-studies-orijin">
                                        <h3 className="title animated fadeIn">Orijin
                                        </h3>
                                    </a>
                                    <a href="/case-studies-orijin" className="rts-btn btn-border">
                                        View case study
                                        <ReactSVG
                                            src="assets/images/service/icons/13.svg"
                                            alt="arrow"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
                        >
                            <div className="single-case-studies">
                                <a href="/case-studies-techfenix" className="thumbnail">
                                    <img src="assets/images/case-studies/techfenix-logo-21.png" alt="image" />
                                </a>
                                <div className="inner-content">
                                    <span>Industry:Cybersecurity
                                    </span>
                                    <a href="/case-studies-techfenix">
                                        <h3 className="title animated fadeIn">TECHFENIX
                                        </h3>
                                    </a>
                                    <a href="/case-studies-techfenix" className="rts-btn btn-border">
                                        View case study
                                        <ReactSVG
                                            src="assets/images/service/icons/13.svg"
                                            alt="arrow"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* case studies area end */}
        </div >
    )
}

export default BannerCaseStudies