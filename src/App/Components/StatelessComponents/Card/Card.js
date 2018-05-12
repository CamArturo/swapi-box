import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ cardInfo, category, updateFavorites }) => {
  const keys = Object.keys(cardInfo);
  const second = keys[1];
  const third = keys[2];
  const fourth = keys[3];
  const fifth = keys[4];
  return (
    <article className="card">
      <section className="card-header">
        <h2>{cardInfo.name}</h2>
      </section>
      <section className="card-body">
        <p>{second} : {cardInfo[second]}</p>
        <p>{third} : {cardInfo[third]}</p>
        <p>{fourth} : {cardInfo[fourth]}</p>
        <p>{cardInfo[fifth]}</p>
        <div className="favorite-container">
          <button className="favorite" onClick={() => {
            updateFavorites(cardInfo, category);
          }}>favorite</button>
        </div>
      </section>
    </article>
  );
};

Card.propTypes = {
  updateFavorites: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  cardInfo: PropTypes.object.isRequired
};

export default Card;
