import React from 'react';
import {shallow} from 'enzyme';
import Navigation from "./Navigation";


describe('Navigation test', () => {
  let wrapper;
  const selectCategory = jest.fn();
  const displayFavorites = jest.fn();
  const favorites = 3;
  const currentCategory = 'planet';

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

  beforeEach(() => {

    wrapper = shallow(<Navigation selectCategory={selectCategory}
                                  displayFavorites={displayFavorites}
                                  favorites={favorites}
                                  currentCategory={currentCategory}
    />);
  });
  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('should call the selectCategory prop when clicked', () => {

    wrapper.find('.selectPeople').simulate('click');

    expect(selectCategory).toHaveBeenCalled();
  });

  it('should selectPlanets button when clicked should call the selectCategory prop when clicked', () => {

    wrapper.find('.selectPlanets').simulate('click');

    expect(selectCategory).toHaveBeenCalled();
  });

  it('should selectVehicles button when clicked should call the selectCategory prop when clicked', () => {

    wrapper.find('.selectVehicles').simulate('click');

    expect(selectCategory).toHaveBeenCalled();
  });

  it('should selectFavorites button should call the selectCategory prop when clicked', () => {

    wrapper.find('.selectFavorites').simulate('click');

    expect(displayFavorites).toHaveBeenCalled();
  });
});
