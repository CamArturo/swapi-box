import React from 'react';
import './Navigation.css';
import PropTypes from 'prop-types';

const Navigation = props => {
  return (
    <nav id="menu" className="fadein">
      <button onClick={() => {
        props.selectCategory('people');
      }} >People</button>
      <button onClick={() => {
        props.selectCategory('planets');
      }}>Planets</button>
      <button onClick={() => {
        props.selectCategory('vehicles');
      }}>Vehicles</button>
    </nav>
  );
};

Navigation.propTypes = {
  selectCategory: PropTypes.func.isRequired
};

export default Navigation;
