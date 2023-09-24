import React from 'react'
import WebcamStreamCapture from '../components/WebcamStreamCapture'
import '../assets/styles/Img_upload_compo.scss'
import analysis1 from "../assets/images/analysis1.jpeg";
import analysis2 from "../assets/images/analysis2.jpeg";

function Vdo_upload() {
  const Modeldata = {
    resultData: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officia vitae quidem repudiandae mollitia consequuntur libero quo perferendis commodi molestias a omnis cumque velit dolores, in veritatis iusto. Pariatur totam, aut rem a animi nihil reprehenderit debitis perspiciatis sit iusto blanditiis iste aperiam quis atque! Praesentium vero culpa ut fugit!",
    resultImage1: analysis1,
    resultImage2: analysis2
  }
  return (
    <div class="upload">
    <div class="item-iu left" >
    <WebcamStreamCapture/>
    </div>
    <div class="item-iu right">
    <h1 style={{ fontSize: "30px" }}>Analysis:</h1>
        <p>{Modeldata.resultData}</p>
        <br />
        <br />
        <h1 style={{ fontSize: "25px" }}>Graphical Analysis:</h1>
        <br />
        <div className="imagess" style={{ display: "flex" }}>
          <img src={Modeldata.resultImage1} style={{ width: "350px" }} alt="" />
          <img src={Modeldata.resultImage2} style={{ width: "350px" }} alt="" />
        </div>
    </div>
    
  </div>
  )
}

export default Vdo_upload
