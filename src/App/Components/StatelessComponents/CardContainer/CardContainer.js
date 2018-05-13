import React from 'react';
import PropTypes from 'prop-types';
import Card from "../Card/Card";
import './CardContainer.css';
import {selectCards} from '../../../helper';

const CardContainer =
  ({category, people, planets, vehicles, favorites, updateFavorites}) => {
    // let selectedCards = [];
    // if (category === 'people') {
    //   selectedCards = people;
    // } else if (category === 'planets') {
    //   selectedCards = planets;
    // } else if (category === 'vehicles') {
    //   selectedCards = vehicles;
    // } else {
    //   selectedCards = favorites;
    // }

    const selectedCards = selectCards(category, people, planets, vehicles, favorites);
    const allCards = selectedCards.map((card, index) => {
      let selectedClass = card.favorite === true ? 'card selected' : 'card';
      return (
        <Card
          selectedClass={selectedClass}
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
