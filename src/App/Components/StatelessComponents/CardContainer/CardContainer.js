import React from 'react';
import PropTypes from 'prop-types';
import Card from "../../StatefullComponents/Card/Card";
import './CardContainer.css';

const CardContainer = ({cards}) => {
  const allCards = cards.map((card, index) => {
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
  cards: PropTypes.array.isRequired
};

export default CardContainer;
