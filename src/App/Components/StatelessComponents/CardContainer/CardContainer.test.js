import React from 'react';
import {shallow, mount} from 'enzyme';
import CardContainer from "./CardContainer";

describe('CardContainer test', () => {

  const category = 'people';
  const people = [
    {
      name: "Luke Skywalker",
      species: "Human",
      homeworld: "Tatooine",
      population: "200000",
      favorite: false
    },
    {
      name: "C-3PO",
      species: "Droid",
      homeworld: "Tatooine",
      population: "200000",
      favorite: false
    }
  ];

  const planets = [
    {
      name: "Yavin IV",
      terrain: "jungle, rainforests",
      population: "1000",
      climate: "temperate, tropical",
      residents: ""
    },
    {
      name: "Hoth",
      terrain: "tundra, ice caves, mountain ranges",
      population: "unknown",
      climate: "frozen",
      residents: ""
    }
  ];
  const vehicles = [
    {
      name: "Sand Crawler",
      model: "Digger Crawler",
      vehicleClass: "wheeled",
      passengers: "30",
      favorite: false
    },
    {
      name: "T-16 skyhopper",
      model: "T-16 skyhopper",
      vehicleClass: "repulsorcraft",
      passengers: "1",
      favorite: false
    }
  ];
  const favorites = [
    {
      name: "Sand Crawler",
      model: "Digger Crawler",
      vehicleClass: "wheeled",
      passengers: "30",
      favorite: false
    },
    {
      name: "T-16 skyhopper",
      model: "T-16 skyhopper",
      vehicleClass: "repulsorcraft",
      passengers: "1",
      favorite: false
    }
  ];

  const updateFavorites = jest.fn();
  let wrapper;
  beforeEach(() => {

    wrapper = shallow(<CardContainer category={category}
                                     people={people}
                                     planets={planets}
                                     vehicles={vehicles}
                                     favorites={favorites}
                                     updateFavorites={updateFavorites}
    />);
  });

  it('should match the snapshot', () => {

    // const wrapper = shallow(<CardContainer
    //
    // />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should assign array based on category passed in', () => {

    // const app = mount(<CardContainer category={category}
    //                                  people={people}
    //                                  planets={planets}
    //                                  vehicles={vehicles}
    //                                  favorites={favorites}
    //                                  updateFavorites={updateFavorites}
    // />);
    //
    // expect(app.find(Card).prop(category)).toBe('people');

    // expect(wrapper.find(card).prop).toBe(people);
  });
});