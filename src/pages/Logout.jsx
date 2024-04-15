import React, { useEffect } from 'react'
import "../styles/Logout.css";
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();
    
    useEffect(() => {
      localStorage.removeItem("auth");
      setTimeout(() => {
          navigate("/");
      }, 3000);
  }, [navigate]);

  return (
    <div className='logout-main'>
    <h1>Logout Successful!</h1>
    <p>You will be redirected to the entrance page soon...</p>
  </div>
  )
}

export default Logout