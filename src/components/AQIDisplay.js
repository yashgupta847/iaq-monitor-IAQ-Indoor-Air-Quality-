// // src/components/AQIDisplay.js
// import React from 'react';

const AQIDisplay = ({ aqi, status }) => {
  let color = "green";
  if (status === "Moderate") color = "orange";
  else if (status === "Poor") color = "red";

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: `2px solid ${color}`,
        borderRadius: "10px",
        display: "inline-block",
        minWidth: "200px",
      }}
    >
      <h2>AQI: {aqi}</h2>
      <p>
        Status: <span style={{ color, fontWeight: "bold" }}>{status}</span>
      </p>
    </div>
  );
};

export default AQIDisplay;
