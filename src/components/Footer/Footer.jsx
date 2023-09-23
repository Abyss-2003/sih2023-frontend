import React from 'react'
import { Link } from "react-router-dom";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className='mainFooter'>
    <div className='footerContainer'>
        <div className='subContainer'>
            <div className='footText'>Subscribe for company updates below</div>
            <div className='subFooter'><input type="text" className="subFootInput" placeholder='Your Email'/>
            <button className='subBtn'>Subscribe</button></div>
        </div>
        <div className='subFootContainer'>
        <div className='footContent'>
         <h3 className='footHeader'>SERVICES</h3>
         <div >
         <Link to="/"><div className='footText'>Flex Muscle</div></Link>
         <Link to="/"><div className='footText'>Cardio Exercise</div></Link>
         <Link to="/"><div className='footText'>Basic Yoga</div></Link>
         <Link to="/"><div className='footText'>Weight Lifting</div></Link>
         </div>
        </div>
        <div className='footContent'>
         <h3 className='footHeader'>PRICING</h3>
         <div >
         <Link to="/"><div className='footText'>Basic</div></Link>
         <Link to="/"><div className='footText'>Premium</div></Link>
         <Link to="/"><div className='footText'>Diamond</div></Link>
         <Link to="/"><div className='footText'>Weight Lifting</div></Link>
         </div>
        </div>
        <div className='footContent'>
         <h3 className='footHeader'>SERVICES</h3>
         <div >
         <Link to="/"><div className='footText'>About Us</div></Link>
         <Link to="/"><div className='footText'>Carriers</div></Link>
         <Link to="/"><div className='footText'>Customers</div></Link>
         <Link to="/"><div className='footText'>Partners</div></Link>
         </div>
        </div>
        </div>
    </div>
    <div className='footerDown'>
    <p>@Copyrights Fitness All rights reserved</p>
    </div>
    </div>
  )
}

export default Footer