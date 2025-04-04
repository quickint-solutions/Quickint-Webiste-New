"use client"
import { ReactSVG } from 'react-svg';
import React, { useEffect } from 'react';
import AOS from "aos";
function ServiceTwo() {
    useEffect(() => {
        AOS.init({
            disableMutationObserver: true,
            once: true,
        });
    }, []);
    return (
        <div>

            {/* solution area start */}
            <div className="rts-solution-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-center-style-two">
                                <h2 className="title">Our Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--30">
                        <div
                            className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100"
                        >
                            {/* signle service area start */}
                            <div className="single-service-style-two">
                                <div className="inner">
                                    <div className="icon">
                                        <img src="assets/images/service/icons/15.png" style={{ width: "35px" }} alt="service" />
                                    </div>
                                    <div className="bottom">
                                        <a href="service-single">
                                            <h3 className="title">
                                                Software Development
                                                <img
                                                    className="injectable"
                                                    src="assets/images/service/icons/13.svg"
                                                    alt="service"
                                                />
                                            </h3>
                                            <p className="disc">
                                                Maximize Efficiency with Quickint Solutions Software Development
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* single service end */}
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="300"
                        >
                            {/* signle service area start */}
                            <div className="single-service-style-two">
                                <div className="inner">
                                    <div className="icon">
                                        <img src="assets/images/service/icons/14.png" style={{ width: "35px" }} alt="service" />
                                    </div>
                                    <div className="bottom">
                                        <a href="/cyber-security-service">
                                            <h3 className="title">
                                                Cyber Security
                                                <img
                                                    className="injectable"
                                                    src="assets/images/service/icons/13.svg"
                                                    alt="service"
                                                />
                                            </h3>
                                            <p className="disc">
                                                Benefits of managed Cyber Security services provided by Quickint Solutions
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* single service end */}
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="500"
                        >
                            {/* signle service area start */}
                            <div className="single-service-style-two">
                                <div className="inner">
                                    <div className="icon">
                                        <img src="assets/images/service/icons/12.png" style={{ width: "40px" }} alt="service" />
                                    </div>
                                    <div className="bottom">
                                        <a href="/it-strategies">
                                            <h3 className="title">
                                                Web Development
                                                <img
                                                    className="injectable"
                                                    src="assets/images/service/icons/13.svg"
                                                    alt="service"
                                                />
                                            </h3>
                                            <p className="disc">

                                                Benefits of managed Web Development services provided by Quickint Solutions
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* single service end */}
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100"
                        >
                            {/* signle service area start */}
                            <div className="single-service-style-two">
                                <div className="inner">
                                    <div className="icon">
                                        <img src="assets/images/service/icons/16.png" style={{ width: "28px" }} alt="service" />
                                    </div>
                                    <div className="bottom">
                                        <a href="/development-service">
                                            <h3 className="title">
                                                Mobile Development
                                                <img
                                                    className="injectable"
                                                    src="assets/images/service/icons/13.svg"
                                                    alt="service"
                                                />
                                            </h3>
                                            <p className="disc">
                                                Elevate Your Business with Quickint Solutions Mobile Development Services
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* single service end */}
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="300"
                        >
                            {/* signle service area start */}
                            <div className="single-service-style-two">
                                <div className="inner">
                                    <div className="icon">
                                        <img src="assets/images/service/icons/13.jpg" style={{ width: "40px" }} alt="service" />
                                    </div>
                                    <div className="bottom">
                                        <a href="/it-consulting-service">
                                            <h3 className="title">
                                                IT Consulting &amp; Advisory
                                                <img
                                                    className="injectable"
                                                    src="assets/images/service/icons/13.svg"
                                                    alt="service"
                                                />
                                            </h3>
                                            <p className="disc">
                                                Unlocking Success with IT Consulting &amp; Advisory Services
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* single service end */}
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="500"
                        >
                            {/* signle service area start */}
                            <div className="single-service-style-two">
                                <div className="inner">
                                    <div className="icon">
                                        <img src="assets/images/service/icons/12.png" style={{ width: "40px" }} alt="service" />
                                    </div>
                                    <div className="bottom">
                                        <a href="/cloud-service">
                                            <h3 className="title">
                                                Cloud Services
                                                <img
                                                    className="injectable"
                                                    src="assets/images/service/icons/13.svg"
                                                    alt="service"
                                                />
                                            </h3>
                                            <p className="disc">
                                                Transform Your Business with Quickint Solutions Cloud Services
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* single service end */}
                        </div>
                        {/* <div className="col-lg-12 d-flex justify-content-center mt--80">
                            <a href="service.html" className="btn-bold rts-btn btn-border ">
                                View all solutions
                                <ReactSVG
                                    src="assets/images/service/icons/13.svg"
                                    alt="arrow"
                                />
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* solution area end */}


        </div >
    )
}

export default ServiceTwo