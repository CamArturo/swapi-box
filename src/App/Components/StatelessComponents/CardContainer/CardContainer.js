import React from 'react';
import PropTypes from 'prop-types';
import Card from "../Card/Card";
import './CardContainer.css';

const CardContainer =
  ({category, people, planets, vehicles, favorites, updateFavorites}) => {
    let array = [];
    if (category === 'people') {
      array = people;
    } else if (category === 'planets') {
      array = planets;
    } else if (category === 'vehicles') {
      array = vehicles;
    } else {
      array = favorites;
    }

    // const selectedClass = array.includes(???selected) ? 'card selected' : 'card';

    const allCards = array.map((card, index) => {
      return (
        <Card
          // selectedClass={selectedClass}
          cardInfo={card}
          category={category}
          updateFavorites={updateFavorites}
          key={`card${index}`}
        />
      );
    });

    return (
      <div className="card-container">
        {allCards}
      </div>
    );
  };

CardContainer.propTypes = {
  category: PropTypes.string.isRequired,
  people: PropTypes.array.isRequired,
  planets: PropTypes.array.isRequired,
  vehicles: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  updateFavorites: PropTypes.func.isRequired
};

export default CardContainer;
