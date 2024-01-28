import { useState } from 'react';
import './App.css';
import Homepage from "./components/homepage/homepage";
import Login from './components/login/login';
import Register from './components/register/register';
import Firstpage from './components/firstpage/firstpage';
import Single from './components/single/single';
import Mode from './components/mode/mode';
import Circle from './components/circle/circle';
import Triangle from './components/triangle/triangle';
import Star from './components/star/star';
import AboutUs from './components/aboutus/aboutus';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  // State to manage the logged-in user
  const [user, setLoginUser] = useState({});

  // Updated setLoginUser function
  const handleLogin = (loggedInUser) => {
    setLoginUser(loggedInUser);

    // Redirect to homepage after successful login
    if (loggedInUser && loggedInUser._id) {
      // Use Navigate to programmatically navigate to the homepage
      Navigate('/homepage');
    }
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Route for the initial landing page */}
          <Route exact path="/" element={<Firstpage />} />

          {/* Route for the homepage */}
          <Route
            path="/homepage"
            element={
              user && user._id ? (
                <Homepage setLoginUser={setLoginUser} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          {/* Route for the login page */}
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />

          {/* Route for the registration page */}
          <Route path="/register" element={<Register />} />

          {/* Route for the 'Single' game mode page */}
          <Route path='/single' element={<Single />} />

          {/* Route for the 'Mode' game mode page */}
          <Route path='/mode' element={<Mode />} />

          {/* Route for the 'Circle' game mode page */}
          <Route path='/circle' element={<Circle />} />

          {/* Route for the 'Triangle' game mode page */}
          <Route path='/triangle' element={<Triangle />} />

          {/* Route for the 'Star' game mode page */}
          <Route path='/star' element={<Star />} />

          {/* Route for the 'Star' game mode page */}
          <Route path='/aboutus' element={<AboutUs />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
