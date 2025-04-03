"use client";
import React, { useState } from "react";
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
    const [statusType, setStatusType] = useState(""); // "success" or "error"

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage("");

        if (!formData.name || !formData.email || !formData.message) {
            setStatusMessage("Please fill in all required fields.");
            setStatusType("error");
            setLoading(false);
            return;
        }

        try {
            // Construct CRM request payload
            const crmPayload = {
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
            };

            // Make API calls concurrently
            const [crmResponse, emailResponse] = await Promise.all([
                fetch("/api/crm", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(crmPayload),
                }),
                fetch("/api/email", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                }),
            ]);

            // Check API responses
            if (crmResponse.ok && emailResponse.ok) {
                setStatusMessage("Message sent successfully!");
                setStatusType("success");
                setFormData({ name: "", phone: "", email: "", message: "" });
            } else {
                setStatusMessage("Some operations failed. Please try again.");
                setStatusType("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatusMessage("An error occurred. Please try again.");
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
                                        placeholder="+1 (555) 000-0000"
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
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />
            <BackToTop />
        </div>
    );
}
