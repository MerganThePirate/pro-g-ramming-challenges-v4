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
  switch (Player.currentState) {
    case Player.States.Window_Left:
      if (input === Input.Right) {
        Player.currentState = Player.States.Left;
      }
    break;
    case Player.States.Left:
      if (input === Input.Left) {
        Player.currentState = Player.States.Window_Left;
      } else if (input === Input.Right) {
        Player.currentState = Player.States.Middle;
      }
    break;
    case Player.States.Middle:
      if (input === Input.Left) {
        Player.currentState = Player.States.Left;
      } else if (input === Input.Right) {
        Player.currentState = Player.States.Right;
      }
    break;
    case Player.States.Right:
      if (input === Input.Left) {
        Player.currentState = Player.States.Middle;
      } else if (input === Input.Right) {
        Player.currentState = Player.States.Window_Right;
      }
    break;
    case Player.States.Window_Right:
      if (input === Input.Left) {
        Player.currentState = Player.States.Right;
      }
  }
}
Player.reset = function () {
  Player.currentState = Player.States.Middle;
}
