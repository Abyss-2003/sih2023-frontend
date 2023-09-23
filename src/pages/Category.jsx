import React from "react";
import Card from "../components/Card";
// import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import {MdPhotoCamera} from "react-icons/md";
import {MdVideoCameraFront} from "react-icons/md";
// import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
// import DashboardIcon from '@mui/icons-material/Dashboard';
import {MdDashboard} from "react-icons/md";;

const cardData = [
  {
    color: "#89ec5b",
    icon: <MdPhotoCamera/>,
    title: "Upload Image",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link:"#"
  },
  {
    color: "#eb5ae5",                                                
    icon: <MdVideoCameraFront />,
    title: "Upload video",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link:"#"
  },
  {
    color: "#5b98eb",
    icon: <MdDashboard />,
    title: "Dashboard",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link:"#"
  },
];

const Category = () => {
  return (
    <section className="container">
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
