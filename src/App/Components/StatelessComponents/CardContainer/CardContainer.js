import React from 'react';
import PropTypes from 'prop-types';
import Card from "../../StatefullComponents/Card/Card";
import './CardContainer.css';

const CardContainer = ({category, people, planets, vehicles}) => {
  let array = [];
  if (category === 'people') {
    array = people;
  } else if (category === 'planets') {
    array = planets;
  } else {
    array = vehicles;
  }
  const allCards = array.map((card, index) => {
    return (
      <Card
        cardInfo={card}
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
  vehicles: PropTypes.array.isRequired
};

export default CardContainer;
