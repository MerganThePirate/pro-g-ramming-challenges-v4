export default class Random {
  constructor() {
  }
}
Random.getInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
