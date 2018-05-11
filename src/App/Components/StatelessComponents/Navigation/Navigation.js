import React from 'react';
import './Navigation.css';
import PropTypes from 'prop-types';

const Navigation = props => {
  return (
    <nav id="menu" className="fadein">
      <ul>
        <li><a onClick={() => {
          props.selectCategory('people');
        }}>People</a></li>
        <li><a onClick={() => {
          props.selectCategory('planets');
        }}>Planets</a></li>
        <li><a onClick={() => {
          props.selectCategory('vehicles');
        }}>Vehicles</a></li>
        {/*<li><a onClick={() => {*/}
          {/*props.selectCategory('favorites');*/}
        {/*}}>Favorites</a></li>*/}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  selectCategory: PropTypes.func.isRequired
};

export default Navigation;
