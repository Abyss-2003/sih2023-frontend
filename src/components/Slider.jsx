import React, { useRef, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../assets/styles/Slider.scss";
import workout from "../assets/images/workout.jpg";
import coach from "../assets/images/coach.jpg";
import stat from "../assets/images/stat.jpg";

const Slider = () => {
  const slideRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  const data = [
    {
      id: 1,
      imgUrl: workout,
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 2,
      imgUrl: coach,
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 3,
      imgUrl: stat,
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 4,
      imgUrl: workout,
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 5,
      imgUrl: coach,
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
  ];
  return (
    <div>
      <div className="containerslider">
        <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
        <div id="slide" ref={slideRef}>
          {data.map((item) => (
            <div
              key={item.id}
              className="item"
              style={{ backgroundImage: `url(${item.imgUrl})` }}
            >
              <div className="content">
                <div className="name">{item.name}</div>
                <div className="des">{item.desc}</div>
                <button>See more</button>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
            <FaAngleLeft className="slider-button" style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              border: "1px solid #555",
              transition: "0.5s",
              color: "white",
            }} id="prev"
            onClick={handleClickPrev}/>
            <FaAngleRight className="slider-button" style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              border: "1px solid #555",
              transition: "0.5s",
              color: "white",
            }}
            id="next"
            onClick={handleClickNext} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
