export const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));
export const getRandomNumberMinMax = (min, max) => {
  const roundMin = Math.ceil(min);
  const roundMax = Math.floor(max);
  return Math.floor(Math.random() * (roundMax - roundMin)) + roundMin;
};
