import React from 'react';
import logo from '../../../swapi-box-logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="fadein logo" alt="SWAPIbox"/>
    </header>
  );
};

export default Header;
