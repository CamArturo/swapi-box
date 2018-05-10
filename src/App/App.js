import React, {Component} from 'react';
import './App.css';
import AudioPlayer from './Audio/AudioPlayer';
import Scroller from './Components/Scroll/Scroller';
import Header from './Components/StatelessComponents/Header/Header';
import Navigation from './Components/StatelessComponents/Navigation/Navigation';
import {getRandomInt} from './helper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      filmsInfo: []
    };
  }

  fetchScrollInfo = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    let filmsInfo = data.results.map(film => {
      return {
        scroll: film.opening_crawl,
        title: film.title,
        date: film.release_date
      };
    });
    const randomInt = getRandomInt(0, 7);
    console.log('number', randomInt);
    filmsInfo = filmsInfo.slice(randomInt, randomInt + 1);
    this.setState({filmsInfo});
  };

  async componentDidMount() {
    // this.setState({loading:true});
    const url = 'https://swapi.co/api/';
    const response = await fetch(url);
    const data = await response.json();
    const filmsInfo = await this.fetchScrollInfo(data['films']);
  }

  render() {
    return (
      <div className="App">
        <AudioPlayer/>
        <Header/>
        <Scroller
          filmsInfo={this.state.filmsInfo}
        />
        <Navigation/>
      </div>
    );
  }
}

export default App;
