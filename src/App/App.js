import React, { Component } from 'react';
import './App.css';
import logo from './swapi-box-logo.png';


class App extends Component {
  constructor () {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<h1 className="title-fadein">SWAPIbox</h1>*/}
          <img src={logo} className="title-fadein logo" alt="SWAPIbox" />
        </header>
      </div>
    );
  }
}

export default App;
