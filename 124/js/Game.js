import Player from "./Player.js";
import Input from "./Input.js";
import Leak from "./Leak.js";
import Mistake from "./Mistake.js";

export default class Game {
  constructor() {
  }
}
Game.domElement = document.createElement("canvas");
Game.States = {
  Menu: 0,
  Game: 1,
  Pause: 2,
  Mistake: 3,
  GameOver: 4
}
Game.currentState = Game.States.Menu;
Game.startTime = null;
Game.currentTime = null;
Game.update = function (timestamp) {
  if (Game.startTime === null) {
    Game.startTime = timestamp;
  }
  let dx = timestamp - Game.startTime - Game.currentTime;
  Game.currentTime = timestamp - Game.startTime;


  let input = Input.getInput();
  switch (Game.currentState) {
    /** Pause */
    case Game.States.Pause:
      if(input === Input.Pause) {
        Game.currentState = Game.States.Game;
        Input.clear();
      }
    break;
    /** Game */
    case Game.States.Game:
      /** Pause Input */
      if (input === Input.Pause) {
        Game.currentState = Game.States.Pause;
      } else if (input !== null) {
        /** Player Input */
        Player.move(input);
      }
      Input.clear();

      Leak.update(dx);
      if (Leak.active.currentState === Leak.States.Failed) {
        Mistake.List[0].increase();
        if (Mistake.endGame(Mistake.List[0])) {
          Game.currentState = Game.States.GameOver;
        } else {
          Game.currentState = Game.States.Mistake;
        }
      }
    break;
    /** Mistake */
    case Game.States.Mistake:
      Mistake.update(dx);
      if (Mistake.resumeGame()) {
        Leak.reset();
        Input.clear();
        Game.currentState = Game.States.Game;
      }
    break;
  }
  Game.draw();
  requestAnimationFrame(Game.update);
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
  Game.startTime = null;
}

Game.draw = function () {
  /** Beautifully Basic */
  console.clear();

  let a = "";
  let b = "";
  let c = "";
  let d = "";
  let e = "";
  Leak.List.forEach((leak)=>{
    switch(leak.currentState) {
      case Leak.States.None:
        a += "X";
        b += " ";
        c += " ";
        d += " ";
        e += "X";
      break;
      case Leak.States.New:
        a += ",";
        b += " ";
        c += " ";
        d += " ";
        e += "X";
      break;
      case Leak.States.Top:
        a += "X";
        b += ".";
        c += " ";
        d += " ";
        e += "X";
      break;
      case Leak.States.Mid:
        a += "X";
        b += " ";
        c += ".";
        d += " ";
        e += "X";
      break;
      case Leak.States.Bot:
        a += "X";
        b += " ";
        c += " ";
        d += ".";
        e += "X";
      break;
      case Leak.States.Failed:
        a += "X";
        b += " ";
        c += " ";
        d += " ";
        e += "^";
    }
  });
  console.log("  X" + a + "X  ");
  console.log("   " + b + "   ");
  console.log("   " + c + "   ");
  console.log("   " + d + "   ");
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
  console.log(" XX" + e + "XX ");
  console.log(" B       ");
  console.log(" XXXXXXX ");
  console.log("C       C");
  if (Game.currentState === Game.States.Pause) {
    console.log("Paused");
  }
  if (Game.currentState === Game.States.GameOver) {
    console.log("GameOver");
  }
}
