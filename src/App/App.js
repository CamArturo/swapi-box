import React, {Component} from 'react';
import './App.css';
import AudioPlayer from './Audio/AudioPlayer';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <AudioPlayer />
        <Header/>
        <Navigation/>
      </div>
    );
  }
}

export default App;
