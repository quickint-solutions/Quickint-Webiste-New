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
        <div className="rts-blog-list-area col-lg-12 rts-section-gapTop">
          <div className="container">
            <div className="row g-5">
              {/* rts blo post area */}
              <div className="col-xl-12 col-md-12 col-sm-12 col-12">
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
            </div>
          </div>
        </div>
      </>




      <FooterOne />


      <BackToTop />
    </div>
  );
}
