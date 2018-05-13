export const getRandomInt = ((min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
});

export const isAlreadyFavorite = ((favorites, cardInfo) => {
  return favorites.includes(cardInfo);
});

export const selectCards = ((category, people, planets, vehicles, favorites) => {
  let selectedCards = [];
  if (category === 'people') {
    selectedCards = people;
  } else if (category === 'planets') {
    selectedCards = planets;
  } else if (category === 'vehicles') {
    selectedCards = vehicles;
  } else {
    selectedCards = favorites;
  }
  return selectedCards;
});