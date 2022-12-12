import React from 'react';
import './Card-item.css';
// import '../card-list/Card-list';

const CardItem = (props) => {
  return (
    <div class="card-container">
      <img
        alt={props.oeuvre.title}
        class="image"
        src={props.oeuvre.imagemUrl}
      />
      <h1 class="title">{props.oeuvre.title}</h1>
      <p>
        {props.oeuvre.auteur} - {props.oeuvre.annee}
      </p>
    </div>
  );
};

export default CardItem;
