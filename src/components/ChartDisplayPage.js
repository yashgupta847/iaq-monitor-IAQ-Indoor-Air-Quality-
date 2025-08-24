import AQIDisplay from "./AQIDisplay";
import ChartDisplay from "./ChartDisplay";
import Alerts from "./Alerts";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

const ChartDisplayPage = () => {
  const [aqiData, setAqiData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [currentAQI, setCurrentAQI] = useState(0);
  const [status, setStatus] = useState("Good");
  const generateData = () => {
    const CO2 = Math.floor(Math.random() * (2000 - 400 + 1)) + 400;
    const PM25 = Math.floor(Math.random() * 301);
    const AQI = Math.round((CO2 / 2000 + PM25 / 300) * 100);
    let stat = "";
    if (AQI < 50) stat = "Good";
    else if (AQI < 100) stat = "Moderate";
    else stat = "Poor";

    return { AQI, stat };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const data = generateData();
      setCurrentAQI(data.AQI);
      setStatus(data.stat);

      setAqiData((prev) => {
        if (prev.length >= 20) prev.shift();
        return [...prev, data.AQI];
      });

      setLabels((prev) => {
        if (prev.length >= 20) prev.shift();
        return [...prev, new Date().toLocaleTimeString()];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Header></Header>
      <div
        style={{
          minHeight: "100vh",
          padding: "0px",
          background: "linear-gradient(135deg, #ffffffff, #bef0f7ff)",
          fontFamily: "'Google Sans Text', sans-serif",
        }}
      >

        <div style={{ textAlign: "center", padding: "20px" }}>
          <h1>Dashboard</h1>
          <p
            style={{
              fontFamily: "'Google Sans Text', sans-serif",
              lineHeight: "30px",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
          >
            Monitor your indoor air quality in real time and take control of
            your environment. Stay informed with live AQI readings from your
            smart sensor.
          </p>
          <AQIDisplay aqi={currentAQI} status={status} />

          <ChartDisplay aqiData={aqiData} labels={labels} />

          <Alerts status={status} />

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>

        <Footer></Footer>
      </div>
    </>
  );
};

export default ChartDisplayPage;
