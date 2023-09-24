import React from "react";
import Card from "../components/Card";
import {MdPhotoCamera} from "react-icons/md";
import {MdVideoCameraFront} from "react-icons/md";
import {MdDashboard} from "react-icons/md";;

const cardData = [
  {
    color: "#89ec5b",
    icon: <MdPhotoCamera/>,
    title: "Know Your Exercise",
    description: "We can help you know what exercise you are performing",
    link:"/image-upload"
  },
  {
    color: "#eb5ae5",                                                
    icon: <MdVideoCameraFront />,
    title: "Virtual Trainer",
    description: "Our virtual trainer can correct your workout.",
    link:"/video-upload"
  },
  {
    color: "#5b98eb",
    icon: <MdDashboard />,
    title: "Track Progress",
    description: "Just to let you know how you are performing",
    link:"#"
  },
];

const Category = ({userDetails}) => {
  console.log(userDetails);
  return (
    <section className="container">
      <section className="card_details">
        <div className="cd_heading">
            <h1>Welcome, <span>{userDetails?.username.toUpperCase()}</span> !</h1>
        </div>
        <div className="para_1">
          <p>Ready to become <span>FIT</span></p>
        </div>
        <div className="para_2">
          <p>like never before ?</p>
        </div>
      </section>
      <section className="card__container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            color={card.color}
            icon={card.icon}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </section>
    </section>
  );
};

export default Category;
