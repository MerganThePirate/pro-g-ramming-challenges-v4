import Player from "./Player.js";
import Input from "./Input.js";

export default class Game {
  constructor() {
  }
}
Game.domElement = document.createElement("canvas");
Game.States = {
  Menu: 0,
  Game: 1,
  Pause: 2,
  Over: 3
}
Game.currentState = Game.States.Menu;
Game.update = function (timestamp) {
  if (Game.currentState === Game.States.Game) {
    let input = Input.getInput();
    if (input !== null) {
      Player.move(input);
      Input.clear();
    }
    Game.draw();

    requestAnimationFrame(Game.update);
  } else if (Game.currentState === Game.States.Over) {

  }
}
Game.start = function () {
  Game.currentState = Game.States.Game;
  Game.reset();
  requestAnimationFrame(Game.update);
}
Game.stop = function () {
  Game.currentState = Game.States.Over;
}
Game.reset = function () {
  Player.reset();
  Input.clear();
}

Game.draw = function () {
  /** Beautifully Basic */
  console.clear();
  console.log("  XXXXX  ");
  console.log("         ");
  console.log("         ");
  console.log("    .    ");
  switch (Player.currentState) {
    case Player.States.Window_Left:
      console.log("uP       ");
    break;
    case Player.States.Left:
      console.log("   P     ");
    break;
    case Player.States.Middle:
      console.log("    P    ");
    break;
    case Player.States.Right:
      console.log("     P   ");
    break;
    case Player.States.Window_Right:
      console.log("       Pu");
    break;
  }
  console.log(" XXXXXXX ");
  console.log(" B       ");
  console.log(" XXXXXXX ");
  console.log("C       C");
}
