import React, {Component} from 'react';
import './App.css';
import AudioPlayer from './Audio/AudioPlayer';
import Scroller from './Components/Scroll/Scroller';
import Header from './Components/StatelessComponents/Header/Header';
import Navigation from './Components/StatelessComponents/Navigation/Navigation';
// import {fetchPeopleData} from './APICalls';
import {getRandomInt} from './helper';
import CardContainer
  from "./Components/StatelessComponents/CardContainer/CardContainer";

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
      favorite: [],
      currentCategory: ''
    };
  }

  // set the data to whatever data you choose.
  // if you click favorites then set the favorites array to data.

  fetchPerson = people => {
    const results = people.map(async person => {
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

  fetchPlanets = planets => {
    const results = planets.map(async planet => {
      const name = planet.name;
      const terrain = planet.terrain;
      const population = planet.population;
      const climate = planet.climate;
      const residentsUrl = planet.residents;
      // const responseResidents = await fetch(residentsUrl);
      // const residentsData = await responseResidents.json();

      return {
        name: name,
        terrain: terrain,
        population: population,
        climate: climate
        // residentsData: residentsData
      };
    });
    return Promise.all(results);
  };

  fetchCategory = async (category) => {
    const url = `https://swapi.co/api/${category}/`;
    const response = await fetch(url);
    const categoryUrls = await response.json();
    this.setState({
      [`${category}Urls`]: categoryUrls.results
    });
  };

  updateCards = async (category) => {
    switch (category) {
      case 'people':
        const people = await this.fetchPerson(this.state.peopleUrls);
        this.setState({
          people,
          currentCategory: 'people',
          loading: false
        });
        break;
      case 'planets':
        console.log('planets called ');
        const planets = await this.fetchPlanets(this.state.planetsUrls);
        this.setState({
          planets,
          currentCategory: 'planets',
          loading: false
        });
        break;
      case 'vehicles':
        console.log('vehicles');
        break;
      default: break;
    }
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
    await this.fetchCategory('people');
    await this.fetchCategory('planets');
    // await this.fetchCategory('vehicles');
  }

  render() {
    return (
      <div className="App">
        <AudioPlayer/>
        <Header/>
        {
          this.state.filmsInfo &&
          this.state.loading &&
          <Scroller
            filmsInfo={this.state.filmsInfo}
          />
        }
        <CardContainer
          category={this.state.currentCategory}
          people={this.state.people}
          planets={this.state.planets}
          vehicles={this.state.vehicles}
        />
        <Navigation
          selectCategory={this.updateCards}
        />
      </div>
    );
  }
}

export default App;
