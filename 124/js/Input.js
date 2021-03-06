export default class Input {
  constructor() {

  }
}
Input.Left = 0;
Input.Right = 1;
Input.Pause = 2;
Input.lastInput = null;
Input.isPressed = false;
Input.Release = function (e) {
  Input.isPressed = false;
}
Input.Press = function (e) {
  if (Input.isPressed) {
    return;
  } else {
    Input.isPressed = true;
  }

  switch (e.key) {
    case "ArrowLeft":
      Input.lastInput = Input.Left;
    break;
    case "ArrowRight":
      Input.lastInput = Input.Right;
    break;
    case "P":
    case "p":
      Input.lastInput = Input.Pause;
    break;
  }
}
Input.getInput = function () {
  return Input.lastInput;
}
Input.clear = function () {
  Input.lastInput = null;
}
