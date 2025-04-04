"use client";
import React, { useState } from "react";
import axios from "axios";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import { ReactSVG } from "react-svg";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [statusType, setStatusType] = useState("")
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            // Send data to CRM API
            await axios.post("/api/crm", {
                d: {
                    docstatus: 0,
                    idx: 1,
                    opportunity_from: "Lead",
                    status: "Open",
                    opportunity_type: "Sales",
                    source: "website",
                    sales_stage: "Prospecting",
                    company: "Quickint Solutions",
                    language: "en",
                    title: formData.name,
                    contact_email: formData.email,
                    contact_display: formData.name,
                    customer_name: formData.name,
                    notes: [
                        { note: "FROM WEBSITE" },
                        { note: `Name: ${formData.name}` },
                        { note: `Phone: ${formData.phone}` },
                        { note: `Email: ${formData.email}` },
                        { note: `Message: ${formData.message}` },
                    ],
                },
            });

            // Send email notification
            const response = await fetch("/api/email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.status === 201) {
                setSuccess(true);
                setStatusMessage("Message sent successfully!");
                setStatusType("success");

                // Reset form after successful submission
                setFormData({ name: "", phone: "", email: "", message: "" });

                setShowThankYou(true);
                setTimeout(() => setShowThankYou(false), 5000);
            } else {
                setError("Failed to send message. Please try again later.");
                setStatusMessage("Failed to send message.");
                setStatusType("error");
            }
        } catch (error) {
            setError("An error occurred. Please try again later.");
            setStatusMessage("An error occurred.");
            setStatusType("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-page">
            <HeaderOne />
            <div className="contact-page-banner jarallax bg_image"></div>

            <div className="contact-area-form-wrapper rts-section-gapTop">
                <div className="container-contact">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="title">Get in Touch</h2>
                            <p>We’d love to hear from you. Please fill out this form.</p>
                        </div>
                        <div className="col-lg-12">
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="single">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="single">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="you@company.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="single">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        placeholder="+91 1234567890"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="single">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Leave us a message..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="defaultCheck1"
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        You agree to our privacy policy.
                                    </label>
                                </div>
                                <button type="submit" className="rts-btn btn-primary" disabled={loading}>
                                    {loading ? "Sending..." : "Send message"}
                                    <ReactSVG src="assets/images/service/icons/13.svg" alt="arrow" />
                                </button>
                                {statusMessage && (
                                    <p className={`status-message ${statusType}`}>{statusMessage}</p>
                                )}
                            </form>

                            {showThankYou && (
                                <div className="thank-you-message">
                                    <p>Thank you for contacting us! We will get back to you soon.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="rts-google-map-area rts-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="google-map-wrapper">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4930.93543287035!2d72.62208607628865!3d22.983620217778782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87091e60d2cf%3A0xb7f883dd2c61cb5a!2sQuickint%20Solutions!5e1!3m2!1sen!2sin!4v1743760453252!5m2!1sen!2sin"
                                    width={600}
                                    height={500}
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />
            <BackToTop />
        </div>
    );
}
