import React from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";

const Homepage = ({ setLoginUser }) => {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <h1>Welcome Player !!</h1>
      <div className="button1" onClick={() => navigate("/single")}>
        Play Now !!
      </div>

      <div className="button-container">
          <div onClick={() => navigate("/aboutus")}>
            About Us
          </div>
          <div onClick={() => setLoginUser({})}>
            Logout
          </div>
      </div>

      <img src="/assets/logo2.jpg" alt="Logo" className="logo" />
    </div>
  );
};
export default Homepage;
