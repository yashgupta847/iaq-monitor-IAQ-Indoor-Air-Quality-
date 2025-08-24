// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          padding: "0px",
          background: "linear-gradient(135deg, #ffffffff, #bef0f7ff)",
          fontFamily: "'Google Sans Text', sans-serif",
        }}
      >
        <Header></Header>

        <div style={{ marginTop: "30px" }}></div>
        <div style={{ padding: "20px", textAlign: "center" }}>
          <div
            style={{
              fontFamily: "'Google Sans Text', sans-serif",
              lineHeight: "30px",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
          >
            <h1>Smart Indoor Air Quality Monitor</h1>
            <p style={{ marginTop: "15px", fontSize: "18px" }}>
              This platform helps you monitor indoor air quality in real-time.
              It simulates IoT sensors for CO2, PM2.5, Temperature, and
              Humidity, and provides alerts to keep your environment safe and
              healthy.
            </p>
          </div>
          <img
            src="https://www.hibouair.com/images/img-18.png"
            alt="Air Quality"
            style={{
              width: "100%", // Container ki width ke according
              height: "auto", // Aspect ratio maintain rahe
              maxWidth: "600px", // Optional: max width limit
              display: "block",
              margin: "0 auto", // Center the image
            }}
          />
          <div
            style={{
              fontFamily: "'Google Sans Text', sans-serif",
              lineHeight: "30px",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              Welcome to Smart Indoor Air Quality Monitor
            </h1>

            <p>
              In today's fast-paced world, the quality of the air we breathe is
              more important than ever. While outdoor air pollution often makes
              the news, indoor air quality is a silent yet significant factor
              affecting our health. Poor indoor air quality can cause headaches,
              fatigue, allergies, and even long-term respiratory issues. With
              most people spending a majority of their time indoors, monitoring
              and maintaining good air quality is essential.
            </p>

            <p>
              The Smart Indoor Air Quality Monitor is designed to help you keep
              track of the air you breathe in your home, office, or any indoor
              environment. By measuring critical air quality parameters such as
              CO2 levels and PM2.5 particulate matter, this tool provides
              real-time insights into the environment around you. It allows you
              to take proactive steps to ensure cleaner and safer air for
              yourself and your family.
            </p>

            <p>
              Using this dashboard, you can visualize air quality trends through
              interactive charts, receive alerts when air quality deteriorates,
              and understand the current air status at a glance. The system uses
              simulated real-time data to provide a hands-on experience of how
              air quality monitoring works. This makes it a perfect tool for
              learning, awareness, and practice.
            </p>

            <p>
              Not only does the platform educate users about indoor air quality,
              but it also demonstrates the power of combining modern web
              technologies like React with real-time data visualization. Whether
              you are a student, professional, or just someone curious about air
              quality, this platform gives you a clear and interactive way to
              explore the invisible elements that impact your health every day.
            </p>

            <p>
              We hope this dashboard encourages you to become more mindful of
              your surroundings, take steps to improve air quality indoors, and
              explore further applications of real-time monitoring systems. Air
              quality is invisible, but its effects are real. Understanding it
              is the first step towards a healthier life.
            </p>

            <p style={{ fontStyle: "italic", marginTop: "30px" }}>
              “Clean air is not a luxury, it’s a necessity. Stay informed, stay
              safe, and breathe smart.”
            </p>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

const linkStyle = {
  display: "inline-block",
  margin: "10px",
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  borderRadius: "5px",
  textDecoration: "none",
};

export default Home;
