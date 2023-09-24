import React, {useState} from "react";
import "../assets/styles/Image_upload.scss";
import ImgUploadCompo from "../components/ImgUploadCompo";
import analysis1 from "../assets/images/analysis1.jpeg";
import WebcamStreamCapture from "../components/WebcamStreamCapture";

function ImageUpload() {
  const [toggle, setToggle] = useState(false);
  const ImageData = {
    result:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sint itaque fugiat facere perferendis quidem adipisci! Iure, qui. Voluptatibus quis asperiores pariatur provident vero totam et deleniti eum, ipsum nisi id sunt ratione dolores quasi praesentium culpa? Cumque voluptatibus accusantium, velit architecto omnis nulla distinctio, reprehenderit qui aut nihil minima.",
    resultImage: analysis1,
  };
  return (
    <div class="upload">
      <div class="item-iu left">
        <div style={{ display: "flex" }}>
          <button style={{borderRadius: '0', backgroundColor: toggle?'#aa0000':'transparent'}} onClick={()=>setToggle(true)}>Upload Image</button>
          <button style={{borderRadius: '0', backgroundColor: toggle?'transparent':'#aa0000'}} onClick={()=>setToggle(false)}>Upload Video</button>
        </div>
        {toggle?<ImgUploadCompo />:<WebcamStreamCapture/>}
      </div>
      <div class="item-iu right">
    <h1 style={{ fontSize: "30px" }}>Analysis:</h1>
        <p>{ImageData.result}</p>
        <br />
        <br />
        <h1 style={{ fontSize: "25px" }}>Graphical Analysis:</h1>
        <br />
        <div className="imagess" style={{ display: "flex" }}>
          <img src={ImageData.resultImage} style={{ width: "350px" }} alt="" />
        </div>
    </div>
    </div>
  );
}

export default ImageUpload;
