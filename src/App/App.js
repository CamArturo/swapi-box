import React, {Component} from 'react';
import Scroller from './Components/StatelessComponents/Scroll/Scroller';
import Header from './Components/StatelessComponents/Header/Header';
import Navigation from './Components/StatelessComponents/Navigation/Navigation';
import CardContainer
  from "./Components/StatelessComponents/CardContainer/CardContainer";
import Loading from "./Components/StatelessComponents/Loading/Loading";
import {fetchVehicles, fetchCategory} from './APICalls';
import {getRandomInt, isAlreadyFavorite} from './helper';
import './App.css';


//Components
// APICalls
// container with redux

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      scroller: true,
      filmsInfo: {},
      data: [],
      people: [],
      vehicles: [],
      planets: [],
      favorites: [],
      currentCategory: ''
    };
  }

  updateFavorites = ((cardInfo, category) => {
    const isFound = isAlreadyFavorite(this.state.favorites, cardInfo);
    if (!isFound) {
      cardInfo.favorite = true;
      this.setState({
        favorites: [...this.state.favorites, cardInfo]
      });
    } else {
      let arrayData = this.state[`${category}`];
      let modifiedArray = arrayData.map((object) => {
        if (object.name === cardInfo.name) {
          cardInfo.favorite = !cardInfo.favorite;
        }
        return object;
      });
      const filteredModifiedArray = modifiedArray.filter(item => {
        return item.favorite === true;
      });
      this.setState({
        favorites: filteredModifiedArray
      });
    }
  });

  displayFavorites = () => {
    this.setState({
      currentCategory: 'favorites',
      loading: false
    });
  };

  fetchPerson = people => {
    try {
      const results = people.map(async person => {
        const name = person.name;
        const responseHomeWorldUrl = person.homeworld;
        // TODO make following 2 lines a function for testing
        const responseHomeWorld = await fetch(responseHomeWorldUrl);
        // TODO 200 response
        // if (responseHomeWorld.status < 300) {
        //
        // }
        const homeWorldData = await responseHomeWorld.json();
        const speciesUrl = person.species;
        const responseSpecies = await fetch(speciesUrl);
        const speciesData = await responseSpecies.json();
        return {
          name: name,
          species: speciesData.name,
          homeworld: homeWorldData.name,
          population: homeWorldData.population,
          favorite: false
        };
      });
      return Promise.all(results);
    } catch (error) {
      this.setState({
        errorStatus: 'Error adding Person'
      });
    }
  };

  fetchPlanets = planets => {
    try {
      const results = planets.map(async planet => {
        const name = planet.name;
        const terrain = planet.terrain;
        const population = planet.population;
        const climate = planet.climate;
        const residentsUrl = planet.residents;
        const residentsData = await this.fetchResidents(residentsUrl);
        const residentNames = residentsData.map(resident => {
          return ' ' + resident.name;
        });
        const residentString = residentNames.toString();
        return {
          name: name,
          terrain: terrain,
          population: population,
          climate: climate,
          residents: residentString,
          favorite: false
        };
      });
      return Promise.all(results);
    } catch (error) {
      this.setState({
        errorStatus: 'Error adding Planet'
      });
    }
  };

  fetchResidents = residentsUrl => {
    try {
      const results = residentsUrl.map(async residentUrl => {
        if (residentUrl.length > 1) {
          const responseResidents = await fetch(residentUrl);
          return await responseResidents.json();
        }
        return results;
      });
      return Promise.all(results);
    } catch (error) {
      this.setState({
        errorStatus: 'Error adding Planet'
      });
    }
  };

  fetchCategory = async (category) => {
    try {
      const url = `https://swapi.co/api/${category}/`;
      const response = await fetch(url);
      const categoryUrls = await response.json();

      // const urls = fetchCategory(category)

      this.setState({
        [`${category}Urls`]: categoryUrls.results
      });
    } catch (error) {
      this.setState({
        errorStatus: 'Error adding Category'
      });
    }
  };

  updateCards = async (category) => {
    this.setState({
      scroller: false
    });
    switch (category) {
      case 'people':
        let people;
        if (!this.state.people.length) {
          people = await this.fetchPerson(this.state.peopleUrls);
        } else {
          people = this.state.people;
        }
        this.setState({
          people,
          currentCategory: 'people',
          loading: false
        });
        break;
      case 'planets':
        let planets;
        if (!this.state.planets.length) {
          planets = await this.fetchPlanets(this.state.planetsUrls);
        } else {
          planets = this.state.planets;
        }
        this.setState({
          planets,
          currentCategory: 'planets',
          loading: false
        });
        break;
      case 'vehicles':
        let vehicles;
        if (!this.state.vehicles.length) {
          vehicles = await fetchVehicles(this.state.vehiclesUrls);
        } else {
          vehicles = this.state.vehicles;
        }
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
        <Header/>
        {
          this.state.filmsInfo &&
          this.state.scroller &&
          <Scroller
            filmsInfo={this.state.filmsInfo}
          />
        }
        {
          !this.state.scroller &&
          this.state.loading &&
          <Loading/>
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
          currentCategory={this.state.currentCategory}
          selectCategory={this.updateCards}
          displayFavorites={this.displayFavorites}
          favorites={this.state.favorites.length}
        />
      </div>
    );
  }
}

export default App;