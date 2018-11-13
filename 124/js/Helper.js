export default class Helper {
  constructor() {

  }
}
Helper.States = {
  LeftMost: 0,
  Left: 1,
  Right: 2,
  RightMost: 3
}
Helper.edgeWait = 2000;
Helper.moveWait = 400;
Helper.counter = 0;
Helper.currentState = Helper.States.LeftMost;
Helper.goalState = Helper.States.RightMost;
Helper.moveStep = 0;
Helper.update = function (dx) {
  Helper.counter += dx;
  if (Helper.currentState !== Helper.goalState) {
    if (Math.floor(Helper.counter/Helper.moveWait) > Helper.moveStep) {
      Helper.currentState += Math.sign(Helper.goalState - Helper.currentState);
      Helper.counter = 0;
      Helper.moveStep++;
    }
  } else {
    if (Math.floor(Helper.counter/Helper.edgeWait) > 0) {
      Helper.counter = 0;
      Helper.moveStep = 0;
      if (Helper.goalState === Helper.States.RightMost) {
        Helper.goalState = Helper.States.LeftMost;
      } else {
        Helper.goalState = Helper.States.RightMost;
      }
    }
  }
}
