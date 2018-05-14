import React from 'react';
import './Scroller.css';
import PropTypes from 'prop-types';

const Scroller = ({filmsInfo}) => (
  <div>
    <div className="fade"></div>

    <section className="star-wars">
      <div className="crawl">
        <div className="title">
          <h1>{filmsInfo.title}</h1>
          <p>{filmsInfo.date}</p>
        </div>

        <p>{filmsInfo.scroll}</p>
      </div>
    </section>
  </div>
);

Scroller.propTypes = {
  filmsInfo: PropTypes.object.isRequired
};


export default Scroller;
