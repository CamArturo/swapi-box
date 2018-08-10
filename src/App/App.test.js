import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import {fetchVehicles} from "./APICalls";

describe('App testing', () => {
  let wrapper;
  let category;
  let mockData;

  it('renders without crashing', () => {
    const wrapper = shallow(<App/>, {
      disableLifecycleMethods: true
    });
    expect(wrapper).toMatchSnapshot();
  });

  describe('Fetch Category testing', () => {
    beforeEach(() => {
      category = 'vehicles';
      mockData = {
        "results": [
          {
            "name": "Sand Crawler",
            "model": "Digger Crawler",
            "manufacturer": "Corellia Mining Corporation",
            "cost_in_credits": "150000",
            "length": "36.8",
            "max_atmosphering_speed": "30",
            "crew": "46",
            "passengers": "30",
            "cargo_capacity": "50000",
            "consumables": "2 months",
            "vehicle_class": "wheeled",
            "pilots": [],
            "films": [
              "https://swapi.co/api/films/5/",
              "https://swapi.co/api/films/1/"
            ]
          }]
      };

      // Return an obj - key in resolve is JSON - a key in our object
      // after
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockData),
        status: 200
      }));
      // expect whatever you want to do if response .status is not 200
      wrapper = shallow(<App/>);
    });

    it('should call fetch with the correct args', async () => {
      const expected = 'https://swapi.co/api/vehicles/';
      await wrapper.instance().fetchCategory(category);
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should set state with the returned data', async () => {
      const expected = [
        {
          "name": "Sand Crawler",
          "model": "Digger Crawler",
          "manufacturer": "Corellia Mining Corporation",
          "cost_in_credits": "150000",
          "length":"36.8",
          "max_atmosphering_speed": "30",
          "crew": "46",
          "passengers": "30",
          "cargo_capacity": "50000",
          "consumables": "2 months",
          "vehicle_class": "wheeled",
          "pilots": [],
          "films": [
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/1/"
          ]
        }];
      await wrapper.instance().fetchCategory(category);
      expect(wrapper.state('vehiclesUrls')).toEqual(expected);
    });

    it('should update error status in state', async () => {
      // window.fetch mocking fetch function
      window.fetch = jest.fn().mockImplementation(() => Promise.reject(new Error('text')));
      await wrapper.instance().fetchCategory(category);
      expect(wrapper.state('errorStatus')).toEqual('Error adding Category');
    });
  });

  describe('Fetch Vehicles testing', () => {
    let wrapper;
    let vehiclesUrl;
    let mockData;

    beforeEach(() => {
      category = 'vehicles';
      mockData = {
        cargo_capacity: "50000",
        consumables: "2 months",
        cost_in_credits: "150000",
        created: "2014-12-10T15:36:25.724000Z",
        crew: "46",
        model: "Digger Crawler",
        name: "Sand Crawler",
        passengers: "30",
        url: "https://swapi.co/api/vehicles/4/"
      };
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockData),
        status: 200
      }));
      const renderedComponent = shallow()
    });
  });

  describe('Display Favorites testing', () => {
    it('should setState of favorites when displayFavorites is called', () => {
      let mockState = {
        currentCategory: '',
        loading: true
      };

      wrapper.instance().displayFavorites();
      expect(wrapper.state('currentCategory')).toEqual('favorites');
    });
  });
});
