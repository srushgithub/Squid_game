import React from "react";
import "./single.css";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Single = () => {
    const navigate = useNavigate();
    return(
        <div className="singlepage">
            <h1>Select your Character</h1>
            <img src="/assets/logo2.jpg" alt="Logo" className="logo" />

            <div className="images">
            <Link to="/mode">
            <img src="assets/456.jpg" alt="Clickable Image 1" className="clickableimage" />
            </Link>
    
            <Link to="/mode">
            <img src="assets/218.jpg" alt="Clickable Image 2" className="clickableimage" />
            </Link>

            <Link to="/mode">
            <img src="assets/001.jpg" alt="Clickable Image 3" className="clickableimage" />
            </Link>
            </div>
            
        </div>
    );
};

export default Single;