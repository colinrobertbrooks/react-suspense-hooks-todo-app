export const randomMs = ({ min = 100, max = 1600 } = {}) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const delay = (ms = randomMs()) => {
  console.log(`     - delay was ${ms} ms`);

  return new Promise(resolve => setTimeout(resolve, ms));
};
