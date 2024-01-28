// Import React and the useState hook from React library
import React, { useState } from "react"

// Import the external styles defined in "register.css"
import "./register.css"

// Import the axios library for making HTTP requests
import axios from "axios"

// Import the useNavigate hook from "react-router-dom" for navigation
import { useNavigate } from "react-router-dom"

// Define the functional component named Register
const Register = () => {

    // Create an instance of the useNavigate hook for programmatic navigation
    const navigate = useNavigate()

    // Define a state variable 'user' using the useState hook
    const [ user, setUser ] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    // Define a handleChange function to update 'user' state on input change
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    // Define the Register function to handle the registration process
    const Register = () => {
        // Destructure properties from the 'user' state
        const { name, email, password, reEnterPassword } = user

        // Check if all required fields are filled and passwords match
        if( name && email && password && (password === reEnterPassword)){
            // Send a POST request to the server to register the user
            axios.post("http://localhost:9002/register", user)
            .then(res => {
                // Display a success message and navigate to the login page
                alert(res.data.message)
                navigate("/login")
                // setLoginUser(res.data.user);
                // Navigate to the homepage
                // navigate("/homepage");
            }) 
        } else {
            // Display an alert for invalid input if any required condition is not met
            alert("Invalid input")
        }
    }

    // Render the registration form with input fields and buttons
    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <img src="/assets/logo2.jpg" alt="Logo" className="logo" />
            <input type="text" name="name" value={user.name} placeholder="your Name" onChange={ handleChange } ></input>
            <input type="text" name="email" value={user.email} placeholder="your Email" onChange={ handleChange } ></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange } ></input> 
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange } ></input> 
            
            {/* Register button with an onClick event that calls the Register function */}
            <div className="button" onClick={Register} >Register</div>

            <div>or</div>

            {/* Login button with an onClick event that navigates to the login page */}
            <div className="button" onClick={() => navigate("/login")}>Login</div>
        </div>
    )
}

// Export the Register component as the default export
export default Register
