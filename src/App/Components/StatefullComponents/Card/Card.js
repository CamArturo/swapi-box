import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = props => {
  const keys = Object.keys(props.cardInfo);
  const second = keys[1];
  const third = keys[2];
  const fourth = keys[3];
  const fifth = keys[4];
  return (
    <article className="card">
      <section className="card-header">
        <h2>{props.cardInfo.name}</h2>
      </section>
      <section className="card-body">
        <p>{second} : {props.cardInfo[second]}</p>
        <p>{third} : {props.cardInfo[third]}</p>
        <p>{fourth} : {props.cardInfo[fourth]}</p>
        <p>{props.cardInfo[fifth]}</p>
        <div className="favorite-container">
          <button className="favorite" onClick={() => {
            props.updateFavorites(props.cardInfo);
          }}>favorite</button>
        </div>
      </section>
    </article>
  );
};

Card.propTypes = {
  updateFavorites: PropTypes.func.isRequired
};

export default Card;
