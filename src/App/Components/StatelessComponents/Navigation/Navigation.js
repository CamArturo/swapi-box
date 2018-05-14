import React from 'react';
import './Navigation.css';
import PropTypes from 'prop-types';

const Navigation = props => {

  // TODO refactor selected category in navigation to have utilize state in navigation
  return (
    <nav id="menu" className="fadein">
      <button className={props.currentCategory === 'people' ? 'active' : 'selectPeople'} onClick={() => {
        props.selectCategory('people');
      }} >People</button>
      <button className={props.currentCategory === 'planets' ? 'active' : 'selectPlanets'} onClick={() => {
        props.selectCategory('planets');
      }}>Planets</button>
      <button className={props.currentCategory === 'vehicles' ? 'active' : 'selectVehicles'} onClick={() => {
        props.selectCategory('vehicles');
      }}>Vehicles</button>
      <button className={props.currentCategory === 'favorites' ? 'active' : 'selectFavorites'} onClick={() => {
        props.displayFavorites();
      }}>Favorites {props.favorites}</button>
    </nav>
  );
};

Navigation.propTypes = {
  selectCategory: PropTypes.func.isRequired,
  displayFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.number.isRequired,
  currentCategory: PropTypes.string.isRequired
};

export default Navigation;
