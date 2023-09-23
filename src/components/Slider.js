import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./Slider.css";
import workout from '../assets/images/workout.jpg'
import coach from '../assets/images/coach.jpg'
import stat from '../assets/images/stat.jpg'

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
        imgUrl:
          coach,
        desc: "Some beautiful roads cannot be discovered without getting loss.",
        name: "EXPLORE NATURE",
      },
      {
        id: 3,
        imgUrl:
          stat,
        desc: "Some beautiful roads cannot be discovered without getting loss.",
        name: "EXPLORE NATURE",
      },
      {
        id: 4,
        imgUrl:
          workout,
        desc: "Some beautiful roads cannot be discovered without getting loss.",
        name: "EXPLORE NATURE",
      },
      {
        id: 5,
        imgUrl:
          coach,
        desc: "Some beautiful roads cannot be discovered without getting loss.",
        name: "EXPLORE NATURE",
      },
    ];
  return (
    <div>
        <div className="container">
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
        <button id="prev" onClick={handleClickPrev}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button id="next" onClick={handleClickNext}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
    </div>
  )
}

export default Slider