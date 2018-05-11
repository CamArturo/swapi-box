import React, {Component} from 'react';
import './App.css';
import AudioPlayer from './Audio/AudioPlayer';
import Scroller from './Components/Scroll/Scroller';
import Header from './Components/StatelessComponents/Header/Header';
import Navigation from './Components/StatelessComponents/Navigation/Navigation';
// import {fetchPeopleData} from './APICalls';
import {getRandomInt} from './helper';
import CardContainer from "./Components/StatelessComponents/CardContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      filmsInfo: {},
      people: [],
      vehicles: [],
      planets: []
    };
  }

  fetchPeople = async (category) => {
    const url = `https://swapi.co/api/${category}/`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
  };

  updateCards = (category) => {
    switch (category) {
      case 'people':
        this.fetchPeople(category);
        break;
      case 'planets':
        console.log('planets');
        break;
      default:
        console.log('vehicles');
    }

    // this.setState({[category]: ['s']});
  };

  async componentDidMount() {
    this.setState({loading: false});
    const randomNum = getRandomInt(1, 7);
    const url = `https://swapi.co/api/films/${randomNum}`;
    const response = await fetch(url);
    const data = await response.json();
    const filmsInfo = {
      title: data.title,
      date: data.release_date,
      scroll: data.opening_crawl
    };
    this.setState({filmsInfo});
  }

  render() {
    return (
      <div className="App">
        <AudioPlayer/>
        <Header/>
        {
          this.state.filmsInfo &&
          <Scroller
            filmsInfo={this.state.filmsInfo}
          />
        }
        <Navigation
          selectCategory={this.updateCards}
        />
        <CardContainer/>
      </div>
    );
  }
}

export default App;
