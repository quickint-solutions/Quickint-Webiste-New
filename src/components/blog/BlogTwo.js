"use client"
import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import { ReactSVG } from 'react-svg';
import "aos/dist/aos.css";
import Link from 'next/link';
function BlogTwo() {
    useEffect(() => {
        AOS.init({
            disableMutationObserver: true,
            once: true,
        });
    }, []);
    return (
        <div>
            <div className="rts-blog-area rts-section-gap position-relative">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12 mb--25">
                            <div className="blog-title-two-center text-center">
                                <h2 className="title">From the Blog</h2>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up"
                        >
                            <div className="single-blog-area-start border-none ">
                                <Link href="/blog-grid/protecting-your-business" className="thumbnail">
                                    <img src="/assets/images/blog/saas-1024x683.jpg" alt="blog_iamge" />
                                </Link>
                                <div className="inner-content-area">
                                    <div className="top-area">
                                        <Link href="/blog-grid/protecting-your-business">
                                            <h3 className="title animated fadeIn">
                                                Revolutionizing Software Development with SAAS
                                            </h3>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="300"
                        >
                            <div className="single-blog-area-start border-none">
                                <Link href="/blog-grid/protecting-your-business" className="thumbnail">
                                    <img src="/assets/images/blog/nfts-1024x684.jpg" alt="blog_iamge" />
                                </Link>
                                <div className="inner-content-area">
                                    <div className="top-area">
                                        <Link href="/blog-grid/protecting-your-business">
                                            <h3 className="title animated fadeIn">
                                                Understanding NFTs: How Non-Fungible Tokens Work..
                                            </h3>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="500"
                        >
                            <div className="single-blog-area-start border-none">
                                <Link href="/blog-grid/protecting-your-business" className="thumbnail">
                                    <img src="/assets/images/blog/react-1024x683.jpg" alt="blog_iamge" />
                                </Link>
                                <div className="inner-content-area">
                                    <div className="top-area">
                                        <Link href="/blog-grid/protecting-your-business">
                                            <h3 className="title animated fadeIn">
                                                The Ultimate Guide to React Native Mobile App...
                                            </h3>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Link href="/blog-grid" className="rts-btn btn-border">
                                View More Blog
                                <ReactSVG
                                    src="assets/images/service/icons/13.svg"
                                    alt="arrow"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogTwo