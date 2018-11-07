import RPNCalc from "./RPNCalc.js";

let input = document.getElementById("input");
let output = document.getElementById("output");

input.addEventListener("keypress", (e)=>{
  if (e.key === "Enter") {
    output.textContent = RPNCalc.solve(input.value.trim());
    output.classList.add("flash");
  } else {
    output.classList.remove("flash");
    output.textContent = "";
  }
});
