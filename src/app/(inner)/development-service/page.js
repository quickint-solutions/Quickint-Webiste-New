
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
                    <div className="service-single-area-banner development-service bg_image jarallax"></div>
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
                                        <h1 className="title">Mobile Development</h1>
                                        <p className="disc">
                                            Development Service involves training models using data to enable machines to make decisions and predictions autonomously.
                                        </p>
                                    </div>
                                    <div className="mid-content">
                                        <p className="disc">
                                            At QuickInt Solutions, we design and develop innovative mobile applications that provide seamless user experiences across various devices. Our team is proficient in both native and cross-platform development, ensuring that our clients receive high-performance applications that enhance customer engagement and business operations. We prioritize intuitive design, fast performance, and smooth functionality to deliver mobile apps that stand out in the competitive digital market.
                                        </p>
                                        <p className="disc">
                                            We understand that user experience is key to mobile application success. Our experts create intuitive interfaces that offer easy navigation and visually appealing designs, ensuring an engaging and user-friendly experience. From conceptualization to deployment, we follow a structured approach that ensures every mobile app meets the highest quality standards while being aligned with business objectives.
                                        </p>
                                        <p className="disc">
                                            We employ industry-leading frameworks such as Flutter, React Native, and Swift to build scalable and high-performing applications. Whether you need an iOS app, an Android app, or a cross-platform solution, our development team ensures that your app runs seamlessly across all devices, providing a consistent user experience.
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
                                            Security and performance optimization are central to our mobile development process. We implement secure authentication, encrypted data storage, and real-time performance monitoring to prevent vulnerabilities and provide a smooth user experience. By leveraging the latest mobile technologies, we help businesses stay competitive and innovative in the digital market.
                                        </p>
                                        <p className="disc">
                                            Our mobile development services also include ongoing support and updates to keep applications running smoothly and securely. We provide timely upgrades, security enhancements, and new feature integrations to ensure that our clients stay ahead in their industry. With our expertise, businesses can leverage mobile technology to drive customer engagement and operational efficiency.
                                        </p>
                                        <p className="disc">
                                            We believe in long-term partnerships, assisting our clients with scaling their mobile applications as their business grows. Whether its integrating AI-powered features, implementing analytics tracking, or expanding functionalities, we ensure that your mobile application evolves with your business needs.
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
