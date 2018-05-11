import React, {Component} from 'react';
import './App.css';
import AudioPlayer from './Audio/AudioPlayer';
import Scroller from './Components/Scroll/Scroller';
import Header from './Components/StatelessComponents/Header/Header';
import Navigation from './Components/StatelessComponents/Navigation/Navigation';
// import {fetchPeopleData} from './APICalls';
import {getRandomInt} from './helper';
import CardContainer from "./Components/StatelessComponents/CardContainer/CardContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      filmsInfo: {},
      data: [],
      people: [],
      vehicles: [],
      planets: [],
      favorite: []
    };
  }

  // set the data to whatever data you choose.
  // if you click favorites then set the favorites array to data.

  fetchPerson = personArray => {
    const results = personArray.map(async person => {
      const name = person.name;
      const responseHomeWorldUrl = person.homeworld;
      const responseHomeWorld = await fetch(responseHomeWorldUrl);
      const homeWorldData = await responseHomeWorld.json();
      const speciesUrl = person.species;
      const responseSpecies = await fetch(speciesUrl);
      const speciesData = await responseSpecies.json();
      return {
        name: name,
        species: speciesData.name,
        homeworld: homeWorldData.name,
        population: homeWorldData.population
      };
    });
    return Promise.all(results);
  };

  fetchPeople = async (category) => {
    console.log('fetch people fired');
    const url = `https://swapi.co/api/${category}/`;
    const response = await fetch(url);
    const characters = await response.json();
    const people = await this.fetchPerson(characters.results);
    this.setState({
      people,
      data: people,
      loading: false
    });
  };

  // Name
  // Homeworld
  // Species
  // Population of Homeworld
  // A button to “Favorite” the person

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
    // this.state.people &&
  };

  async componentDidMount() {
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
        <Header />
        {
          this.state.filmsInfo &&
          this.state.loading &&
          <Scroller
            filmsInfo={this.state.filmsInfo}
          />
        }
        <CardContainer
          cards={this.state.data}
        />
        <Navigation
          selectCategory={this.updateCards}
        />

      </div>
    );
  }
}

export default App;
