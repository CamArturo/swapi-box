import React from 'react';
import {shallow} from 'enzyme';
import Card from "./Card";

describe('Card test', () => {

  const updateFavorites = jest.fn();
  const category = 'people';
  const card = {
    favorite: false,
    homeworld: "Tatooine",
    name: "Luke Skywalker",
    population: "200000",
    species: "Human",
    category: "people",
    selectedClass: "card"
  };
  const selectedClass = 'card selected';

  it('should match the snapshot', () => {

    const wrapper = shallow(<Card
      selectedClass={selectedClass}
      cardInfo={card}
      category={category}
      updateFavorites={updateFavorites}
    />);

    expect(wrapper).toMatchSnapshot();
  });

// test methods that are in render or lifecycle methods they are going to fire.
  // fetch is called with params
  // any function that act upon response of the fetch
  // handle errors handle correctly

  // a did you write
  // b is it important
});
