import React from "react";
import "./aboutus.css";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <h1>Welcome About Us </h1>
      <div className="button" onClick={() => navigate("/homepage")}>
            Back to Homepage
          </div>
      

      <img src="/assets/logo2.jpg" alt="Logo" className="logo" />
    </div>
  );
};
export default AboutUs;
