import React from 'react';
import fetchVehicles from "./APICalls";
import {shallow} from 'enzyme';

describe('API Calls testing', () => {
  let mockEvent;
  let wrapper;
  let mockData;

  beforeEach(() => {
    mockEvent = { preventDefault: jest.fn() };
    const category = 'vehicles';
    const mockVehicles = [
      {
        name: "Sand Crawler",
        model: "Digger Crawler",
        vehicle_class: "car",
        passengers: 2
      },
      {
        name: "T-16 skyhopper",
        model: "T-16 skyhopper",
        vehicle_class: "car",
        passengers: 10
      }
    ];
  });

  it.skip('should call fetch with the correct args', () => {

  });

  it('resets the state after fetching', () => {

  });

  it('calls the callback after adding', () => {

  });
  it('sets an error when the fetch fails', () => {

  });
});