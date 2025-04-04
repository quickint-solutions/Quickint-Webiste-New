"use client";
import React, { useState } from "react";

export default function CtaTwo() {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        company: "",
        phone: "",
        email: "",
        service: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const validateForm = () => {
        const newErrors = {};
        const phoneRegex = /^[0-9]{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) newErrors.name = "First name is required.";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
        if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
        else if (!phoneRegex.test(formData.phone)) newErrors.phone = "Phone must be 10 digits.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format.";
        if (!formData.service) newErrors.service = "Please select a service.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(null);
        setError(null);

        if (!validateForm()) return;

        setLoading(true);
        try {
            const response = await fetch("/api/email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess("Your message has been sent successfully!");
                setFormData({
                    name: "",
                    lastName: "",
                    company: "",
                    phone: "",
                    email: "",
                    service: "",
                    message: "",
                });
                setErrors({});
            } else {
                setError(data.message || "Something went wrong!");
            }
        } catch (err) {
            setError("Failed to send the message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ width: "100%", fontFamily: "Arial, sans-serif" }}>
            <div style={{
                display: "flex",
                flexDirection: typeof window !== 'undefined' && window.innerWidth >= 1024 ? "row" : "column",
                margin: "0 auto",
                maxWidth: "1200px",
            }}>
                {/* Left Side Content */}
                <div style={{
                    width: typeof window !== 'undefined' && window.innerWidth >= 1024 ? "50%" : "100%",
                    backgroundColor: "#1a1a1a",
                    color: "white",
                    padding: typeof window !== 'undefined' && window.innerWidth >= 1024 ? "3rem" : "1.5rem",
                    borderRadius: "8px",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                }}>
                    <button style={{
                        padding: "0.5rem 1rem",
                        border: "none",
                        backgroundColor: "#2563eb",
                        color: "white",
                        fontSize: "1.2rem",
                        fontWeight: "600",
                        marginBottom: "1rem",
                        cursor: "pointer",
                        width: "30%",
                        borderRadius: "5px",
                        transition: "background-color 0.3s",
                    }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#4a90e2"}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#2563eb"}
                    >
                        CONTACT US
                    </button>
                    <h2 style={{
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        marginBottom: "1rem",
                        color: "white",
                    }}>
                        Partner with Us for <br /> Comprehensive IT
                    </h2>
                    <p style={{ marginBottom: "1.5rem", color: "white" }}>
                        We’re happy to answer any questions you may have and help you determine which of our services best fit your needs.
                    </p>
                    <h4 style={{ marginTop: "1.5rem", color: "white" }}>
                        Call us at: <span style={{ color: "#60a5fa" }}>+91 98258 66927</span>
                    </h4>

                    <h5 style={{ marginTop: "1.5rem", color: "white" }}>Your benefits:</h5>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "0.5rem",
                    }}>
                        {["Client-oriented", "Results-driven", "Independent", "Problem-solving", "Competent", "Transparent"].map((benefit, index) => (
                            <p style={{ color: "white" }} key={index}>✔ {benefit}</p>
                        ))}
                    </div>

                    <h5 style={{ marginTop: "1.5rem", color: "white" }}>What happens next?</h5>
                    {["We schedule a call at your convenience", "We do a discovery and consulting meeting", "We prepare a proposal"].map((step, index) => (
                        <p style={{ color: "white" }} key={index}>{index + 1}. {step}</p>
                    ))}
                </div>

                {/* Right Side Form */}
                <div style={{
                    width: typeof window !== 'undefined' && window.innerWidth >= 1024 ? "50%" : "100%",
                    backgroundColor: "white",
                    padding: typeof window !== 'undefined' && window.innerWidth >= 1024 ? "4rem" : "1.5rem",
                    borderRadius: "8px",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                }}>
                    <h3 style={{ textAlign: "center", fontSize: "1.5rem", marginBottom: "1.5rem" }}>
                        Schedule a Free Consultation
                    </h3>
                    <form onSubmit={handleSubmit}>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "1rem",
                            marginBottom: "1rem",
                        }}>
                            <div>
                                <label style={{ marginBottom: "0.25rem", fontSize: "1.2rem", color: "black" }}>First name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} />
                                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                            </div>
                            <div>
                                <label style={{ marginBottom: "0.25rem", fontSize: "1.2rem", color: "black" }}>Last name</label>
                                <input type="text" style={inputStyle} />
                                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                            </div>
                        </div>

                        <div>
                            <label style={{ marginBottom: "0.25rem", fontSize: "1.2rem" }}>Company / Organization</label>
                            <input type="text" style={inputStyle} />
                            {errors.company && <p style={{ color: "red" }}>{errors.company}</p>}
                        </div>
                        <div>
                            <label style={{ marginBottom: "0.25rem", fontSize: "1.2rem" }}>Company email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} />
                            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                        </div>
                        <div>
                            <label style={{ marginBottom: "0.25rem", fontSize: "1.2rem" }}>Phone</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} />
                            {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
                        </div>

                        <label style={{ marginBottom: "0.25rem", fontSize: "1.2rem" }}>How Can We Help You?</label>
                        <select style={inputStyle}>
                            <option>Select Option</option>
                            <option>Consulting</option>
                            <option>Support</option>
                            <option>Other</option>
                        </select>

                        <label style={{ marginBottom: "0.25rem", fontSize: "1.2rem" }}>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            style={{
                                ...inputStyle,
                                minHeight: "100px",
                            }}
                            placeholder="To better assist you, please describe how we can help..."
                        ></textarea>

                        <button type="submit" disabled={loading} style={{
                            width: "100%",
                            backgroundColor: "#2563eb",
                            color: "white",
                            padding: "0.625rem",
                            borderRadius: "5px",
                            border: "none",
                            cursor: "pointer",
                            transition: "background-color 0.3s",
                            fontWeight: "bold",
                        }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#4a90e2"}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#2563eb"}
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </button>

                        {success && <p style={{ color: "green", marginTop: "1rem" }}>{success}</p>}
                        {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "0.5rem",
    border: "1px solid #d1d5db",
    borderRadius: "5px",
    outline: "none",
    marginBottom: "1rem",
};
