import React, { useState } from "react";
import axios from "axios";
import "../assets/styles/LoginSignup.scss";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [details, setDetails] = useState({
    username : "",
    email : "",
    password : ""
  })
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setDetails({
      username : "",
      email : "",
      password : ""
    })
  };

  const handleSign = async (e,type) => {
    e.preventDefault()
    console.log(type);
    console.log(details);
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post(`http://localhost:8000/${type}`,details,{
        headers : {
          'Content-Type' : 'application/json'
        }
      })
      if(response.data?.token){
        localStorage.setItem('token', response.data.token)
        navigate('/')
        window.location.reload()
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <div className="login-page">
      <div className={`container ${isSignup ? "right-panel-active" : ""}`}>
        <div className="form-container sign-up-container">
          <form >
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <FaFacebookF />
              </a>
              <a href="#" className="social">
                <FaGoogle />
              </a>
              <a href="#" className="social">
                <FaTwitter />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" name="username" placeholder="Name" onChange={(e) => {setDetails({...details, [e.target.name] : e.target.value})}} value={details.username}/>
            <input type="email" name="email" placeholder="Email"  onChange={(e) => {setDetails({...details, [e.target.name] : e.target.value})}} value={details.email}/>
            <input type="password" name="password" placeholder="Password"  onChange={(e) => {setDetails({...details, [e.target.name] : e.target.value})}} value={details.password}/>
            <button className="button" onClick={(e) => {handleSign(e,"signup")}}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form >
            <h1>Sign In</h1>
            <div className="social-container">
              <a href="#" className="social">
                <FaFacebookF />
              </a>
              <a href="#" className="social">
                <FaGoogle />
              </a>
              <a href="#" className="social">
                <FaTwitter />
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" name="email" placeholder="Email"  onChange={(e) => {setDetails({...details, [e.target.name] : e.target.value})}} value={details.email}/>
            <input type="password" name="password" placeholder="Password"  onChange={(e) => {setDetails({...details, [e.target.name] : e.target.value})}} value={details.password}/>
            <a href="#">Forgot Your Password</a>
            <button className="button" onClick={(e) => {handleSign(e,"login")}}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" onClick={toggleForm}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your details and start the journey with us</p>
              <button className="ghost" onClick={toggleForm}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginSignup;
