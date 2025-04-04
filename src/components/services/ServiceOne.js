"use client";
import React from "react";
import { ReactSVG } from "react-svg";

function ServiceOne() {
    return (
        <div>
            {/* solution expertise */}
            <div className="solution-expertice-area rts-section-gap bg-solution">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-center-2">
                                <h2 className="title">Simplifying IT for a complex world.</h2>
                            </div>
                        </div>
                    </div>

                    {/* Single Row - All Cards in One Line */}
                    <div className="row g-4 mt-4 d-flex flex-nowrap overflow-auto">
                        {/* Card 1 */}
                        <div className="col-md-3 flex-shrink-0">
                            <div className="single-solution-style-one border rounded p-4 text-center shadow">
                                <div className="icon">
                                    <img src="assets/images/service/icons/01.svg" alt="service" />
                                </div>
                                <h4 className="title">Cost-effectiveness</h4>
                                <p className="disc">
                                    We offer affordable IT solutions that help you reduce costs and improve your bottom line.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-md-3 flex-shrink-0">
                            <div className="single-solution-style-one border rounded p-4 text-center shadow">
                                <div className="icon">
                                    <img src="assets/images/service/icons/02.svg" alt="service" />
                                </div>
                                <h4 className="title">Innovative Technology</h4>
                                <p className="disc">
                                    We stay up-to-date with the latest technology trends and offer innovative solutions.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-md-3 flex-shrink-0">
                            <div className="single-solution-style-one border rounded p-4 text-center shadow">
                                <div className="icon">
                                    <img src="assets/images/service/icons/03.svg" alt="service" />
                                </div>
                                <h4 className="title">Industry Expertise</h4>
                                <p className="disc">
                                    We specialize in serving specific industry trends and market demands, offering tailored solutions.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="col-md-3 flex-shrink-0">
                            <div className="single-solution-style-one border rounded p-4 text-center shadow">
                                <div className="icon">
                                    <img src="assets/images/service/icons/04.svg" alt="service" />
                                </div>
                                <h4 className="title">Scalability</h4>
                                <p className="disc">
                                    Our scalable solutions are flexible, adaptable, and can efficiently grow with your expanding business needs.</p>
                            </div>
                        </div>
                    </div>

                    {/* More Solutions Button */}
                    <div className="row mt-4">
                        <div className="col-lg-12 text-center">
                            <a href="service.html" className="rts-btn btn-primary">
                                More Solutions
                                <ReactSVG src="assets/images/service/icons/13.svg" alt="arrow" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* solution expertise end */}
        </div>
    );
}

export default ServiceOne;
