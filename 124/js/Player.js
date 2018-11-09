import Input from "./Input.js";

export default class Player {
  constructor() {
  }
}
Player.States = {
  Window_Left: 0,
  Left: 1,
  Middle: 2,
  Right: 3,
  Window_Right: 4
}
Player.currentState = Player.States.Middle;
Player.move = function (input) {
  switch (input) {
    case Input.Left:
      if (Player.currentState !== Player.States.Window_Left) {
        Player.currentState--;
      }
    break;
    case Input.Right:
      if (Player.currentState !== Player.States.Window_Right) {
        Player.currentState++;
      }
    break;
  }
}
Player.reset = function () {
  Player.currentState = Player.States.Middle;
}
