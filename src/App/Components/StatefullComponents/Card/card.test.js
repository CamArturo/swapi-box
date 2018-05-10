import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor() {
    super();

    this.state = {
      favorite: false
    };
  }

  render() {
    return (
      <article className="card">
        <header>
          <h2>Yoda</h2>
        </header>
        <section className="card-body">
          <p>Unknown</p>
          <p>Species</p>
          <p>100,000</p>
          <button>Favorite</button>
        </section>
      </article>
    );
  }
}

Card.propTypes = {};

export default Card;

