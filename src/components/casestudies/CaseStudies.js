"use client"
import React from 'react'
import { ReactSVG } from 'react-svg';
function CaseStudies() {
  return (
    <div>
      <div className="case-studies-area rts-section-gap position-relative">
        <div className="shape-left-top">
          <img
            className="wow move-right"
            src="assets/images/video/shape/03.png"
            alt="shape"
          />
        </div>
        <div className="shape-bottom">
          <img
            loading="lazy"
            rel="preload"
            src="assets/images/video/shape/02.png"
            alt=""
            className="wow move-left"
            data-wow-offset={120}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center-title-bg-white">
                <h2 className="title">Case studies</h2>
                <p>Here are our featured projects that empower businesses.</p>
              </div>
            </div>
          </div>
          <div className="row mt--10 g-80">
            <div
              className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-aos="fade-up" data-aos-delay="300"
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
              className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-aos="fade-up" data-aos-delay="600"
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
              className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-aos="fade-up" data-aos-delay="300"
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
              className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-aos="fade-up" data-aos-delay="600"
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
          </div>
          <div className="row mt--60">
            <div className="col-lg-12">
              <a
                href="case-studies"
                className="rts-btn btn-border more-project-btn"
              >
                More projects
                <img
                  loading="lazy"
                  rel="preload"
                  src="assets/images/service/icons/13.svg"
                  alt="arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CaseStudies