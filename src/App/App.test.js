import React from 'react';
import {shallow} from 'enzyme';
import App from './App';


describe('App test', () => {
  let wrapper;
  let category;
  let mockData;

  beforeEach(() => {
    // Mock fetch - need to able to do normal stuff with it.
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
    // window.fetch = jest.fn().mockImplementation(() => Promise.resolve({json: () => Promise.resolve(mockData)}));
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({json: () => Promise.resolve(mockData), status: 200}));
    // expect whatever you want to do if response .status is not 200
    wrapper = shallow(<App/>);
    // Actions

    //Expectation
  });
  it('renders without crashing', () => {
    const wrapper = shallow(<App/>, {
      disableLifecycleMethods: true
    });
    expect(wrapper).toMatchSnapshot();
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


  // promise resolves
});
