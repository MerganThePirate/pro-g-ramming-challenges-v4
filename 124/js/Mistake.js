export default class Mistake {
  constructor (max) {
    this.counter = 0;
    this.max = max;
  }

  increase() {
    this.counter++;
  }
}
Mistake.List = [
  new Mistake(3),
  new Mistake(3)
];
Mistake.wait = 2000;
Mistake.counter = 0;
Mistake.update = function (dx) {
  Mistake.counter += dx;
}
Mistake.endGame = function (mistake) {
  return mistake.counter >= mistake.max;
}
Mistake.resumeGame = function () {
  if (Mistake.counter >= Mistake.wait) {
    Mistake.counter = 0;
    return true;
  }
  return false;
}
Mistake.reset = function () {
  Mistake.counter = 0;
  Mistake.List.forEach((mistake)=>{
    mistake.counter = 0;
  })
}
