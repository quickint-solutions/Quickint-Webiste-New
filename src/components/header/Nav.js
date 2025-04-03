"use client"
import React from 'react'
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
function Nav() {
    return (
        <div>
            <div className="nav-area">
                <nav>
                    <ul>
                        <li className="has-dropdown position-static with-megamenu margin-single-0">
                            <Link className="nav-link" href="/">
                                Home
                            </Link>
                        </li>
                        <li className="position-static with-megamenu margin-single-0">
                            <Link href="/about">
                                <i className="fa-sharp fa-regular" />
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/case-studies">
                                Case Studies
                            </Link>
                        </li>
                        <li className="has-dropdown position-static with-megamenu">
                            <Link className="nav-link" href="/">
                                Service{" "}
                                <i className="fa-duotone fa-regular fa-chevron-down" />
                            </Link>
                            <div className="submenu">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <ul className="single-menu parent-nav">
                                                <li>
                                                    <Link
                                                        className="single-service-area-wrapper"
                                                        href="/service-single"
                                                    >
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/images/service/icons/15.png"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">Software Development</h4>
                                                            <p>  Maximize Efficiency with Quickint Solutions Software Development
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        className="single-service-area-wrapper"
                                                        href="/cyber-security-service"
                                                    >
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/images/service/icons/14.png"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">Cyber Security</h4>
                                                            <p>Protecting data software and networks.</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <ul className="single-menu parent-nav">
                                                <li>
                                                    <Link
                                                        className="single-service-area-wrapper"
                                                        href="/it-strategies"
                                                    >
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/images/service/icons/12.png"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">Web Development</h4>
                                                            <p>                                                Benefits of managed Web Development services provided by Quickint Solutions                                                            </p>
                                                        </div>
                                                    </Link>
                                                </li>


                                                <li>
                                                    <Link
                                                        className="single-service-area-wrapper"
                                                        href="/development-service"
                                                    >
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/images/service/icons/16.png"
                                                                style={{ width: "28px" }}
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title"> Mobile Development</h4>
                                                            <p>
                                                                Elevate Your Business with Quickint Solutions' Mobile Development Services
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <ul className="single-menu parent-nav">
                                                <li>
                                                    <Link
                                                        className="single-service-area-wrapper"
                                                        href="/it-consulting-service"
                                                    >
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/images/service/icons/13.jpg"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">
                                                                IT Consulting & Advisory
                                                            </h4>
                                                            <p>
                                                                Unlocking Success with IT Consulting &amp; Advisory Services
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="single-service-area-wrapper"
                                                        href="/cloud-service"
                                                    >
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/images/service/icons/12.png"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">Cloud Services</h4>
                                                            <p>
                                                                Transform Your Business with Quickint Solutions' Cloud Services                                                            </p>
                                                        </div>
                                                    </Link>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <ul className="single-menu parent-nav industry-signle-menu">
                                                <li className="parent-top-industry">
                                                    <p>Industries</p>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="industries"
                                                        href="/construction-industry"
                                                    >
                                                        <ReactSVG
                                                            src="/assets/images/icons/arrow-right.svg"
                                                            alt="arrow"
                                                        />
                                                        Constructions
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="industries"
                                                        href="/healthcare-industry"
                                                    >
                                                        <ReactSVG
                                                            src="/assets/images/icons/arrow-right.svg"
                                                            alt="arrow"
                                                        />
                                                        HealthCare
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="industries"
                                                        href="/ecommerce-industry"
                                                    >
                                                        <ReactSVG
                                                            src="/assets/images/icons/arrow-right.svg"
                                                            alt="arrow"
                                                        />
                                                        Retail &amp; E-Commerce
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="industries"
                                                        href="/fintech-industry"
                                                    >
                                                        <ReactSVG
                                                            src="/assets/images/icons/arrow-right.svg"
                                                            alt="arrow"
                                                        />
                                                        Fintech
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="industries"
                                                        href="/logistic-industry"
                                                    >
                                                        <ReactSVG
                                                            src="/assets/images/icons/arrow-right.svg"
                                                            alt="arrow"
                                                        />
                                                        Logistics &amp; Automotive
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="industries"
                                                        href="/travel-industry"
                                                    >
                                                        <ReactSVG
                                                            src="/assets/images/icons/arrow-right.svg"
                                                            alt="arrow"
                                                        />
                                                        Travel &amp; Hospitality
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link className="nav-link" href="/blog-grid">
                                <i className="fa-sharp fa-regular" />
                                Blog Grid
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div >
    )
}

export default Nav