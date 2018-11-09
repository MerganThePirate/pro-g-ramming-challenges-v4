import Game from "./Game.js";
import Input from "./Input.js";

window.addEventListener("keypress", Input.Press);
window.addEventListener("keyup", Input.Release);

window.Game = Game;
window.Input = Input;
