import React from 'react';
import './Navigation.css';
import PropTypes from 'prop-types';

const Navigation = props => {
  return (
    <nav id="menu" className="fadein">
      <ul>
        <li><a onClick={() => {
          props.selectCategory('People');
        }}>People</a></li>
        <li><a onClick={() => {
          props.selectCategory('Planets');
        }}>Planets</a></li>
        <li><a onClick={() => {
          props.selectCategory('Vehicles');
        }}>Vehicles</a></li>
        <li><a onClick={() => {
          props.selectCategory('Favorites');
        }}>Favorites</a></li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  selectCategory: PropTypes.func.isRequired
};

export default Navigation;
