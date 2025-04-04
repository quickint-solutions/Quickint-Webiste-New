
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";

import FeatureTwo from "@/components/feature/FeatureTwo";
import TestimonialsFive from "@/components/testimonials/TestimonialsFive";
import MoreSolutions from "@/components/service-component/MoreSolution";
import HeaderOne from "@/components/header/HeaderOne";

export default function Home() {
    return (

        <div className='#'>
            <HeaderOne />
            <div>
                <div className="container-large">
                    {/* service area start */}
                    <div className="service-single-area-banner it-strategies bg_image"></div>
                    {/* service area end */}
                </div>

            </div>
            <div>

                <div className="service-area-details-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner-content">
                                    <div className="top">
                                        <h1 className="title">Web Development</h1>
                                        <p className="disc">
                                            Web Development is a strategic approach to harnessing technology for business growth.
                                        </p>
                                    </div>
                                    <div className="mid-content">
                                        <p className="disc">
                                            At QuickInt Solutions, we specialize in delivering high-quality web development services that cater to businesses of all sizes. Our team of experts is dedicated to designing and developing user-friendly, responsive, and scalable websites that enhance brand visibility and customer engagement. We ensure that our solutions are tailored to meet the specific needs of our clients, leveraging the latest technologies to create digital experiences that stand out.
                                        </p>
                                        <p className="disc">
                                            Our web development process focuses on building robust architectures that ensure speed, security, and reliability. We integrate dynamic functionalities, seamless navigation, and intuitive user interfaces to provide an engaging user experience. Whether you need a corporate website, an e-commerce platform, or a custom web application, we have the expertise to bring your vision to life.
                                        </p>
                                        <p className="disc">
                                            Beyond development, we also provide ongoing support and maintenance to ensure the long-term performance of our web solutions. We continuously upgrade and optimize websites to align with evolving trends and business requirements. Our commitment to innovation and excellence makes us the preferred partner for businesses looking to establish a strong online presence.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service-image-mid-iamge-jarallax-area">
                    <div className="container-large">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="thumbnail-area-large-service-detaile-mid jarallax jara-mask-1">
                                    <img
                                        className="jarallax-img"
                                        src="assets/images/service/07.webp"
                                        alt="service"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="thumbnail-area-large-service-detaile-mid jarallax jara-mask-1">
                                    <img
                                        className="jarallax-img"
                                        src="assets/images/service/08.webp"
                                        alt="service"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service-area-details-wrapper border-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner-content">
                                    <div className="mid-content">
                                        <p className="disc">
                                            We prioritize modern design trends and high-performance coding standards to ensure optimal results. Our developers utilize frameworks and technologies such as React, Angular, and Vue.js for front-end development and Node.js, Python, and PHP for back-end systems. This ensures that every website we create is fast, secure, and adaptable to future advancements in web technology.
                                        </p>
                                        <p className="disc">
                                            Our approach includes rigorous testing and quality assurance to eliminate bugs and performance issues before deployment. By conducting usability tests, security checks, and load testing, we guarantee that our clients receive top-tier web solutions that meet industry standards. This dedication to quality ensures that businesses can confidently launch and maintain their online platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <MoreSolutions />


            <FeatureTwo />
            <TestimonialsFive />
            <>
                {/* rts call to action area start */}
                <div className="rts-call-to-action-area-about rts-section-gapTop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="title">Book a Free Consultation</h2>
                                <p className="disc">
                                    Schedule a no-obligation consultation to discuss your unique needs
                                    and how Luminous can elevate your business technology.
                                </p>
                                <a
                                    target="_blank"
                                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ39f071tVvYbKUAnVaFk3HQG4uAEoL-CjHGygO7nfiRCA6lwLnehAPwYCHMdH5s5S7f8-WzjLse"
                                    className="rts-btn btn-primary wow fadeInUp"
                                    data-wow-delay=".5s"
                                >
                                    View Solutions
                                    <img
                                        className="injectable"
                                        src="assets/images/service/icons/13.svg"
                                        alt="arrow"
                                    />
                                </a>
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
