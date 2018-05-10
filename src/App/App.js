import React, {Component} from 'react';
import './App.css';
import AudioPlayer from './Audio/AudioPlayer';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // loading: false,
      // data: {
      //
      // }
    };
  }

  fetchFilms = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    // const filmKeys = Object.keys(data['results']);
    const array = data.results.map(film => {
      return film.title;
    });
    console.log(array)
  };

  async componentDidMount() {
    // this.setState({loading:true});
    const url = 'https://swapi.co/api/';
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data['films'])
    const films = await this.fetchFilms(data['films']);


    // https://swapi.co/api/films
    // results.map
    // get title
    // get opening_crawl
  }

  render() {
    return (
      <div className="App">
        <AudioPlayer/>
        <Header/>
        <Navigation/>
      </div>
    );
  }
}

export default App;
