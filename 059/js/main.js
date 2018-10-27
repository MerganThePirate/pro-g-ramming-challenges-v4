import CaesarCipher from "./CaesarCipher.js";

let encrypted = document.getElementById("encrypted");
let decrypted = document.getElementById("decrypted");

let decRows = [];
for (let i = 0; i < 26; i++) {
	let row = document.createElement("TR");
	let colNum = document.createElement("TD");
	let colDec = document.createElement("TD");
	
	colNum.textContent = i+1;
	
	decRows.push(colDec);
	row.appendChild(colNum);
	row.appendChild(colDec);
	decrypted.appendChild(row);
}

encrypted.addEventListener("input", (e)=>{
	for (let i = 0; i < 26; i++) {
		let attempt = CaesarCipher.encrypt(encrypted.value, i + 1);
		decRows[i].textContent = attempt;
	}
	
});

