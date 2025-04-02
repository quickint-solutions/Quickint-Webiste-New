
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
                    <div className="service-single-area-banner cyber-security bg_image jarallax"></div>
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
                                        <h1 className="title">Cyber Security Service</h1>
                                        <p className="disc">
                                            Cyber Security Service involves training models using data to enable machines to make decisions and predictions autonomously.
                                        </p>
                                    </div>
                                    <div className="mid-content">
                                        <p className="disc">
                                            In today’s digital age, cybersecurity is a top priority for businesses looking to safeguard their digital assets. At QuickInt Solutions, we offer comprehensive cybersecurity services that protect organizations from evolving cyber threats. Our experts implement advanced security protocols, threat detection mechanisms, and encryption technologies to ensure data integrity and system security. With our proactive approach, we help businesses stay resilient against cyberattacks.
                                        </p>
                                        <p className="disc">
                                            We provide a range of cybersecurity solutions, including network security, cloud security, and endpoint protection. Our team continuously monitors potential security risks, identifying vulnerabilities before they can be exploited. We also conduct compliance assessments and security audits to ensure that businesses adhere to industry regulations and best practices. Our goal is to provide a secure digital environment where businesses can operate with confidence.
                                        </p>
                                        <p className="disc">
                                            Our cybersecurity strategy includes penetration testing, firewall implementation, and real-time threat monitoring. We simulate attack scenarios to evaluate system vulnerabilities and strengthen defense mechanisms. By adopting a proactive security stance, we help organizations minimize risk exposure and ensure data protection at all levels.
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
                                            We also specialize in compliance with data protection regulations such as GDPR, HIPAA, and ISO 27001. Our experts guide businesses through necessary security measures, ensuring that data privacy laws and compliance requirements are met without operational disruptions.
                                        </p>
                                        <p className="disc">
                                            Beyond protection, we also focus on incident response and disaster recovery. In the event of a security breach, our experts act swiftly to mitigate risks and restore normal operations. Our comprehensive approach ensures that businesses remain secure, compliant, and prepared for any cybersecurity challenges that may arise in the future.
                                        </p>
                                        <p className="disc">
                                            We provide ongoing security training for employees to strengthen internal cybersecurity awareness. By educating teams on phishing attacks, password security, and data protection practices, we help businesses create a robust security culture that reduces risks from human error.
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
