import React, { useEffect, useState, useCallback } from 'react'
import "../styles/Dashboard.css";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Dashboard = () => {
  const token = JSON.parse(localStorage.getItem("auth")) || "";
  const [ data, setData ] = useState({});
  const navigate = useNavigate();

  const fetchLuckyNumber = useCallback(async () => {
    let axiosConfig = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    try {
      const response = await axios.get("https://samplehdassign.onrender.com/api/v1/dashboard", axiosConfig);
      setData({ msg: response.data.msg, luckyNumber: response.data.secret });
    } catch (error) {
      toast.error(error.message);
    }
  }, [token]);

  useEffect(() => {
    fetchLuckyNumber();
    if (token === "") {
      navigate("/login");
      toast.warn("Please login first to access dashboard");
    }
  }, [token, fetchLuckyNumber, navigate]);

  return (
    <div className='dashboard-main'>
      <h1 className='mb-12 font-extrabold text-5xl text-gp'>Welcome to Dashboard !</h1>
      <p className='text-center mb-8 text-gr text-6xl py-8'>{ data.msg } Welcome ! <br/><br/>{ data.luckyNumber }</p>
      <Link to="/logout" className="logout-button">Logout</Link>
    </div>
  )
}

export default Dashboard
