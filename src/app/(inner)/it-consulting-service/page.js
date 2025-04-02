
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";

import FeatureTwo from "@/components/feature/FeatureTwo";
import TestimonialsFive from "@/components/testimonials/TestimonialsFive";
import MoreSolutions from "@/components/service-component/MoreSolution";
import Head from "next/head";
import HeaderOne from "@/components/header/HeaderOne";

export default function Home() {
    return (
        <div className='#'>
            <HeaderOne />

            <div>
                <div className="container-large">
                    {/* service area start */}
                    <div className="service-single-area-banner it-service bg_image"></div>
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
                                        <h1 className="title">IT Consulting & Advisory</h1>
                                        <p className="disc">
                                            IT consulting helps businesses optimize technology strategies, improve efficiency, solve problems, and achieve digital transformation.
                                        </p>
                                    </div>
                                    <div className="mid-content">
                                        <p className="disc">
                                            At QuickInt Solutions, we offer IT consulting and advisory services designed to help businesses optimize their technology strategies. Our experts work closely with clients to understand their goals and provide tailored recommendations that drive operational efficiency and digital transformation. Whether businesses require guidance on IT infrastructure, cloud adoption, or business process automation, we have the expertise to assist.
                                        </p>
                                        <p className="disc">
                                            We conduct in-depth technology assessments to identify areas for improvement and develop strategic roadmaps that align with business objectives. Our consultants provide insights on the latest industry trends, helping businesses adopt cutting-edge technologies that enhance productivity and competitiveness. By leveraging our expertise, businesses can make informed technology decisions that drive growth and sustainability.
                                        </p>
                                        <p className="disc">
                                            Our IT consulting services also include risk management and cybersecurity advisory. We help organizations identify potential threats and implement robust security measures to protect their digital assets. With our comprehensive consulting approach, businesses gain the confidence to navigate complex IT challenges and embrace digital transformation successfully.
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
                                            We work with businesses to optimize cloud infrastructure, ensuring a seamless transition to cloud-based operations. Our expertise in hybrid and multi-cloud strategies allows organizations to maximize scalability, performance, and cost efficiency while maintaining strong security protocols.
                                        </p>
                                        <p className="disc">
                                            Our team provides strategic planning for businesses undergoing digital transformation. From software modernization to AI-driven automation, we help clients leverage the latest technologies to enhance workflows, improve customer experiences, and drive business growth.
                                        </p>
                                        <p className="disc">
                                            We believe in a hands-on approach, working closely with businesses to implement IT strategies tailored to their unique needs. By offering scalable solutions and ongoing advisory services, we ensure that businesses remain agile and competitive in an ever-evolving digital landscape.
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
                                    href="#"
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
