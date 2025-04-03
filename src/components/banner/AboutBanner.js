"use client";
import React from "react";
import { useEffect } from "react";
import Rellax from "rellax";
function AboutBanner() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            new Rellax(".rellax", { speed: 5 });
        }
    }, []);
    const styling = {
        backgroundImage: `url(assets/images/about/01.webp)`,
    };
    return (
        <div>
            <>
                {/* about-banner area start */}
                <div className="about-banner-area-bg jarallax" style={styling}></div>
                {/* about-banner area end */}
                {/* counter area start */}
                <div className="counter-up-wrapper mt-dec-80">
                    <div className="container">
                        <div className="row g-0">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-counter-up-one border-top border-left">
                                    <div className="icon-area">
                                        <img src="assets/images/about/icons/01.svg" alt="icon" />
                                    </div>
                                    <p>Proven Track Record</p>
                                    <h3 className="title">
                                        +<span className="counter">5</span>years
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-counter-up-one border-top">
                                    <div className="icon-area">
                                        <img src="assets/images/about/icons/02.svg" alt="icon" />
                                    </div>
                                    <p>Customer Satisfaction</p>
                                    <h3 className="title">
                                        <span className="counter">98</span>%
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-counter-up-one border-top">
                                    <div className="icon-area">
                                        <img src="assets/images/about/icons/03.svg" alt="icon" />
                                    </div>
                                    <p>We Have Completed</p>
                                    <h3 className="title">
                                        <span className="counter">65</span>+
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-counter-up-one border-top">
                                    <div className="icon-area">
                                        <img src="assets/images/about/icons/04.svg" alt="icon" />
                                    </div>
                                    <p>Average Answer Time</p>
                                    <h3 className="title">
                                        <span className="counter">30</span>Mins
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </div>
    )
}

export default AboutBanner