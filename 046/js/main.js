import Counter from "./Counter.js";

let input = document.getElementById("input");
let table = document.getElementById("histogram");

input.addEventListener("input", (e)=>{
	let histogram = Counter.getHistogram(input.value);
	
	while (table.children.length > 1) {
		table.removeChild(table.lastChild);
	}
	
	let keys = Object.keys(histogram);
	for (let i = 0; i < keys.length; i++) {
		let row = document.createElement("tr");
		let character = document.createElement("td");
		let count = document.createElement("td");
		
		character.textContent = keys[i];
		count.textContent = histogram[keys[i]];
		
		row.appendChild(character);
		row.appendChild(count);
		table.appendChild(row);
	}
});