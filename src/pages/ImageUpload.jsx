import React, { useState } from "react";
import "../assets/styles/Image_upload.scss";
import ImgUploadCompo from "../components/ImgUploadCompo";
// import analysis1 from "../assets/images/analysis1.jpeg";
import WebcamStreamCapture from "../components/WebcamStreamCapture";
import { useSelector } from "react-redux";

function ImageUpload() {
  const [toggle, setToggle] = useState(true);
  const {image, exercise, loading} = useSelector((store) => store.picture)

  const details = [
    {
      id : 1,
      type : "Deadlift",
      data : "A strength training exercise in which a lifter lifts a weighted barbell or other object from a stationary position on the ground to a standing position by extending the hips and knees while maintaining a straight back and a strong grip on the barbell"
    },
    {
      id : 2,
      type : "Shoulder Press",
      data : "A strength training exercise in which a lifter presses a weighted barbell, dumbbells, or other resistance overhead from shoulder height to a fully extended position while standing or sitting, primarily engaging the deltoid muscles of the shoulders and other upper body muscles for support and stability"
    },
    {
      id : 3,
      type : "Russian Twist",
      data : "A core exercise performed in a seated or reclined position, where the individual twists their torso to the left and right sides while holding a weight or resistance object, engaging the oblique muscles, rectus abdominis, and lower back muscles to improve rotational strength and stability"
    },
  ]

  console.log(exercise);
  return (
    <div className="upload">
      <div className="item-iu left">
        <div style={{ display: "flex" }}>
          <button style={{ borderRadius: '0', backgroundColor: toggle ? '#aa0000' : 'transparent' }} onClick={() => setToggle(true)}>Upload Image</button>
          <button style={{ borderRadius: '0', backgroundColor: toggle ? 'transparent' : '#aa0000' }} onClick={() => setToggle(false)}>Upload Video</button>
        </div>
        {toggle ? <ImgUploadCompo /> : <WebcamStreamCapture />}
      </div>
      <div className="item-iu right">
        {image?.fileimage && exercise!=="none" && <div key={image?.id}>
          <h1 style={{ fontSize: "30px" , textAlign : "center", fontWeight : "bolder", letterSpacing : "2px"}}>Analysis</h1>
          <p className="exercise_heading">Exercise : <span>{exercise}</span></p>
          <p>{details.filter((detail)=> {
              return detail.type === exercise
          })[0]?.data}</p>
          <br />
          <br />
          <h1 style={{ fontSize: "25px", fontWeight : "bolder"}}>Analysed Image</h1>
          <br />
          <div className="imagess" style={{ display: "flex" }}>
            <img src={image.fileimage} style={{ width: "350px" }} alt="" />
          </div>
        </div>}
        {image?.fileimage && exercise==="none" && <div className="after_upload">
          <h1 style={{color : "red"}}>Please provide a valid image</h1>
        </div> }
        {!image?.fileimage && <div className="after_upload">
          {loading && <h1>Loading....</h1>}
          {!loading && <h1 style={{color : `${exercise==="none"? "red" : "gray"}`}}>{exercise==="none"? "Please provide a valid image":"Your analysis will be displayed here"}</h1>}
        </div> }
      </div>
    </div>
  );
}

export default ImageUpload;
