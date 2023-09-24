import React, { useState } from "react";
import axios from "axios";
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
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
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post(`https://sih2023-backend.onrender.com/${type}`,details,{
        headers : {
          'Content-Type' : 'application/json'
        }
      })
      if(response.data?.token){
        toast.success(`${type.charAt(0).toUpperCase()}${type.substring(1)} successful`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        localStorage.setItem('token', response.data.token)
        setTimeout(()=>{
          navigate('/home')
          window.location.reload()
        },1000)
      }
    } catch (error) {
      toast.error(`Could not ${type}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      console.log(error);
    }
  }

  return (
    <>
    <div className="login-page">
      <div className={`container_loginsignup ${isSignup ? "right-panel-active" : ""}`}>
        <div className="form-container sign-up-container">
          <form className="form-ls">
            <h1 className="heading-ls">Create Account</h1>
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
            <span className="span-ls">or use your email for registration</span>
            <input className="input-ls" type="text" name="username" placeholder="Name" onChange={(e) => {setDetails({...details, [e.target.name] : e.target.value})}} value={details.username}/>
            <input className="input-ls" type="email" name="email" placeholder="Email"  onChange={(e) => {setDetails({...details, [e.target.name] : e.target.value})}} value={details.email}/>
            <input className="input-ls" type="password" name="password" placeholder="Password"  onChange={(e) => {setDetails({...details, [e.target.name] : e.target.value})}} value={details.password}/>
            <button classname="button-ls" onClick={(e) => {handleSign(e,"signup")}}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="form-ls">
            <h1 className="heading-ls">Sign In</h1>
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
            <span className="span-ls">or use your account</span>
            <input className="input-ls" type="email" name="email" placeholder="Email"  onChange={(e) => {setDetails({...details, [e.target.name] : e.target.value})}} value={details.email}/>
            <input className="input-ls" type="password" name="password" placeholder="Password"  onChange={(e) => {setDetails({...details, [e.target.name] : e.target.value})}} value={details.password}/>
            <a className="social" href="#">Forgot Your Password</a>
            <button classname="button-ls" onClick={(e) => {handleSign(e,"login")}}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="heading-ls">Welcome Back!</h1>
              <p className="para-ls">
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" onClick={toggleForm}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="heading-ls">Hello, Friend!</h1>
              <p className="para-ls">Enter your details and start the journey with us</p>
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
