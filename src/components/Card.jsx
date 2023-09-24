import React from 'react';
import '../assets/styles/Card.scss';
import { Link } from 'react-router-dom';

function Card({ color, icon, title, description ,link}) {
  return (
    <div className="card__bx" style={{ '--clr': color }}>
    <div className="card__data">
      <div className="card__icon">
        <i>{icon}</i>
      </div>
      <div className="card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link}>Click Now</Link>
      </div>
    </div>
  </div>
  );
}

export default Card;

