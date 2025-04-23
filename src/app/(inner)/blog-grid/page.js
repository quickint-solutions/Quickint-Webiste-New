"use client";
import BackToTop from "@/components/common/BackToTop";
import React from "react";

import FooterOne from "@/components/footer/FooterOne";
import Posts from '@/data/Posts.json';
import BlogGridMain from './BlogGridMain';
import HeaderOne from "@/components/header/HeaderOne";
import CtaTwo from "@/components/cta/CtaTwo";

function page() {
    return (
        <>
            <HeaderOne />
            <>
                <div className="career-single-banner-area ptb--70 blog-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="career-page-single-banner blog-page">
                                    <h1 className="title">The Quickint Blog</h1>
                                    <p className="subtitle">Our official blog with news, technology advice, and business culture.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rts-blog-area position-relative" style={{ marginBottom: 100 }}>
                    <div className="container">
                        <div className="row g-5">
                            {Posts.map((blog, index) => {
                                const blogTitle =
                                    blog.title.split(' ').length > 5
                                        ? blog.title.split(' ').slice(0, 5).join(' ') + '...'
                                        : blog.title;

                                return (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="single-blog-area-start2 border-none">
                                            <BlogGridMain
                                                blogCategory={blog.category}
                                                Slug={blog.slug}
                                                blogImage={blog.image}
                                                authorImg={blog.authorImg}
                                                blogTitle={blogTitle}
                                                blogAuthor={blog.author}
                                                blogPublishedDate={blog.publishedDate}
                                            />
                                        </div>
                                    </div>
                                );
                            }).slice(0, 9)}
                        </div>
                        {/* <div className="row mt--50">
                            <div className="col-lg-12">
                                <div className="pagination-one">
                                    <ul className=" justify-content-center">
                                        <li>
                                            <button className="active">01</button>
                                        </li>
                                        <li>
                                            <button>02</button>
                                        </li>
                                        <li>
                                            <button>03</button>
                                        </li>
                                        <li>
                                            <button>04</button>
                                        </li>
                                        <li>
                                            <button className="next-page">
                                                <i className="fa-solid fa-chevrons-right" />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </>
            <CtaTwo />

            <BackToTop />
            <FooterOne />
        </>

    )
}

export default page