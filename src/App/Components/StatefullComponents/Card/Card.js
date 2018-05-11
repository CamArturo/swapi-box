import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = props => {
  const name = props.name;
  return (
    <article className="card">
      <section className="card-header">
        <h2>Luke Skywalker</h2>
      </section>
      <section className="card-body">
        <p>Homeworld: {props.homeworld}</p>
        <p>Species: {props.species}</p>
        <p>Population: {props.population}</p>
        <button className="favorite">favorite</button>
      </section>
    </article>
  );
};

Card.propTypes = {};

export default Card;
