import Random from "./Random.js";
import Player from "./Player.js";
import Bucket from "./Bucket.js";

export default class Leak {
  constructor(safeState) {
    this.reset();
    this.safeState = safeState;
  }

  progress() {
    this.currentState++;
  }

  reset() {
    this.currentState = Leak.States.None;
  }
}
Leak.States = {
  None: 0,
  New: 1,
  Top: 2,
  Mid: 3,
  Bot: 4,
  Failed: 5
}
Leak.active = null;
Leak.wait = 1000;
Leak.counter = 0;
Leak.step = 0;
Leak.caugth = false;
Leak.update = function (dx) {
  Leak.counter += dx;
  if (Leak.active === null) {
    Leak.active = Leak.List[Random.getInt(0, Leak.List.length - 1)];
  }
  if (Leak.step < Math.floor(Leak.counter/Leak.wait)) {
    if (Leak.active.currentState === Leak.States.Bot) {
      if (Leak.active.safeState === Player.currentState &&
      !Bucket.List[0].isFull()) {
        Leak.reset();
        Leak.caught = true;
        return;
      }
    }
    Leak.active.progress();
    Leak.step++;
  }
}
Leak.reset = function () {
  Leak.step = 0;
  Leak.counter = 0;
  Leak.active = null;
  Leak.List.forEach((leak)=>{
    leak.reset();
  })
}
Leak.List = [
  new Leak(Player.States.Left),
  new Leak(Player.States.Middle),
  new Leak(Player.States.Right)
];
