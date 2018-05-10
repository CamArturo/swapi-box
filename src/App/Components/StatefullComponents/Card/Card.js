import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <article className="card">
        <p>Luke Skywalker</p>
        <p>HomeWorld: Tatooine</p>
        <p>Species: Human</p>
        <p>Population: 200000</p>
        <button className="favorite">favorite</button>
      </article>
    );
  }
}

Card.propTypes = {};

export default Card;
