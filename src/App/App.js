import React, {Component} from 'react';
import './App.css';
import AudioPlayer from './Audio/AudioPlayer';
import Scroller from './Components/Scroll/Scroller';
import Header from './Components/StatelessComponents/Header/Header';
import Navigation from './Components/StatelessComponents/Navigation/Navigation';
// import {fetchPeopleData} from './APICalls';
import {getRandomInt, isAlreadyFavorite} from './helper';
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
      favorites: [],
      currentCategory: ''
    };
  }

  //TODO if card is already found in favorites do not add to state.
  //TODO do not allow favorite button to be clicked again or toggle off.
  //TODO Remove from favorites

  updateFavorites = cardInfo => {
    const isFound = isAlreadyFavorite(this.state.favorites, cardInfo);
    if (!isFound) {
      this.setState({
        favorites: [...this.state.favorites, cardInfo]
      });
    }
  };

  displayFavorites = () => {
    this.setState({
      currentCategory: 'favorites',
      loading: false
    });
  };

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
      const residentsData = await this.fetchResidents(residentsUrl);
      const residentNames = residentsData.map(resident => {
        return resident.name;
      });
      const residentString = residentNames.toString();
      return {
        name: name,
        terrain: terrain,
        population: population,
        climate: climate,
        residents: residentString
      };
    });
    return Promise.all(results);
  };

  fetchResidents = residentsUrl => {
    const results = residentsUrl.map(async residentUrl => {
      if (residentUrl.length > 1) {
        const responseResidents = await fetch(residentUrl);
        return await responseResidents.json();
      }
      return results;
    });
    return Promise.all(results);
  };

  fetchVehicles = vehicles => {
    const results = vehicles.map(async vehicle => {
      const name = vehicle.name;
      const model = vehicle.model;
      const vehicleClass = vehicle.vehicle_class;
      const passengers = vehicle.passengers;
      return {
        name: name,
        model: model,
        vehicleClass: vehicleClass,
        passengers: passengers
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
        const planets = await this.fetchPlanets(this.state.planetsUrls);
        this.setState({
          planets,
          currentCategory: 'planets',
          loading: false
        });
        break;
      case 'vehicles':
        const vehicles = await this.fetchVehicles(this.state.vehiclesUrls);
        this.setState({
          vehicles,
          currentCategory: 'vehicles',
          loading: false
        });
        break;
      default:
        break;
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
    await this.fetchCategory('vehicles');
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
          favorites={this.state.favorites}
          updateFavorites={this.updateFavorites}
        />
        <Navigation
          selectCategory={this.updateCards}
          displayFavorites={this.displayFavorites}
        />
      </div>
    );
  }
}

export default App;
