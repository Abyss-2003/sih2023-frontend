import React from "react";
import Card from "../components/Card";
import {MdPhotoCamera} from "react-icons/md";
import {MdVideoCameraFront} from "react-icons/md";
import {MdDashboard} from "react-icons/md";;

const cardData = [
  {
    color: "#89ec5b",
    icon: <MdPhotoCamera/>,
    title: "Upload Image",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link:"/image-upload"
  },
  {
    color: "#eb5ae5",                                                
    icon: <MdVideoCameraFront />,
    title: "Upload Video / Live",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link:"/video-upload"
  },
  {
    color: "#5b98eb",
    icon: <MdDashboard />,
    title: "Dashboard",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link:"#"
  },
];

const Category = ({userDetails}) => {
  console.log(userDetails);
  return (
    <section className="container">
      <section className="card_details">
        <div className="cd_heading">
            <h1>Hello, <span>{userDetails?.username.toUpperCase()}</span> !</h1>
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
