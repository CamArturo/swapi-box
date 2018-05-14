import React from 'react';
import {getRandomInt, isAlreadyFavorite, selectCards} from "./helper";

describe('helper tests', () => {
  let wrapper;
  const category = 'favorites';
  const favorites = [{
    name: "Luke Skywalker",
    species: "Human",
    homeworld: "Tatooine",
    population: "200000",
    favorite: true
  },
  {
    name: "C-3PO",
    species: "Droid",
    homeworld: "Tatooine",
    population: "200000",
    favorite: true
  }];

  const cardInfo = [
    {
      name: "R2-D2",
      species: "Droid",
      homeworld: "Naboo",
      population: "4500000000",
      favorite: false
    }
  ];

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

  it('getRandomInt should give a random number', () => {
    expect(getRandomInt(10, 10)).toEqual(10);
  });

  it('should isAlreadyFavorite should return true if card pass is already in favorites', () => {
    expect(isAlreadyFavorite(favorites, cardInfo)).toEqual(false);
  });

  it('should assign array based on category passed in (people, planets, vehicles or favorites)', () => {
    expect(selectCards(category, people, planets, vehicles, favorites)).toEqual(favorites);
  });
});
