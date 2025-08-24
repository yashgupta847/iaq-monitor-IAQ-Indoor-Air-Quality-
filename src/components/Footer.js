// src/components/Footer.js
import React from "react";

const Footer = ({ currentAQI }) => {
  const lastUpdated = new Date().toLocaleTimeString();

  return (
    <footer
      style={{
        fontFamily: "'Google Sans Text', sans-serif" ,
        background: "linear-gradient(90deg, #0f0f0f, #1a1a1a)",
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
        marginTop: "40px",
        borderTop: "2px solid #333",
      }}
    >
      <div style={{ marginBottom: "10px" }}>
        <strong>Smart Indoor Air Quality Monitor</strong>
      </div>

      {currentAQI !== undefined && (
        <div style={{ marginBottom: "10px" }}>
          Current AQI: <span style={{ color: currentAQI < 50 ? "green" : currentAQI < 100 ? "orange" : "red" }}>{currentAQI}</span> | Last Updated: {lastUpdated}
        </div>
      )}

      <div style={{ marginBottom: "10px" }}>
        <a href="/" style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}>Home</a>
        <a href="/dashboard" style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}>Dashboard</a>
        <a href="/feedback" style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}>Feedback</a>
        <a href="https://aqicn.org" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}>AQI Info</a>
      </div>

      <div style={{ fontSize: "12px", color: "#aaa" }}>
        © 2025 Yash Gupta. All rights reserved. | Data simulated for practice purposes.
      </div>
    </footer>
  );
};

export default Footer;
