import React from 'react'
import '../assets/styles/Main.css'
import Slider from '../components/Slider'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Main = () => {
  return (
    <>
    <Navbar/>
    <Slider></Slider>
    <Footer/>
    </>
  )
}

export default Main