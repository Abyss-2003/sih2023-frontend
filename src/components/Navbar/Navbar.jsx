import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import Logo from "../../assets/images/stat.jpg";
const Navbar = () => {
  const [showNav, setShowNav]=useState(true);
  const [animate,setAnimate]=useState(0);
  const close=()=>{
    setAnimate(1);
    setTimeout(()=>setShowNav(true),300);
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
        <Link to='/login'><h4 className="navbar__text">Home</h4></Link>
        <Link to='/login'><h4 className="navbar__text">About</h4></Link>
        <Link to='/login'><h4 className="navbar__text">Services</h4></Link>
        <Link to='/login'><h4 className="navbar__text">Schedule</h4></Link>
        <Link to='/login'><h4 className="navbar__text">Contact</h4></Link>
        <Link to='/login'><h4 className="navbar__text">Become A Member</h4></Link>
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