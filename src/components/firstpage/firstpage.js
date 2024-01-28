// Import necessary modules and functions from React and external libraries
import React, { useState } from "react";
import "./firstpage.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

// Create a functional component named Firstpage
const Firstpage = () => {
  
  // Declare a navigate function from the useNavigate hook provided by react-router-dom
  const navigate = useNavigate();

  // Render the component JSX
  return (
    // Create a div with the class name "firstpage" for styling
    <div className="firstpage">
      {/* Display an image with the source pointing to "/assets/logo2.jpg" and alt text "Logo" */}
      <img src="/assets/logo2.jpg" alt="Logo" className="logo" />
      <img src="/assets/bg3.jpg" alt="Background" className="background" />

      {/* Create a div with the class name "text" */}
      <div className="text">
        {/* Display an h1 heading with the text "Honeycomb Challenge" */}
        <h1>Honeycomb Challenge</h1>
      </div>

      {/* Create a button with an onClick event that redirects to '/login' using window.location.href */}
      <button onClick={() => window.location.href = '/login'}>Lets Go !!!</button>
    </div>
  );
}

// Export the Firstpage component as the default export
export default Firstpage;
