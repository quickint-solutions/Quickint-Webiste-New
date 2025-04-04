
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
                    <div className="service-single-area-banner ai-learning-service bg_image jarallax"></div>
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
                                        <h1 className="title">Cloud Services</h1>
                                        <p className="disc">
                                            Transform your business with scalable, secure, and efficient cloud solutions designed to enhance flexibility and performance.
                                        </p>
                                    </div>
                                    <div className="mid-content">
                                        <p className="disc">
                                            At QuickInt Solutions, we provide end-to-end cloud services, including Cloud Migration, Infrastructure Management, Security, and Optimization. Our solutions enable businesses to reduce costs, improve efficiency, and scale effortlessly.
                                        </p>
                                        <p className="disc">
                                            Whether youre looking to migrate to the cloud, optimize existing infrastructure, or enhance security, our team of certified cloud experts ensures a seamless transition with minimal downtime.
                                        </p>
                                        <p className="disc">
                                            We partner with leading cloud providers such as AWS, Microsoft Azure, and Google Cloud, offering customized solutions that align with your business goals. Stay ahead of the competition with our innovative cloud strategies.
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
                                            We are your strategic partners in digital transformation. With over a decade of experience and a team of certified experts, we deliver tailored IT solutions that drive growth, enhance efficiency, and secure your digital assets.
                                        </p>
                                        <p className="disc">
                                            QuickInt Solutions works with businesses of all sizes, from startups to large enterprises. We customize our services to fit each clients unique needs and budget. Our expertise spans a wide range of IT solutions, ensuring seamless integration and maximum business impact.
                                        </p>
                                        <p className="disc">
                                            We invest heavily in ongoing training, research, and partnerships with leading technology providers. Our approach fosters innovation and efficiency, helping your business stay ahead of technological advancements.
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
