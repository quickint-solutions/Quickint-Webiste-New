"use client"; // ✅ Ensures this runs only on the client-side

import { useEffect } from "react";

const ClutchWidget = () => {
    useEffect(() => {
        // Prevent multiple script insertions
        if (!document.querySelector("script[src='https://widget.clutch.co/static/js/widget.js']")) {
            const script = document.createElement("script");
            script.src = "https://widget.clutch.co/static/js/widget.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div className="text-center mt-4 mb-4" style={{ backgroundColor: "#ffffff", padding: "1rem", borderRadius: "8px" }}>
            <div
                className="clutch-widget"
                data-url="https://widget.clutch.co"
                data-widget-type="2"
                data-height="45"
                data-nofollow="true"
                data-expandifr="true"
                data-scale="100"
                data-clutchcompany-id="2501639"
            ></div>
        </div>
    );
};

export default ClutchWidget;
