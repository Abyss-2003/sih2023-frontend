import React from 'react';
import './Card.scss';

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
        <a href={link}>Click Now!!</a>
      </div>
    </div>
  </div>
  );
}

export default Card;

