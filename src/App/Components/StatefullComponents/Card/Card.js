import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = props => {
  return (
    <article className="card">
      <section className="card-header">
        <h2>{props.cardInfo.name}</h2>
      </section>
      <section className="card-body">
        <p>Homeworld: {props.cardInfo.homeworld}</p>
        <p>Species: {props.cardInfo.species}</p>
        <p>Population: {props.cardInfo.population}</p>
        <div className="favorite-container">
          <button className="favorite">favorite</button>
        </div>
      </section>
    </article>
  );
};

Card.propTypes = {};

export default Card;
