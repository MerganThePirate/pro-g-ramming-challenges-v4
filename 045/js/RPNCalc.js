/**
 * @author dmgf2008@hotmail.com (David Bonilla Castillo)
 */
export default class RPNCalc {
  constructor() {
  }
}
RPNCalc.errorMsg = undefined;
RPNCalc.isNumber = function (str) {
  return str.match(/^[0-9]+|(?:[0-9]+\.[0-9]+)$/) !== null;
}
RPNCalc.isOperator = function (str) {
  return str.match(/^(?:\*|\/|\+|-|%|\^|!)$/) !== null;
}
RPNCalc.parse = function (input) {
  let arr = input.split(" ");
  let numCount = 0;
  let signCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (RPNCalc.isNumber(arr[i])) {
      numCount++;
      if (i == arr.length - 1 && i !== 0) {
        //console.error("Could not parse input, loose number at end of line \"" + arr[i] + "\"");
        RPNCalc.errorMsg = "Could not parse input, loose number at end of line \"" + arr[i] + "\"";
        return false;
      }
    } else if (RPNCalc.isOperator(arr[i])) {
      if (arr[i] !== "!") {
        signCount++;
      }
      if (signCount >= numCount) {
        //console.error("Could not parse input, not enough integers to satisfy operators at group " + i + " \"" + arr[i] + "\"");
        RPNCalc.errorMsg = "Could not parse input, not enough numbers to satisfy operators at group " + i + " \"" + arr[i] + "\"";
        return false;
      }
    } else {
      //console.error("Could not parse input, group " + i + " \"" + arr[i] + "\" is not a number nor an operator");
      RPNCalc.errorMsg = "Could not parse input, group " + i + " \"" + arr[i] + "\" is not a number nor an operator";
      return false;
    }
  }
  if (numCount - 1 > signCount) {
    RPNCalc.errorMsg = "Could not parse input, too many numbers; could not satisfy operators";
    return false;
  }
  return true;
}
RPNCalc.eval = function (a, b, op) {
  a = Number(a);
  b = Number(b);
  switch (op) {
    case "+":
    return a + b;
    case "-":
    return a - b;
    case "*":
    return a * b;
    case "/":
    return a / b;
    case "%":
    return a % b;
    case "^":
    return Math.pow(a,b);
    case "!":
    let f = 1;
    for (let i = 1; i <= a; i++) {
      f *= i;
    }
    return f;
  }
}
RPNCalc.process = function (stack) {
  let chr = stack.pop();
  if (RPNCalc.isOperator(chr)) {
    let b = RPNCalc.process(stack);
    if (chr === "!") {
      return RPNCalc.eval(b, 0, chr)
    }
    let a = RPNCalc.process(stack);
    return RPNCalc.eval(a, b, chr);
  } else {
    return chr;
  }
}
RPNCalc.solve = function (input) {
  if (!RPNCalc.parse(input)) {
    return RPNCalc.errorMsg;
  }
  input = input.split(" ").filter(n => n);
  return RPNCalc.process(input);
}
