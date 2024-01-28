// Import necessary dependencies and components
import React, { useState } from "react";
import "./login.css"; // Import the styles for the login component
import axios from "axios"; // Import axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation

// Define the Login component
const Login = ({ setLoginUser }) => {

    const navigate = useNavigate(); // Initialize the useNavigate hook for navigation

    // Set up state using the useState hook to manage user input
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    // Handle changes in the input fields
    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    // Handle the login process
    const login = () => {
        // Send a POST request to the login endpoint with user data
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                // Display a message from the response and set the logged-in user
                alert(res.data.message);
                setLoginUser(res.data.user);
                // Navigate to the homepage
                navigate("/homepage");
            });
    };

    // Render the Login component
    return (
        <div className="login">
            {console.log(user)} {/* Log the user object to the console */}
            <h1>Login</h1>
            <img src="/assets/logo2.jpg" alt="Logo" className="logo" />
            {/* Input fields for email and password, with corresponding change handlers */}
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password"></input>
            {/* Login button with the login function attached to the onClick event */}
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            {/* Button to navigate to the registration page */}
            <div className="button" onClick={() => navigate("/register")}>Register</div>
        </div>
    );
};

// Export the Login component
export default Login;
