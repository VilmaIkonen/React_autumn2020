import React from 'react';
import './AnimalCard.css'

const AnimalCard = ({ name, aclass, img, desc, link }) => {
  return (
    <div className="animalCard">
      <h2><span>{name}</span></h2>
      <p>{aclass}</p>
      <img src={img} alt={name}/>
      <p>{desc}</p>
      <a href={link}></a>      
    </div>
  );
};

export default AnimalCard;