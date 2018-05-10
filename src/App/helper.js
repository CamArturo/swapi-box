export const getRandomInt = ((min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
});

export const randomFilm = (arr) => {
  const randomInt = getRandomInt(0, 6);
  const filmsInfo = filmsInfo.slice(randomInt, randomInt + 1);
  return filmsInfo;
};