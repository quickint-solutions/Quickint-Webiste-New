"use client";
import React, { useState } from "react";

export default function CtaTwo() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone is required";
        } else if (!/^\d{10,15}$/.test(formData.phone)) {
            newErrors.phone = "Phone must be 10-15 digits";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        setSuccess(null);
        setError(null);

        try {
            const response = await fetch("/api/email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess("Your message has been sent successfully!");
                setFormData({ name: "", phone: "", email: "", message: "" });
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
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    margin: "0 auto",
                    maxWidth: "1200px",
                    width: "100%",
                }}
            >
                {/* Left Side */}
                <div
                    style={{
                        flex: "1 1 50%",
                        backgroundColor: "#1a1a1a",
                        color: "white",
                        padding: "3rem",
                        borderRadius: "8px",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                        minWidth: "300px",
                    }}
                >
                    <button
                        style={buttonStyle}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor = "#4a90e2")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor = "#2563eb")
                        }
                    >
                        CONTACT US
                    </button>
                    <h2 style={headingStyle}>
                        Partner with Us for <br /> Comprehensive IT
                    </h2>
                    <p style={{ marginBottom: "1.5rem", color: "white" }}>
                        We’re happy to answer any questions you may have and help you determine which of our services best fit your needs.
                    </p>
                    <h4 style={{ marginTop: "1.5rem", color: "white" }}>
                        Call us at:{" "}
                        <a href="tel:+919825866927" style={{ color: "#60a5fa", textDecoration: "none" }}>
                            +91 98258 66927
                        </a>
                    </h4>

                    <h5 style={{ marginTop: "1.5rem", color: "white" }}>Your benefits:</h5>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.5rem" }}>
                        {["Client-oriented", "Results-driven", "Independent", "Problem-solving", "Competent", "Transparent"].map((benefit, index) => (
                            <p style={{ color: "white" }} key={index}>✔ {benefit}</p>
                        ))}
                    </div>

                    <h5 style={{ marginTop: "1.5rem", color: "white" }}>What happens next?</h5>
                    {["We schedule a call at your convenience", "We do a discovery and consulting meeting", "We prepare a proposal"].map((step, index) => (
                        <p style={{ color: "white" }} key={index}>{index + 1}. {step}</p>
                    ))}
                </div>

                {/* Right Side */}
                <div
                    style={{
                        flex: "1 1 50%",
                        backgroundColor: "white",
                        padding: "3rem",
                        borderRadius: "8px",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                        minWidth: "300px",
                    }}
                >
                    <h3 style={{ textAlign: "center", fontSize: "1.5rem", marginBottom: "1.5rem" }}>
                        Schedule a Free Consultation
                    </h3>
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                            <div>
                                <label style={labelStyle}>First name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} />
                                {errors.name && <span style={errorStyle}>{errors.name}</span>}
                            </div>
                            <div>
                                <label style={labelStyle}>Last name</label>
                                <input type="text" style={inputStyle} />
                            </div>
                        </div>

                        <div>
                            <label style={labelStyle}>Company / Organization</label>
                            <input type="text" style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>Company email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} />
                            {errors.email && <span style={errorStyle}>{errors.email}</span>}
                        </div>
                        <div>
                            <label style={labelStyle}>Phone</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} />
                            {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
                        </div>

                        <label style={labelStyle}>How Can We Help You?</label>
                        <select style={inputStyle}>
                            <option>Select Option</option>
                            <option>Consulting</option>
                            <option>Support</option>
                            <option>Other</option>
                        </select>

                        <label style={labelStyle}>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            style={{ ...inputStyle, minHeight: "100px" }}
                            placeholder="To better assist you, please describe how we can help..."
                        ></textarea>
                        {errors.message && <span style={errorStyle}>{errors.message}</span>}

                        <button
                            type="submit"
                            disabled={loading}
                            style={submitBtnStyle}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#4a90e2")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
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

// Shared Styles
const inputStyle = {
    width: "100%",
    padding: "0.5rem",
    border: "1px solid #d1d5db",
    borderRadius: "5px",
    outline: "none",
    marginBottom: "0.5rem",
};

const labelStyle = {
    marginBottom: "0.25rem",
    fontSize: "1.5rem",
    color: "black",
};

const errorStyle = {
    color: "red",
    fontSize: "1.5rem",
    marginBottom: "1rem",
    display: "block",
};

const buttonStyle = {
    padding: "0.5rem 1rem",
    border: "none",
    backgroundColor: "#2563eb",
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "1rem",
    cursor: "pointer",
    width: "30%",
    borderRadius: "5px",
    transition: "background-color 0.3s",
};

const submitBtnStyle = {
    width: "100%",
    backgroundColor: "#2563eb",
    color: "white",
    padding: "0.625rem",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
    fontWeight: "bold",
};

const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "white",
};
