import React from 'react';
import PropTypes from 'prop-types';
import './Navigation.css';

const Navigation = props => {
  return (
    <nav id="menu" className="fadein">
      <ul>
        <li><a href="#">People</a></li>
        <li><a href="#">Planets</a></li>
        <li><a href="#">Vehicles</a></li>
        <li><a href="#">Favorites</a></li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  
};

export default Navigation;
