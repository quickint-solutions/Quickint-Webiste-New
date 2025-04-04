"use client"
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";

import { ReactSVG } from 'react-svg';
export default function Home() {
    return (
        <div className='#'>
            <HeaderOne />


            <>
                <div className="container-large">
                    {/* service area start */}
                    <div
                        className="service-single-area-banner bg_image jarallax"
                        data-jarallax="1.5"
                    ></div>
                    {/* service area end */}
                </div>
                <div className="service-area-details-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner-content">
                                    <div className="top">
                                        <h1 className="title">Terms Of Condition</h1>
                                        <p className="disc">
                                            Suggested text: Our website
                                        </p>
                                    </div>
                                    <div className="mid-content">
                                        <p className="disc">
                                            Suggested text: When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection. An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.
                                        </p>
                                        <p className="disc">
                                            Suggested text: If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
                                        </p>
                                        <p className="disc">
                                            Suggested text: If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.

                                            If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser. When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks.

                                            If you log out of your account, the login cookies will be removed.

                                            If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
                                        </p>
                                    </div>
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
                                    <div className="mid-content  pt--0">
                                        <p className="disc">
                                            Suggested text: Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.

                                            These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
                                        </p>
                                        <p className="disc">
                                            Suggested text: If you request a password reset, your IP address will be included in the reset email.
                                        </p>
                                        <p className="disc">
                                            Suggested text: If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.

                                            For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* rts call to action area start */}
                <div className="rts-call-to-action-area-about rts-section-gapTop">
                    <div className="container pb--80">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="title">Book a Free Consultation</h2>
                                <p className="disc">
                                    Schedule a no-obligation consultation to discuss your unique needs
                                    and how Quickint Solutions can elevate your business technology.
                                </p>
                                <a
                                    target="_blank"
                                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ39f071tVvYbKUAnVaFk3HQG4uAEoL-CjHGygO7nfiRCA6lwLnehAPwYCHMdH5s5S7f8-WzjLse"
                                    className="rts-btn btn-primary wow fadeInUp"
                                    data-wow-delay=".5s"
                                >
                                    View Solutions
                                    <ReactSVG
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
