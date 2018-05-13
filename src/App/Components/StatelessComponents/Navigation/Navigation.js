import React from 'react';
import './Navigation.css';
import PropTypes from 'prop-types';

const Navigation = props => {
  return (
    <nav id="menu" className="fadein">
      <button className="selectPeople" onClick={() => {
        props.selectCategory('people');
      }} >People</button>
      <button className="selectPlanets" onClick={() => {
        props.selectCategory('planets');
      }}>Planets</button>
      <button className="selectVehicles" onClick={() => {
        props.selectCategory('vehicles');
      }}>Vehicles</button>
      <button className="selectFavorites" onClick={() => {
        props.displayFavorites();
      }}>Favorites {props.favorites}</button>
    </nav>
  );
};

Navigation.propTypes = {
  selectCategory: PropTypes.func.isRequired,
  displayFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.number.isRequired
};

export default Navigation;
