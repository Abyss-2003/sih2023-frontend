import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import axios from "axios";
import "../assets/styles/Navbar.scss";
import Logo from "../assets/images/stat.jpg";

const Navbar = ({userDetails}) => {
  const [showNav, setShowNav]=useState(true);
  const [animate,setAnimate]=useState(0);
  const navigate = useNavigate()

  const close=()=>{
    setAnimate(1);
    setTimeout(()=>setShowNav(true),300);
  }

  const handleLogin = async (type) => {
    const token = localStorage.getItem('token')
    if(type === "login"){
      navigate(`/login`)
    }
    else{
      try {
        const response = await axios.delete(`http://localhost:8000/logout`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        if (response.status === 200) {
          localStorage.removeItem('token')
          navigate('/')
          window.location.reload(true)
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (<>
    {
      showNav===true ? (
        <div className="main_navbar" >
          <div className="sub_nav">
      <div className="navbar">
      <div className="navbar__left" >
        <Link to="/" onClick={close}><img src={Logo} alt="" className="logo" style={{width:"100px"}}/></Link>
      </div>
      <div className="navbar__right">
        <Link to='/'><h4 className="navbar__text">Home</h4></Link>
        <Link to='/login'><h4 className="navbar__text">About</h4></Link>
        <Link to='/login'><h4 className="navbar__text">Contact Us</h4></Link>
        {!userDetails && <h4 className="navbar__text text-white cursor-pointer" onClick={() => {handleLogin("login")}}>Enter</h4>}
        {userDetails && <h4 className="navbar__text text-white cursor-pointer" onClick={() => {handleLogin("logout")}}>Logout</h4>}
        <AiOutlineMenu className="navbar__menu" onClick={()=>{setShowNav(false);setAnimate(0)}}/>
      </div>
    </div>
    </div>
    </div>
      ):(
    <div className="main_navbar">
      <div className="sub_nav">
      <div className="navbar">
      <div className="navbar__left">
      <Link to="/" onClick={close}><img src={Logo} alt="" className="logo" style={{width:"100px"}}/></Link>
      </div>
    </div>
    <div className={animate===0?"navbar_content":"navbar_content_close"}>
      <div className="close_icon"><RxCross1 className="navbar__menu" onClick={close}/></div>
      <div className="nav-content-container">
      <Link to="/" className="aboutUs-link" onClick={close}><div className="nav-button-content">Home</div></Link>
      <Link to="/" className="aboutUs-link" onClick={close}><div className="nav-button-content">About</div></Link>
      <Link to="/" className="aboutUs-link" onClick={close}><div className="nav-button-content">Services</div></Link>
      <Link to="/" className="aboutUs-link" onClick={close}><div className="nav-button-content">Schedule</div></Link>
      <Link to="/" className="aboutUs-link" onClick={close}><div className="nav-button-content">Contact</div></Link>
      <Link to="/" className="aboutUs-link" onClick={close}><div className="nav-button-content">Become A Member</div></Link>
      </div>
    </div>
      </div>
    </div>
      )
    }
    </>
  );
};

export default Navbar;