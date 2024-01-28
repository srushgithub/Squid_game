// Mode.js
import React from 'react';
import "./mode.css";
import { useNavigate } from "react-router-dom";

const Mode = () => {
  const navigate = useNavigate();

  return (
    <div className='mode'>
      <h1>Select Your Difficulty</h1>
      <img src="/assets/logo2.jpg" alt="Logo" className="logo" />
      <div className="difficulty">
          <div onClick={() => navigate("/triangle")}>
            Easy
          </div>
          <div onClick={() => navigate("/circle")}>
            Medium
          </div>
          <div onClick={() => navigate("/star")}>
            Hard
          </div>
      </div>
    </div>
  );
};

export default Mode;
