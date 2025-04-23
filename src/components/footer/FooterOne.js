"use client"
import React from 'react'
import Link from 'next/link';
function FooterOne() {
    return (
        <div>

            {/* rts footer area start */}
            <div className="rts-footer-area rts-section-gapTop pb--80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="logo-area">
                                <Link href="/#" className="logo">
                                    <img src="/assets/images/logo/Quickint-logo.png" alt="logo" />
                                </Link>
                                <p className="disc">
                                    Quickint Solutions is a premier IT solutions provider, delivering cutting-edge technology services tailored to businesses of all sizes.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row g-5">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="single-nav-area-footer">
                                        <p className="parent">Services</p>
                                        <ul>
                                            <li>
                                                <Link href="/software-development">Software Development</Link>
                                            </li>
                                            <li>
                                                <Link href="/it-strategies">Web Development</Link>
                                            </li>
                                            <li>
                                                <Link href="/it-consulting-service">IT Counsulting & Advisory</Link>
                                            </li>
                                            <li>
                                                <Link href="/cyber-security-service">Cyber Security</Link>
                                            </li>
                                            <li>
                                                <Link href="/development-service">Mobile Development</Link>
                                            </li>
                                            <li>
                                                <Link href="/cloud-service">Cloud Services</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="single-nav-area-footer">
                                        <p className="parent">Company</p>
                                        <ul>
                                            <li>
                                                <Link href="/about">About us</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="single-nav-area-footer">
                                        <p className="parent">Industrys</p>
                                        <ul>
                                            <li>
                                                <Link href="/construction-industry">Construction</Link>
                                            </li>
                                            <li>
                                                <Link href="/healthcare-industry">Healthcare</Link>
                                            </li>
                                            <li>
                                                <Link href="/ecommerce-industry">Ecommerce</Link>
                                            </li>
                                            <li>
                                                <Link href="/fintech-industry">Fintech</Link>
                                            </li>
                                            <li>
                                                <Link href="/logistic-industry">Logistic</Link>
                                            </li>
                                            <li>
                                                <Link href="/travel-industry">Travel Industry</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="single-nav-area-footer">
                                        <p className="parent">Legal</p>
                                        <ul>
                                            <li>
                                                <Link href="/terms-of-use">Terms</Link>
                                            </li>
                                            <li>
                                                <Link href="/privacy-policy">Privacy</Link>
                                            </li>
                                            <li>
                                                <Link href="/cookies-policy">Cookies</Link>
                                            </li>
                                            <li>
                                                <Link href="/faq">Faq</Link>
                                            </li>
                                            <li>
                                                <Link href="/free-consultation">Consultation</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts footer area end */}
            {/* rts copyright area start */}
            <div className="rts-copyright-area-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright-wrapper">
                                <p>© 2025 Quickint Solutions. All rights reserved.</p>
                                <div className="social-copyright-area">
                                    <ul>
                                        <li aria-label="Visit our Facebook page">
                                            <Link href="/#">
                                                <i className="fa-brands fa-facebook-f" />
                                            </Link>
                                        </li>
                                        <li aria-label="Visit our Twitter page">
                                            <Link href="/#">
                                                <i className="fa-brands fa-twitter" />
                                            </Link>
                                        </li>
                                        <li aria-label="Visit our Linkedin page">
                                            <Link href="https://www.linkedin.com/in/ineelpatel2384/">
                                                <i className="fa-brands fa-linkedin" />
                                            </Link>
                                        </li>
                                        <li aria-label="Visit our Instagram page">
                                            <Link href="https://www.instagram.com/quickint_solutions?igsh=dWg2Yzh6bHl2Y2gx">
                                                <i className="fa-brands fa-instagram" />
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts copyright area end */}

        </div>
    )
}

export default FooterOne
