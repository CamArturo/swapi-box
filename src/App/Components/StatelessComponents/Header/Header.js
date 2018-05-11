import React from 'react';
import logo from '../../../swapi-box-logo.png';
import './Header.css';
import PropTypes from 'prop-types';

const Header = () => {
  return (
    <header className="App-header">
      {/*<h1 className="title-fadein">SWAPIbox</h1>*/}
      <img src={logo} className="fadein logo" alt="SWAPIbox"/>
    </header>
  );
};

Header.propTypes = {};

export default Header;
