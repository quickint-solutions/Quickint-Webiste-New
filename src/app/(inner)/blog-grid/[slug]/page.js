"use client"
import { useState } from "react";
import { useParams } from "next/navigation";
import BackToTop from "@/components/common/BackToTop";
import Posts from '@/data/Posts.json';

import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";

export default function BlogDetails() {
  const { slug } = useParams(); // Get the slug from URL parameters
  const blogPost = Posts.find((post) => post.slug === slug);

  // Declare hooks unconditionally at the top
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    comment: "",
  });

  // If no blog post is found, display an error
  if (!blogPost) {
    return <div>Post not found Man!</div>;
  }

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Correct destructuring
    setFormData({
      ...formData,
      [name]: value, // Update the form field dynamically
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([{ ...formData }, ...comments]); // Add new comment to the top
    setFormData({ name: "", email: "", topic: "", comment: "" }); // Clear form
  };

  return (
    <div className="">
      <HeaderOne />
      <>
        <div className="career-single-banner-area ptb--70 blog-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="career-page-single-banner blog-page">
                  <h1 className="title">{blogPost.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rts-blog-list-area rts-section-gapTop">
          <div className="container">
            <div className="row g-5">
              {/* rts blo post area */}
              <div className="col-xl-8 col-md-12 col-sm-12 col-12">
                {/* single post */}
                <div className="blog-single-post-listing details mb--0">
                  <div className="thumbnail">
                    <img src={`${blogPost.bannerImg}`}
                      alt={blogPost.title} />
                  </div>
                  <div className="blog-listing-content">
                    <h3 className="title animated fadeIn">
                      {blogPost.title}
                    </h3>
                    <p className="disc para-1">
                      {blogPost.description2}
                    </p>
                    <p className="disc para-1">
                      {blogPost.description3}
                    </p>
                    <p className="disc para-1">
                      {blogPost.description4}
                    </p>
                    <p className="disc para-1">
                      {blogPost.description1}
                    </p>
                    <p className="disc para-1">
                      {blogPost.description6}
                    </p>
                    <p className="disc para-1">
                      {blogPost.description7}
                    </p>
                    <p className="disc para-1">
                      {blogPost.description8}
                    </p>
                    <p className="disc para-1">
                      {blogPost.description9}
                    </p>
                    <p className="disc para-1">
                      {blogPost.description10}
                    </p>
                    <p className="disc para-1">
                      {blogPost.description11}
                    </p>
                    <p className="disc para-1">
                      {blogPost.description12}
                    </p>
                  </div>
                </div>
                {/* single post End*/}
              </div>
              {/* rts-blog post end area */}
              {/*rts blog wizered area */}
              <div className="col-xl-4 col-md-12 col-sm-12 col-12  pd-control-bg--40">
                {/* single wizered start */}
                <div className="rts-single-wized search">
                  <div className="wized-header">
                    <h5 className="title">Search Here</h5>
                  </div>
                  <div className="wized-body">
                    <div className="rts-search-wrapper">
                      <input
                        className="Search"
                        type="text"
                        placeholder="Enter Keyword"
                      />
                      <button>
                        <i className="fal fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* single wizered End */}
                {/* single wizered start */}
                <div className="rts-single-wized Categories">
                  <div className="wized-header">
                    <h5 className="title">Categories</h5>
                  </div>
                  <div className="wized-body">
                    {/* single categoris */}
                    <ul className="single-categories">
                      <li>
                        <a href="#">
                          Business Solution <i className="far fa-long-arrow-right" />
                        </a>
                      </li>
                    </ul>
                    {/* single categoris End */}
                    {/* single categoris */}
                    <ul className="single-categories">
                      <li>
                        <a href="#">
                          Strategy Growth
                          <i className="far fa-long-arrow-right" />
                        </a>
                      </li>
                    </ul>
                    {/* single categoris End */}
                    {/* single categoris */}
                    <ul className="single-categories">
                      <li>
                        <a href="#">
                          Finance Solution
                          <i className="far fa-long-arrow-right" />
                        </a>
                      </li>
                    </ul>
                    {/* single categoris End */}
                    {/* single categoris */}
                    <ul className="single-categories">
                      <li>
                        <a href="#">
                          Investment Policy
                          <i className="far fa-long-arrow-right" />
                        </a>
                      </li>
                    </ul>
                    {/* single categoris End */}
                    {/* single categoris */}
                    <ul className="single-categories">
                      <li>
                        <a href="#">
                          Tax Managment
                          <i className="far fa-long-arrow-right" />
                        </a>
                      </li>
                    </ul>
                    {/* single categoris End */}
                  </div>
                </div>
                {/* single wizered End */}
                {/* single wizered start */}
                <div className="rts-single-wized Recent-post">
                  <div className="wized-header">
                    <h5 className="title">Recent Posts</h5>
                  </div>
                  <div className="wized-body">
                    {/* recent-post */}
                    <div className="recent-post-single">
                      <div className="thumbnail">
                        <a href="#">
                          <img src="/assets/images/blog/sm/01.jpg" alt="Blog_post" />
                        </a>
                      </div>
                      <div className="content-area">
                        <div className="user">
                          <i className="fal fa-clock" />
                          <span>15 Jan, 2023</span>
                        </div>
                        <a className="post-title" href="#">
                          <h6 className="title">
                            We would love to share a similar experience
                          </h6>
                        </a>
                      </div>
                    </div>
                    {/* recent-post End */}
                    {/* recent-post */}
                    <div className="recent-post-single">
                      <div className="thumbnail">
                        <a href="#">
                          <img src="/assets/images/blog/sm/02.jpg" alt="Blog_post" />
                        </a>
                      </div>
                      <div className="content-area">
                        <div className="user">
                          <i className="fal fa-clock" />
                          <span>15 Jan, 2023</span>
                        </div>
                        <a className="post-title" href="#">
                          <h6 className="title">
                            We would love to share a similar experience
                          </h6>
                        </a>
                      </div>
                    </div>
                    {/* recent-post End */}
                    {/* recent-post */}
                    <div className="recent-post-single">
                      <div className="thumbnail">
                        <a href="#">
                          <img src="/assets/images/blog/sm/03.jpg" alt="Blog_post" />
                        </a>
                      </div>
                      <div className="content-area">
                        <div className="user">
                          <i className="fal fa-clock" />
                          <span>15 Jan, 2023</span>
                        </div>
                        <a className="post-title" href="#">
                          <h6 className="title">
                            We would love to share a similar experience
                          </h6>
                        </a>
                      </div>
                    </div>
                    {/* recent-post End */}
                  </div>
                </div>
                {/* single wizered End */}
                {/* single wizered start */}
                <div className="rts-single-wized Recent-post">
                  <div className="wized-header">
                    <h5 className="title">Gallery Posts</h5>
                  </div>
                  <div className="wized-body">
                    <div className="gallery-inner">
                      <div className="row-1 single-row">
                        <a href="#">
                          <img src="/assets/images/blog/sm/04.jpg" alt="Gallery" />
                        </a>
                        <a href="#">
                          <img src="/assets/images/blog/sm/05.jpg" alt="Gallery" />
                        </a>
                        <a href="#">
                          <img src="/assets/images/blog/sm/06.jpg" alt="Gallery" />
                        </a>
                      </div>
                      <div className="row-2 single-row">
                        <a href="#">
                          <img src="/assets/images/blog/sm/07.jpg" alt="Gallery" />
                        </a>
                        <a href="#">
                          <img src="/assets/images/blog/sm/08.jpg" alt="Gallery" />
                        </a>
                        <a href="#">
                          <img src="/assets/images/blog/sm/09.jpg" alt="Gallery" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </>




      <FooterOne />


      <BackToTop />
    </div>
  );
}
