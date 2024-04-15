import React from 'react'
import "../styles/Landing.css";
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='landing-main'>
    <h1 className='ml-4 mb-12 font-extrabold text-7xl text-gp'>Entrance Page</h1>
    <p className='text-center mb-8 text-gr'>Welcome!</p>
    <Link to="/login" className="landing-login-button ">Login</Link>
    <Link to="/register" className="landing-register-button">SignUp</Link>
  </div>
  )
}

export default Landing
